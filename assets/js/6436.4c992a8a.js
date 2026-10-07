"use strict";
(self["webpackChunkwebsite"] = self["webpackChunkwebsite"] || []).push([["6436"], {
5231(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  B: () => (createLayoutElementGroups),
  OS: () => (adjustClustersAndEdges),
  QV: () => (defaultMeasureLayout),
  dc: () => (findNonClusterChild),
  ju: () => (clusterDb),
  sc: () => (sortNodesByHierarchy),
  sv: () => (insertMeasuredNode),
  xY: () => (createCommonLayoutRenderer)
});
/* import */ var _chunk_NTY3LDVX_mjs__rspack_import_0 = __webpack_require__(1764);
/* import */ var _chunk_2BW5OAIV_mjs__rspack_import_1 = __webpack_require__(1321);
/* import */ var _chunk_DBDB3WZW_mjs__rspack_import_2 = __webpack_require__(5339);
/* import */ var _chunk_XC4XBNZT_mjs__rspack_import_3 = __webpack_require__(8133);
/* import */ var _chunk_3YJQHVM4_mjs__rspack_import_4 = __webpack_require__(2137);
/* import */ var _chunk_VPRB5NB3_mjs__rspack_import_5 = __webpack_require__(2758);
/* import */ var _chunk_X3CZISLH_mjs__rspack_import_6 = __webpack_require__(4264);
/* import */ var _chunk_Y2CYZVJY_mjs__rspack_import_7 = __webpack_require__(3870);
/* import */ var dagre_d3_es_src_graphlib_index_js__rspack_import_8 = __webpack_require__(2399);









// src/rendering-util/createGraph.ts

function createLayoutElementGroups(element, { edgePathsClass = "edges edgePaths" } = {}) {
  const rootGroups = element.insert("g").attr("class", "root");
  const clusters = rootGroups.insert("g").attr("class", "clusters");
  const edgePaths = rootGroups.insert("g").attr("class", edgePathsClass);
  const edgeLabels2 = rootGroups.insert("g").attr("class", "edgeLabels");
  const nodes = rootGroups.insert("g").attr("class", "nodes");
  return { clusters, edgePaths, edgeLabels: edgeLabels2, nodes, rootGroups };
}
(0,_chunk_Y2CYZVJY_mjs__rspack_import_7/* .__name */.K)(createLayoutElementGroups, "createLayoutElementGroups");
async function measureGroupLabel(nodesGroup, node, measureWidth) {
  if (node.label) {
    const { shapeSvg, bbox } = await (0,_chunk_XC4XBNZT_mjs__rspack_import_3/* .labelHelper */.Zk)(
      nodesGroup,
      measureWidth === void 0 ? node : { ...node, width: measureWidth }
    );
    node.labelBBox = { width: bbox.width, height: bbox.height };
    shapeSvg.remove();
  } else {
    node.labelBBox = { width: 0, height: 0 };
  }
}
(0,_chunk_Y2CYZVJY_mjs__rspack_import_7/* .__name */.K)(measureGroupLabel, "measureGroupLabel");
async function insertMeasuredNode(nodesGroup, node, renderOptions) {
  const childNodeEl = await (0,_chunk_DBDB3WZW_mjs__rspack_import_2/* .insertNode */.on)(nodesGroup, node, renderOptions);
  const boundingBox = childNodeEl.node()?.getBBox() ?? { width: 0, height: 0 };
  node.width = boundingBox.width;
  node.height = boundingBox.height;
  return childNodeEl;
}
(0,_chunk_Y2CYZVJY_mjs__rspack_import_7/* .__name */.K)(insertMeasuredNode, "insertMeasuredNode");
function resolveNodeDir(node, nodeById, diagramDir) {
  let current = node;
  const seen = /* @__PURE__ */ new Set();
  while (current) {
    if (current.dir) {
      return current.dir;
    }
    if (!current.parentId || seen.has(current.parentId)) {
      break;
    }
    seen.add(current.parentId);
    current = nodeById.get(current.parentId);
  }
  return diagramDir;
}
(0,_chunk_Y2CYZVJY_mjs__rspack_import_7/* .__name */.K)(resolveNodeDir, "resolveNodeDir");
async function createGraphWithElements(element, data4Layout, options = {}) {
  const graph = new dagre_d3_es_src_graphlib_index_js__rspack_import_8/* .Graph */.T({
    multigraph: true,
    compound: true
  });
  const edgesToProcess = [...data4Layout.edges];
  const config = (0,_chunk_VPRB5NB3_mjs__rspack_import_5/* .getConfig2 */.D7)();
  const groups = createLayoutElementGroups(element);
  const { edgeLabels: edgeLabels2, nodes: nodesGroup } = groups;
  const nodeElements = /* @__PURE__ */ new Map();
  const nodeById = new Map(data4Layout.nodes.map((node) => [node.id, node]));
  const diagramDir = data4Layout.direction;
  const hasDom = element.node() != null;
  await Promise.all(
    data4Layout.nodes.map(async (node) => {
      if (node.isGroup) {
        if (hasDom) {
          const unwrap = options.unwrapGroupLabels && node.labelType !== "markdown";
          await measureGroupLabel(nodesGroup, node, unwrap ? Number.POSITIVE_INFINITY : void 0);
        }
        graph.setNode(node.id, { ...node });
      } else {
        if (hasDom) {
          const childNodeEl = await insertMeasuredNode(nodesGroup, node, {
            config,
            dir: resolveNodeDir(node, nodeById, diagramDir)
          });
          nodeElements.set(node.id, childNodeEl);
        }
        graph.setNode(node.id, { ...node });
      }
    })
  );
  for (const edge of edgesToProcess) {
    if (hasDom && (0,_chunk_2BW5OAIV_mjs__rspack_import_1/* .hasEdgeLabel */.a6)(edge)) {
      await (0,_chunk_2BW5OAIV_mjs__rspack_import_1/* .insertEdgeLabel */.jP)(edgeLabels2, edge);
    }
    graph.setEdge(edge.start, edge.end, { ...edge }, edge.id);
    const edgeExists = data4Layout.edges.some((existingEdge) => existingEdge.id === edge.id);
    if (!edgeExists) {
      data4Layout.edges.push(edge);
    }
  }
  if (globalThis.mermaidCaptureSizes) {
    const { captureNodeSizes } = await __webpack_require__.e(/* import() */ "7465").then(__webpack_require__.bind(__webpack_require__, 1008));
    captureNodeSizes(element, data4Layout);
  }
  return {
    graph,
    groups,
    nodeElements
  };
}
(0,_chunk_Y2CYZVJY_mjs__rspack_import_7/* .__name */.K)(createGraphWithElements, "createGraphWithElements");

// src/rendering-util/layout-algorithms/dagre/mermaid-graphlib.js

var clusterDb = /* @__PURE__ */ new Map();
var descendants = /* @__PURE__ */ new Map();
var parents = /* @__PURE__ */ new Map();
var clear4 = /* @__PURE__ */ (0,_chunk_Y2CYZVJY_mjs__rspack_import_7/* .__name */.K)(() => {
  descendants.clear();
  parents.clear();
  clusterDb.clear();
}, "clear");
var isDescendant = /* @__PURE__ */ (0,_chunk_Y2CYZVJY_mjs__rspack_import_7/* .__name */.K)((id, ancestorId) => {
  const ancestorDescendants = descendants.get(ancestorId) || [];
  _chunk_X3CZISLH_mjs__rspack_import_6/* .log.trace */.R.trace("In isDescendant", ancestorId, " ", id, " = ", ancestorDescendants.includes(id));
  return ancestorDescendants.includes(id);
}, "isDescendant");
var edgeInCluster = /* @__PURE__ */ (0,_chunk_Y2CYZVJY_mjs__rspack_import_7/* .__name */.K)((edge, clusterId) => {
  const clusterDescendants = descendants.get(clusterId) || [];
  _chunk_X3CZISLH_mjs__rspack_import_6/* .log.info */.R.info("Descendants of ", clusterId, " is ", clusterDescendants);
  _chunk_X3CZISLH_mjs__rspack_import_6/* .log.info */.R.info("Edge is ", edge);
  if (edge.v === clusterId || edge.w === clusterId) {
    return false;
  }
  if (!clusterDescendants) {
    _chunk_X3CZISLH_mjs__rspack_import_6/* .log.debug */.R.debug("Tilt, ", clusterId, ",not in descendants");
    return false;
  }
  return clusterDescendants.includes(edge.v) || isDescendant(edge.v, clusterId) || isDescendant(edge.w, clusterId) || clusterDescendants.includes(edge.w);
}, "edgeInCluster");
var copy = /* @__PURE__ */ (0,_chunk_Y2CYZVJY_mjs__rspack_import_7/* .__name */.K)((clusterId, graph, newGraph, rootId) => {
  _chunk_X3CZISLH_mjs__rspack_import_6/* .log.debug */.R.debug(
    "Copying children of ",
    clusterId,
    "root",
    rootId,
    "data",
    graph.node(clusterId),
    rootId
  );
  const nodes = graph.children(clusterId) || [];
  if (clusterId !== rootId) {
    nodes.push(clusterId);
  }
  _chunk_X3CZISLH_mjs__rspack_import_6/* .log.debug */.R.debug("Copying (nodes) clusterId", clusterId, "nodes", nodes);
  nodes.forEach((node) => {
    if (graph.children(node).length > 0) {
      copy(node, graph, newGraph, rootId);
    } else {
      const data = graph.node(node);
      _chunk_X3CZISLH_mjs__rspack_import_6/* .log.info */.R.info("cp ", node, " to ", rootId, " with parent ", clusterId);
      newGraph.setNode(node, data);
      if (rootId !== graph.parent(node)) {
        _chunk_X3CZISLH_mjs__rspack_import_6/* .log.debug */.R.debug("Setting parent", node, graph.parent(node));
        newGraph.setParent(node, graph.parent(node));
      }
      if (clusterId !== rootId && node !== clusterId) {
        _chunk_X3CZISLH_mjs__rspack_import_6/* .log.debug */.R.debug("Setting parent", node, clusterId);
        newGraph.setParent(node, clusterId);
      } else {
        _chunk_X3CZISLH_mjs__rspack_import_6/* .log.info */.R.info("In copy ", clusterId, "root", rootId, "data", graph.node(clusterId), rootId);
        _chunk_X3CZISLH_mjs__rspack_import_6/* .log.debug */.R.debug(
          "Not Setting parent for node=",
          node,
          "cluster!==rootId",
          clusterId !== rootId,
          "node!==clusterId",
          node !== clusterId
        );
      }
      const edges = graph.edges(node);
      _chunk_X3CZISLH_mjs__rspack_import_6/* .log.debug */.R.debug("Copying Edges", edges);
      edges.forEach((edge) => {
        _chunk_X3CZISLH_mjs__rspack_import_6/* .log.info */.R.info("Edge", edge);
        const data2 = graph.edge(edge.v, edge.w, edge.name);
        _chunk_X3CZISLH_mjs__rspack_import_6/* .log.info */.R.info("Edge data", data2, rootId);
        try {
          if (edgeInCluster(edge, rootId)) {
            _chunk_X3CZISLH_mjs__rspack_import_6/* .log.info */.R.info("Copying as ", edge.v, edge.w, data2, edge.name);
            newGraph.setEdge(edge.v, edge.w, data2, edge.name);
            _chunk_X3CZISLH_mjs__rspack_import_6/* .log.info */.R.info("newGraph edges ", newGraph.edges(), newGraph.edge(newGraph.edges()[0]));
          } else {
            _chunk_X3CZISLH_mjs__rspack_import_6/* .log.info */.R.info(
              "Skipping copy of edge ",
              edge.v,
              "-->",
              edge.w,
              " rootId: ",
              rootId,
              " clusterId:",
              clusterId
            );
          }
        } catch (e) {
          _chunk_X3CZISLH_mjs__rspack_import_6/* .log.error */.R.error(e);
        }
      });
    }
    _chunk_X3CZISLH_mjs__rspack_import_6/* .log.debug */.R.debug("Removing node", node);
    graph.removeNode(node);
  });
}, "copy");
var extractDescendants = /* @__PURE__ */ (0,_chunk_Y2CYZVJY_mjs__rspack_import_7/* .__name */.K)((id, graph) => {
  const children = graph.children(id);
  let res = [...children];
  for (const child of children) {
    parents.set(child, id);
    res = [...res, ...extractDescendants(child, graph)];
  }
  return res;
}, "extractDescendants");
var findCommonEdges = /* @__PURE__ */ (0,_chunk_Y2CYZVJY_mjs__rspack_import_7/* .__name */.K)((graph, id1, id2) => {
  const edges1 = graph.edges().filter((edge) => edge.v === id1 || edge.w === id1);
  const edges2 = graph.edges().filter((edge) => edge.v === id2 || edge.w === id2);
  const edges1Prim = edges1.map((edge) => {
    return { v: edge.v === id1 ? id2 : edge.v, w: edge.w === id1 ? id1 : edge.w };
  });
  const edges2Prim = edges2.map((edge) => {
    return { v: edge.v, w: edge.w };
  });
  const result = edges1Prim.filter((edgeIn1) => {
    return edges2Prim.some((edge) => edgeIn1.v === edge.v && edgeIn1.w === edge.w);
  });
  return result;
}, "findCommonEdges");
var findNonClusterChild = /* @__PURE__ */ (0,_chunk_Y2CYZVJY_mjs__rspack_import_7/* .__name */.K)((id, graph, clusterId) => {
  const children = graph.children(id);
  _chunk_X3CZISLH_mjs__rspack_import_6/* .log.trace */.R.trace("Searching children of id ", id, children);
  if (children.length < 1) {
    return id;
  }
  let reserve;
  for (const child of children) {
    const _id = findNonClusterChild(child, graph, clusterId);
    const commonEdges = findCommonEdges(graph, clusterId, _id);
    if (_id) {
      if (commonEdges.length > 0) {
        reserve = _id;
      } else {
        return _id;
      }
    }
  }
  return reserve;
}, "findNonClusterChild");
var getAnchorId = /* @__PURE__ */ (0,_chunk_Y2CYZVJY_mjs__rspack_import_7/* .__name */.K)((id) => {
  if (!clusterDb.has(id)) {
    return id;
  }
  if (!clusterDb.get(id).externalConnections) {
    return id;
  }
  if (clusterDb.has(id)) {
    return clusterDb.get(id).id;
  }
  return id;
}, "getAnchorId");
var adjustClustersAndEdges = /* @__PURE__ */ (0,_chunk_Y2CYZVJY_mjs__rspack_import_7/* .__name */.K)((graph, depth) => {
  if (!graph || depth > 10) {
    _chunk_X3CZISLH_mjs__rspack_import_6/* .log.debug */.R.debug("Opting out, no graph ");
    return;
  } else {
    _chunk_X3CZISLH_mjs__rspack_import_6/* .log.debug */.R.debug("Opting in, graph ");
  }
  graph.nodes().forEach(function(id) {
    const children = graph.children(id);
    if (children.length > 0) {
      _chunk_X3CZISLH_mjs__rspack_import_6/* .log.debug */.R.debug(
        "Cluster identified",
        id,
        " Replacement id in edges: ",
        findNonClusterChild(id, graph, id)
      );
      descendants.set(id, extractDescendants(id, graph));
      clusterDb.set(id, { id: findNonClusterChild(id, graph, id), clusterData: graph.node(id) });
    }
  });
  graph.nodes().forEach(function(id) {
    const children = graph.children(id);
    const edges = graph.edges();
    if (children.length > 0) {
      _chunk_X3CZISLH_mjs__rspack_import_6/* .log.debug */.R.debug("Cluster identified", id, descendants);
      edges.forEach((edge) => {
        const d1 = isDescendant(edge.v, id);
        const d2 = isDescendant(edge.w, id);
        if (d1 ^ d2) {
          _chunk_X3CZISLH_mjs__rspack_import_6/* .log.debug */.R.debug("Edge: ", edge, " leaves cluster ", id);
          _chunk_X3CZISLH_mjs__rspack_import_6/* .log.debug */.R.debug("Descendants of XXX ", id, ": ", descendants.get(id));
          clusterDb.get(id).externalConnections = true;
        }
      });
    } else {
      _chunk_X3CZISLH_mjs__rspack_import_6/* .log.debug */.R.debug("Not a cluster ", id, descendants);
    }
  });
  for (let id of clusterDb.keys()) {
    const nonClusterChild = clusterDb.get(id).id;
    const parent = graph.parent(nonClusterChild);
    if (parent !== id && clusterDb.has(parent) && !clusterDb.get(parent).externalConnections) {
      clusterDb.get(id).id = parent;
    }
    const hasDirectOutgoingEdge = graph.edges().some((edge) => edge.v === id);
    if (nonClusterChild && clusterDb.get(id)?.externalConnections && hasDirectOutgoingEdge && isNodeInExtractableCluster(graph, nonClusterChild, id)) {
      const safeAnchor = findSafeAnchorNode(graph, id, graph.parent(nonClusterChild));
      if (safeAnchor) {
        clusterDb.get(id).id = safeAnchor;
      }
    }
  }
  graph.edges().forEach(function(e) {
    const edge = graph.edge(e);
    _chunk_X3CZISLH_mjs__rspack_import_6/* .log.debug */.R.debug("Edge " + e.v + " -> " + e.w + ": " + JSON.stringify(e));
    _chunk_X3CZISLH_mjs__rspack_import_6/* .log.debug */.R.debug("Edge " + e.v + " -> " + e.w + ": " + JSON.stringify(graph.edge(e)));
    let v = e.v;
    let w = e.w;
    _chunk_X3CZISLH_mjs__rspack_import_6/* .log.debug */.R.debug(
      "Fix XXX",
      clusterDb,
      "ids:",
      e.v,
      e.w,
      "Translating: ",
      clusterDb.get(e.v),
      " --- ",
      clusterDb.get(e.w)
    );
    if (clusterDb.get(e.v) || clusterDb.get(e.w)) {
      _chunk_X3CZISLH_mjs__rspack_import_6/* .log.debug */.R.debug("Fixing and trying - removing XXX", e.v, e.w, e.name);
      v = getAnchorId(e.v);
      w = getAnchorId(e.w);
      graph.removeEdge(e.v, e.w, e.name);
      if (v !== e.v) {
        const parent = graph.parent(v);
        clusterDb.get(parent).externalConnections = true;
        edge.fromCluster = e.v;
      }
      if (w !== e.w) {
        const parent = graph.parent(w);
        clusterDb.get(parent).externalConnections = true;
        edge.toCluster = e.w;
      }
      _chunk_X3CZISLH_mjs__rspack_import_6/* .log.debug */.R.debug("Fix Replacing with XXX", v, w, e.name);
      graph.setEdge(v, w, edge, e.name);
    }
  });
  extractor(graph, 0);
  _chunk_X3CZISLH_mjs__rspack_import_6/* .log.trace */.R.trace(clusterDb);
}, "adjustClustersAndEdges");
var extractor = /* @__PURE__ */ (0,_chunk_Y2CYZVJY_mjs__rspack_import_7/* .__name */.K)((graph, depth) => {
  if (depth > 10) {
    _chunk_X3CZISLH_mjs__rspack_import_6/* .log.error */.R.error("Bailing out");
    return;
  }
  let nodes = graph.nodes();
  let hasChildren = false;
  for (const node of nodes) {
    const children = graph.children(node);
    hasChildren = hasChildren || children.length > 0;
  }
  if (!hasChildren) {
    _chunk_X3CZISLH_mjs__rspack_import_6/* .log.debug */.R.debug("Done, no node has children", graph.nodes());
    return;
  }
  _chunk_X3CZISLH_mjs__rspack_import_6/* .log.debug */.R.debug("Nodes = ", nodes, depth);
  for (const node of nodes) {
    _chunk_X3CZISLH_mjs__rspack_import_6/* .log.debug */.R.debug(
      "Extracting node",
      node,
      clusterDb,
      clusterDb.has(node) && !clusterDb.get(node).externalConnections,
      !graph.parent(node),
      graph.node(node),
      graph.children("D"),
      " Depth ",
      depth
    );
    if (!clusterDb.has(node)) {
      _chunk_X3CZISLH_mjs__rspack_import_6/* .log.debug */.R.debug("Not a cluster", node, depth);
    } else if (!clusterDb.get(node).externalConnections && graph.children(node) && graph.children(node).length > 0) {
      _chunk_X3CZISLH_mjs__rspack_import_6/* .log.debug */.R.debug(
        "Cluster without external connections, without a parent and with children",
        node,
        depth
      );
      const graphSettings = graph.graph();
      let dir = graphSettings.rankdir === "TB" ? "LR" : "TB";
      if (clusterDb.get(node)?.clusterData?.dir) {
        dir = clusterDb.get(node).clusterData.dir;
        _chunk_X3CZISLH_mjs__rspack_import_6/* .log.debug */.R.debug("Fixing dir", clusterDb.get(node).clusterData.dir, dir);
      }
      const clusterGraph = new dagre_d3_es_src_graphlib_index_js__rspack_import_8/* .Graph */.T({
        multigraph: true,
        compound: true
      }).setGraph({
        rankdir: dir,
        nodesep: 50,
        ranksep: 50,
        marginx: 8,
        marginy: 8
      }).setDefaultEdgeLabel(function() {
        return {};
      });
      copy(node, graph, clusterGraph, node);
      graph.setNode(node, {
        clusterNode: true,
        id: node,
        clusterData: clusterDb.get(node).clusterData,
        label: clusterDb.get(node).label,
        graph: clusterGraph
      });
    } else {
      _chunk_X3CZISLH_mjs__rspack_import_6/* .log.debug */.R.debug(
        "Cluster ** ",
        node,
        " **not meeting the criteria !externalConnections:",
        !clusterDb.get(node).externalConnections,
        " no parent: ",
        !graph.parent(node),
        " children ",
        graph.children(node) && graph.children(node).length > 0,
        graph.children("D"),
        depth
      );
      _chunk_X3CZISLH_mjs__rspack_import_6/* .log.debug */.R.debug(clusterDb);
    }
  }
  nodes = graph.nodes();
  _chunk_X3CZISLH_mjs__rspack_import_6/* .log.debug */.R.debug("New list of nodes", nodes);
  for (const node of nodes) {
    const data = graph.node(node);
    _chunk_X3CZISLH_mjs__rspack_import_6/* .log.debug */.R.debug(" Now next level", node, data);
    if (data?.clusterNode) {
      extractor(data.graph, depth + 1);
    }
  }
}, "extractor");
var sorter = /* @__PURE__ */ (0,_chunk_Y2CYZVJY_mjs__rspack_import_7/* .__name */.K)((graph, nodes) => {
  if (nodes.length === 0) {
    return [];
  }
  let result = Object.assign([], nodes);
  nodes.forEach((node) => {
    const children = graph.children(node);
    const sorted = sorter(graph, children);
    result = [...result, ...sorted];
  });
  return result;
}, "sorter");
var sortNodesByHierarchy = /* @__PURE__ */ (0,_chunk_Y2CYZVJY_mjs__rspack_import_7/* .__name */.K)((graph) => sorter(graph, graph.children()), "sortNodesByHierarchy");
var isNodeInExtractableCluster = /* @__PURE__ */ (0,_chunk_Y2CYZVJY_mjs__rspack_import_7/* .__name */.K)((graph, node, rootId) => {
  let parent = graph.parent(node);
  while (parent && parent !== rootId) {
    const cluster = clusterDb.get(parent);
    if (cluster && !cluster.externalConnections) {
      return true;
    }
    parent = graph.parent(parent);
  }
  return false;
}, "isNodeInExtractableCluster");
var findSafeAnchorNode = /* @__PURE__ */ (0,_chunk_Y2CYZVJY_mjs__rspack_import_7/* .__name */.K)((graph, clusterId, excludedCluster) => {
  const children = graph.children(clusterId) ?? [];
  for (const child of children) {
    if (child === excludedCluster || isDescendant(child, excludedCluster)) {
      continue;
    }
    const candidate = findNonClusterChild(child, graph, clusterId);
    if (!candidate) {
      continue;
    }
    if (!isNodeInExtractableCluster(graph, candidate, clusterId)) {
      return candidate;
    }
  }
  return null;
}, "findSafeAnchorNode");

// src/rendering-util/layout-algorithms/common/index.ts
function createCommonLayoutRenderer({
  prepareLayout,
  measureLayout,
  runLayoutCore,
  paintLayout,
  afterPaint,
  paintOptions
}) {
  const measureLayoutFn = measureLayout ?? defaultMeasureLayout;
  return /* @__PURE__ */ (0,_chunk_Y2CYZVJY_mjs__rspack_import_7/* .__name */.K)(async function render(data4Layout, svg, helpers, options) {
    const element = svg.select("g");
    (helpers?.insertMarkers ?? _chunk_2BW5OAIV_mjs__rspack_import_1/* .markers_default */.g0)(
      element,
      data4Layout.markers,
      data4Layout.type,
      data4Layout.diagramId
    );
    clearLayoutRenderState();
    const renderContext = {
      element,
      // root SVG <g>
      helpers,
      // Mermaid helper functions
      options
      // { algorithm: "elk.layered" }
    };
    renderContext.preparedLayout =  false ? 0 : await prepareLayout?.(data4Layout, renderContext);
    const measure =  false ? 0 : await measureLayoutFn(data4Layout, renderContext);
    const coreResult =  false ? 0 : await runLayoutCore(data4Layout, renderContext);
    const paintContext = {
      ...renderContext,
      measure
    };
    if (false) {}
    if (paintLayout) {
      await paintLayout(data4Layout, paintContext, coreResult);
    } else {
      await paintLayoutData(
        data4Layout,
        paintContext,
        paintOptions
      );
    }
    await afterPaint?.(data4Layout, paintContext, coreResult);
    if (false) {}
  }, "render");
}
(0,_chunk_Y2CYZVJY_mjs__rspack_import_7/* .__name */.K)(createCommonLayoutRenderer, "createCommonLayoutRenderer");
function clearLayoutRenderState() {
  (0,_chunk_DBDB3WZW_mjs__rspack_import_2/* .clear */.IU)();
  (0,_chunk_2BW5OAIV_mjs__rspack_import_1/* .clear */.IU)();
  (0,_chunk_NTY3LDVX_mjs__rspack_import_0/* .clear */.IU)();
  clear4();
}
(0,_chunk_Y2CYZVJY_mjs__rspack_import_7/* .__name */.K)(clearLayoutRenderState, "clearLayoutRenderState");
async function defaultMeasureLayout(data4Layout, { element }, options) {
  return await createGraphWithElements(element, data4Layout, options);
}
(0,_chunk_Y2CYZVJY_mjs__rspack_import_7/* .__name */.K)(defaultMeasureLayout, "defaultMeasureLayout");
async function paintLayoutData(data4Layout, context, options = {}) {
  const { measure } = context;
  const { groups } = measure;
  for (const node of options.getNodes?.(data4Layout, context) ?? data4Layout.nodes) {
    if (options.skipNode?.(node, context)) {
      continue;
    }
    await paintLayoutNode(groups, node, context, options);
  }
  const nodeById = buildNodeLookup(data4Layout.nodes);
  for (const edge of data4Layout.edges) {
    if (shouldSkipPaintEdge(edge, options)) {
      continue;
    }
    await paintLayoutEdge(groups, edge, nodeById, data4Layout, options, context);
  }
}
(0,_chunk_Y2CYZVJY_mjs__rspack_import_7/* .__name */.K)(paintLayoutData, "paintLayoutData");
async function paintLayoutNode(groups, node, context, options) {
  if (node.clusterNode) {
    (0,_chunk_DBDB3WZW_mjs__rspack_import_2/* .positionNode */.U_)(node);
  } else if (shouldPaintAsCluster(node, context, options)) {
    await (0,_chunk_NTY3LDVX_mjs__rspack_import_0/* .insertCluster */.U)(groups.clusters, node);
  } else {
    (0,_chunk_DBDB3WZW_mjs__rspack_import_2/* .positionNode */.U_)(node);
  }
}
(0,_chunk_Y2CYZVJY_mjs__rspack_import_7/* .__name */.K)(paintLayoutNode, "paintLayoutNode");
function shouldPaintAsCluster(node, context, options) {
  return node.isGroup === true && (options.isCluster?.(node, context) ?? true);
}
(0,_chunk_Y2CYZVJY_mjs__rspack_import_7/* .__name */.K)(shouldPaintAsCluster, "shouldPaintAsCluster");
function buildNodeLookup(nodes) {
  const nodeById = /* @__PURE__ */ new Map();
  for (const node of nodes) {
    if (node?.id) {
      nodeById.set(node.id, node);
    }
  }
  return nodeById;
}
(0,_chunk_Y2CYZVJY_mjs__rspack_import_7/* .__name */.K)(buildNodeLookup, "buildNodeLookup");
function shouldSkipPaintEdge(edge, options) {
  return edge.isLayoutOnly || Boolean(options.skipEdge?.(edge));
}
(0,_chunk_Y2CYZVJY_mjs__rspack_import_7/* .__name */.K)(shouldSkipPaintEdge, "shouldSkipPaintEdge");
async function paintLayoutEdge(groups, edge, nodeById, data4Layout, options, context) {
  const paths = (0,_chunk_2BW5OAIV_mjs__rspack_import_1/* .insertEdge */.Jo)(
    groups.edgePaths,
    { ...edge },
    options.clusterDb ?? /* @__PURE__ */ new Map(),
    data4Layout.type,
    getRenderedNode(edge.start, edge, nodeById, context, options),
    getRenderedNode(edge.end, edge, nodeById, context, options),
    data4Layout.diagramId,
    shouldSkipIntersect(edge, options)
  );
  if ((0,_chunk_2BW5OAIV_mjs__rspack_import_1/* .hasEdgeLabel */.a6)(edge)) {
    if (!_chunk_2BW5OAIV_mjs__rspack_import_1/* .edgeLabels.has */.lP.has(edge.id)) {
      await (0,_chunk_2BW5OAIV_mjs__rspack_import_1/* .insertEdgeLabel */.jP)(groups.edgeLabels, edge);
    }
    positionRenderedEdgeLabel(edge, paths);
  }
}
(0,_chunk_Y2CYZVJY_mjs__rspack_import_7/* .__name */.K)(paintLayoutEdge, "paintLayoutEdge");
function getRenderedNode(id, edge, nodeById, context, options) {
  return options.getEdgeNode?.(id, edge, context) ?? (id ? nodeById.get(id) ?? {} : {});
}
(0,_chunk_Y2CYZVJY_mjs__rspack_import_7/* .__name */.K)(getRenderedNode, "getRenderedNode");
function shouldSkipIntersect(edge, options) {
  return typeof options.skipIntersect === "function" ? options.skipIntersect(edge) : options.skipIntersect ?? false;
}
(0,_chunk_Y2CYZVJY_mjs__rspack_import_7/* .__name */.K)(shouldSkipIntersect, "shouldSkipIntersect");
function positionRenderedEdgeLabel(edge, paths) {
  const path = paths?.updatedPath ?? paths?.originalPath;
  const siteConfig = (0,_chunk_VPRB5NB3_mjs__rspack_import_5/* .getConfig */.zj)();
  const { subGraphTitleTotalMargin } = (0,_chunk_DBDB3WZW_mjs__rspack_import_2/* .getSubGraphTitleMargins */.Oi)({
    flowchart: siteConfig.flowchart ?? {}
  });
  if (edge.label) {
    const el = _chunk_2BW5OAIV_mjs__rspack_import_1/* .edgeLabels.get */.lP.get(edge.id);
    const { x, y } = (0,_chunk_2BW5OAIV_mjs__rspack_import_1/* .resolveEdgeLabelPosition */.Pk)(edge, paths);
    el.attr("transform", `translate(${x}, ${y + subGraphTitleTotalMargin / 2})`);
  }
  for (const [key, text] of [
    ["startLeft", edge.startLabelLeft],
    ["startRight", edge.startLabelRight],
    ["endLeft", edge.endLabelLeft],
    ["endRight", edge.endLabelRight]
  ]) {
    if (text) {
      const { x, y } = terminalLabelTranslate(edge, key, path);
      _chunk_2BW5OAIV_mjs__rspack_import_1/* .terminalLabels.get */.UQ.get(edge.id)[key].attr("transform", `translate(${x}, ${y})`);
    }
  }
}
(0,_chunk_Y2CYZVJY_mjs__rspack_import_7/* .__name */.K)(positionRenderedEdgeLabel, "positionRenderedEdgeLabel");
var TERMINAL_LABEL_SIDES = {
  startLeft: "start_left",
  startRight: "start_right",
  endLeft: "end_left",
  endRight: "end_right"
};
function terminalLabelTranslate(edge, key, path) {
  const center = edge.terminalLabelCenters?.[key];
  if (center) {
    return { ...center };
  }
  if (!path) {
    return { x: edge.x, y: edge.y };
  }
  const arrowType = key.startsWith("start") ? edge.arrowTypeStart : edge.arrowTypeEnd;
  return _chunk_3YJQHVM4_mjs__rspack_import_4/* .utils_default.calcTerminalLabelPosition */._K.calcTerminalLabelPosition(arrowType ? 10 : 0, TERMINAL_LABEL_SIDES[key], path);
}
(0,_chunk_Y2CYZVJY_mjs__rspack_import_7/* .__name */.K)(terminalLabelTranslate, "terminalLabelTranslate");




},

}]);