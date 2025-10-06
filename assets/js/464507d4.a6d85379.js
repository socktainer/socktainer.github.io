"use strict";
(self["webpackChunkwebsite"] = self["webpackChunkwebsite"] || []).push([[1019],{

/***/ 2121:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_api_feature_parity_md_464_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-api-feature-parity-md-464.json
const site_docs_api_feature_parity_md_464_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"api-feature-parity","title":"Docker Engine API Feature Parity","description":"This page tracks the implementation status of Docker Engine API v1.51 endpoints in Socktainer, comparing against Apple container v0.5.0.","source":"@site/docs/api-feature-parity.md","sourceDirName":".","slug":"/api-feature-parity","permalink":"/docs/api-feature-parity","draft":false,"unlisted":false,"editUrl":"https://github.com/socktainer/socktainer.github.io/tree/main/docs/api-feature-parity.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"mySidebar","previous":{"title":"Introduction","permalink":"/docs/intro"}}');
// EXTERNAL MODULE: ./node_modules/.pnpm/react@19.2.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(7259);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mdx-js+react@3.1.1_@types+react@19.2.0_react@19.2.0/node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(1197);
;// ./docs/api-feature-parity.md


const frontMatter = {
	sidebar_position: 2
};
const contentTitle = 'Docker Engine API Feature Parity';

const assets = {

};



const toc = [{
  "value": "Status Legend",
  "id": "status-legend",
  "level": 2
}, {
  "value": "Containers",
  "id": "containers",
  "level": 2
}, {
  "value": "Images",
  "id": "images",
  "level": 2
}, {
  "value": "Exec",
  "id": "exec",
  "level": 2
}, {
  "value": "Volumes",
  "id": "volumes",
  "level": 2
}, {
  "value": "Networks",
  "id": "networks",
  "level": 2
}, {
  "value": "System",
  "id": "system",
  "level": 2
}, {
  "value": "Plugins",
  "id": "plugins",
  "level": 2
}, {
  "value": "Swarm (Not Applicable)",
  "id": "swarm-not-applicable",
  "level": 2
}, {
  "value": "Contributing to API Coverage",
  "id": "contributing-to-api-coverage",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "docker-engine-api-feature-parity",
        children: "Docker Engine API Feature Parity"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This page tracks the implementation status of Docker Engine API v1.51 endpoints in Socktainer, comparing against Apple container ", (0,jsx_runtime.jsx)(_components.code, {
        children: "v0.5.0"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "status-legend",
      children: "Status Legend"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Implemented"
        }), " - Endpoint is fully functional"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["❌ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Not Implemented"
        }), " - Endpoint is stubbed but not yet functional"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["⚠️ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Limited/Not Applicable"
        }), " - Cannot be implemented due to Apple container limitations or not applicable to Socktainer's use case"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "containers",
      children: "Containers"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Endpoint"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Status"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Notes"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/containers/json"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "List containers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/containers/create"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Create container (", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/socktainer/socktainer/pull/37",
              children: "#37"
            }), ")"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/containers/{id}/json"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Inspect container"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/containers/{id}/top"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "⚠️"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["No matching capability available (", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/socktainer/socktainer/issues/18",
              children: "#18"
            }), ")"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/containers/{id}/logs"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Container logs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/containers/{id}/changes"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "⚠️"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["No matching capability available (", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/socktainer/socktainer/issues/18",
              children: "#18"
            }), ")"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/containers/{id}/export"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "⚠️"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["No matching capability available (", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/socktainer/socktainer/issues/18",
              children: "#18"
            }), ")"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/containers/{id}/stats"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "⚠️"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["No matching capability available (", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/socktainer/socktainer/issues/18",
              children: "#18"
            }), ")"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/containers/{id}/resize"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "⚠️"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["No matching capability available (", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/socktainer/socktainer/issues/18",
              children: "#18"
            }), ")"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/containers/{id}/start"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Start container"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/containers/{id}/stop"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stop container"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/containers/{id}/restart"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Restart container (", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/socktainer/socktainer/pull/82",
              children: "#82"
            }), ")"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/containers/{id}/kill"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Kill container (", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/socktainer/socktainer/pull/82",
              children: "#82"
            }), ")"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/containers/{id}/update"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "⚠️"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["No matching capability available (", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/socktainer/socktainer/issues/18",
              children: "#18"
            }), ")"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/containers/{id}/rename"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "⚠️"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["No matching capability available (", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/socktainer/socktainer/issues/18",
              children: "#18"
            }), ")"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/containers/{id}/pause"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "⚠️"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["No matching capability available (", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/socktainer/socktainer/issues/18",
              children: "#18"
            }), ")"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/containers/{id}/unpause"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "⚠️"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["No matching capability available (", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/socktainer/socktainer/issues/18",
              children: "#18"
            }), ")"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/containers/{id}/attach"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Attach to container (", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/socktainer/socktainer/pull/94",
              children: "#94"
            }), ")"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/containers/{id}/attach/ws"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Not implemented, stubbed for now (", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/socktainer/socktainer/issues/18",
              children: "#18"
            }), ")"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/containers/{id}/wait"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Wait for container (", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/socktainer/socktainer/pull/82",
              children: "#82"
            }), ")"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/containers/{id}"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Remove container"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/containers/{id}/archive"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "⚠️"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["No matching capability available (", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/socktainer/socktainer/issues/18",
              children: "#18"
            }), ")"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/containers/prune"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Prune containers (", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/socktainer/socktainer/pull/65",
              children: "#65"
            }), ")"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "images",
      children: "Images"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Endpoint"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Status"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Notes"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/images/json"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "List images"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/build"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Build image (", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/socktainer/socktainer/pull/101",
              children: "#101"
            }), ")"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/build/prune"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Not implemented, stubbed for now (", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/socktainer/socktainer/issues/18",
              children: "#18"
            }), ")"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/images/create"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Pull/import image (", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/socktainer/socktainer/pull/12",
              children: "#12"
            }), ")"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/images/{name}/json"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Inspect image"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/images/{name}/history"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "⚠️"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["No matching capability available (", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/socktainer/socktainer/issues/18",
              children: "#18"
            }), "), could be handled entirely within socktainer"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/images/{name}/push"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Not implemented, stubbed for now (", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/socktainer/socktainer/issues/18",
              children: "#18"
            }), ")"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/images/{name}/tag"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Not implemented, stubbed for now (", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/socktainer/socktainer/issues/18",
              children: "#18"
            }), ")"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/images/{name}"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Remove image"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/images/search"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "⚠️"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["No matching capability available (", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/socktainer/socktainer/issues/18",
              children: "#18"
            }), ")"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/images/prune"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Not implemented, stubbed for now (", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/socktainer/socktainer/issues/18",
              children: "#18"
            }), ")"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/images/{name}/get"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Not implemented, stubbed for now (", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/socktainer/socktainer/issues/18",
              children: "#18"
            }), ")"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/images/get"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Not implemented, stubbed for now (", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/socktainer/socktainer/issues/18",
              children: "#18"
            }), ")"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/images/load"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Not implemented, stubbed for now (", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/socktainer/socktainer/issues/18",
              children: "#18"
            }), ")"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exec",
      children: "Exec"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Endpoint"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Status"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Notes"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/containers/{id}/exec"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Create exec instance"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/exec/{id}/start"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Start exec instance"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/exec/{id}/resize"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Resize exec TTY"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/exec/{id}/json"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Inspect exec instance"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "volumes",
      children: "Volumes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Endpoint"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Status"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Notes"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/volumes"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["List volumes (", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/socktainer/socktainer/pull/58",
              children: "#58"
            }), ")"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/volumes/create"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Create volume (", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/socktainer/socktainer/pull/58",
              children: "#58"
            }), ")"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/volumes/{name}"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Inspect/remove volume (", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/socktainer/socktainer/pull/58",
              children: "#58"
            }), ")"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/volumes/prune"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Prune volumes (", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/socktainer/socktainer/pull/58",
              children: "#58"
            }), ")"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "networks",
      children: "Networks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Endpoint"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Status"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Notes"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/networks"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["List networks (", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/socktainer/socktainer/pull/44",
              children: "#44"
            }), ")"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/networks/{id}"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Inspect/remove network (", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/socktainer/socktainer/pull/44",
              children: "#44"
            }), ", ", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/socktainer/socktainer/pull/52",
              children: "#52"
            }), ")"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/networks/create"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Create network (", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/socktainer/socktainer/pull/52",
              children: "#52"
            }), ")"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/networks/{id}/connect"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "⚠️"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["No matching capability available (", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/socktainer/socktainer/issues/18",
              children: "#18"
            }), ")"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/networks/{id}/disconnect"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "⚠️"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["No matching capability available (", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/socktainer/socktainer/issues/18",
              children: "#18"
            }), ")"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/networks/prune"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Prune networks (", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/socktainer/socktainer/pull/52",
              children: "#52"
            }), ")"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "system",
      children: "System"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Endpoint"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Status"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Notes"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/auth"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Authentication (", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/socktainer/socktainer/pull/105",
              children: "#105"
            }), ")"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/info"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["System information (", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/socktainer/socktainer/pull/28",
              children: "#28"
            }), ")"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/version"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Version information (", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/socktainer/socktainer/pull/28",
              children: "#28"
            }), ")"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/_ping"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ping endpoint"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/events"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "System events"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/system/df"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "⚠️"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["No matching capability available (", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/socktainer/socktainer/issues/18",
              children: "#18"
            }), ")"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/commit"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "⚠️"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["No matching capability available (", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/socktainer/socktainer/issues/18",
              children: "#18"
            }), ")"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/distribution/{name}/json"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Not implemented, stubbed for now (", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/socktainer/socktainer/issues/18",
              children: "#18"
            }), ")"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/session"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "⚠️"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["No matching capability available (", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/socktainer/socktainer/issues/18",
              children: "#18"
            }), ")"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "plugins",
      children: "Plugins"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "Apple container supports a plugin system. These endpoints should be revisited once the project matures."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Endpoint"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Status"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Notes"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/plugins"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "⚠️"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Apple container supports plugins, revisit in future (", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/socktainer/socktainer/issues/18",
              children: "#18"
            }), ")"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/plugins/privileges"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "⚠️"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Apple container supports plugins, revisit in future (", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/socktainer/socktainer/issues/18",
              children: "#18"
            }), ")"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/plugins/pull"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "⚠️"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Apple container supports plugins, revisit in future (", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/socktainer/socktainer/issues/18",
              children: "#18"
            }), ")"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/plugins/{name}/json"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "⚠️"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Apple container supports plugins, revisit in future (", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/socktainer/socktainer/issues/18",
              children: "#18"
            }), ")"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/plugins/{name}"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "⚠️"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Apple container supports plugins, revisit in future (", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/socktainer/socktainer/issues/18",
              children: "#18"
            }), ")"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/plugins/{name}/enable"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "⚠️"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Apple container supports plugins, revisit in future (", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/socktainer/socktainer/issues/18",
              children: "#18"
            }), ")"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/plugins/{name}/disable"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "⚠️"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Apple container supports plugins, revisit in future (", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/socktainer/socktainer/issues/18",
              children: "#18"
            }), ")"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/plugins/{name}/upgrade"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "⚠️"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Apple container supports plugins, revisit in future (", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/socktainer/socktainer/issues/18",
              children: "#18"
            }), ")"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/plugins/create"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "⚠️"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Apple container supports plugins, revisit in future (", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/socktainer/socktainer/issues/18",
              children: "#18"
            }), ")"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/plugins/{name}/push"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "⚠️"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Apple container supports plugins, revisit in future (", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/socktainer/socktainer/issues/18",
              children: "#18"
            }), ")"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/plugins/{name}/set"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "⚠️"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Apple container supports plugins, revisit in future (", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/socktainer/socktainer/issues/18",
              children: "#18"
            }), ")"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "swarm-not-applicable",
      children: "Swarm (Not Applicable)"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "warning",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "Swarm-related endpoints are not applicable to Socktainer and should return appropriate errors to users."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Endpoint"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Status"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Notes"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/nodes"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "⚠️"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Not applicable, part of swarm (", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/socktainer/socktainer/issues/18",
              children: "#18"
            }), ")"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/nodes/{id}"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "⚠️"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Not applicable, part of swarm (", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/socktainer/socktainer/issues/18",
              children: "#18"
            }), ")"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/nodes/{id}/update"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "⚠️"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Not applicable, part of swarm (", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/socktainer/socktainer/issues/18",
              children: "#18"
            }), ")"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/swarm"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "⚠️"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Not applicable (", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/socktainer/socktainer/pull/17",
              children: "#17"
            }), ")"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/swarm/init"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "⚠️"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Not applicable (", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/socktainer/socktainer/pull/17",
              children: "#17"
            }), ")"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/swarm/join"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "⚠️"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Not applicable (", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/socktainer/socktainer/pull/17",
              children: "#17"
            }), ")"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/swarm/leave"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "⚠️"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Not applicable (", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/socktainer/socktainer/pull/17",
              children: "#17"
            }), ")"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/swarm/update"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "⚠️"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Not applicable (", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/socktainer/socktainer/pull/17",
              children: "#17"
            }), ")"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/swarm/unlockkey"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "⚠️"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Not applicable (", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/socktainer/socktainer/pull/17",
              children: "#17"
            }), ")"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/swarm/unlock"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "⚠️"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Not applicable (", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/socktainer/socktainer/pull/17",
              children: "#17"
            }), ")"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/services"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "⚠️"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Not applicable, part of swarm (", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/socktainer/socktainer/issues/18",
              children: "#18"
            }), ")"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/services/create"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "⚠️"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Not applicable, part of swarm (", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/socktainer/socktainer/issues/18",
              children: "#18"
            }), ")"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/services/{id}"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "⚠️"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Not applicable, part of swarm (", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/socktainer/socktainer/issues/18",
              children: "#18"
            }), ")"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/services/{id}/update"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "⚠️"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Not applicable, part of swarm (", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/socktainer/socktainer/issues/18",
              children: "#18"
            }), ")"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/services/{id}/logs"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "⚠️"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Not applicable, part of swarm (", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/socktainer/socktainer/issues/18",
              children: "#18"
            }), ")"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/tasks"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "⚠️"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Not applicable, part of swarm (", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/socktainer/socktainer/issues/18",
              children: "#18"
            }), ")"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/tasks/{id}"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "⚠️"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Not applicable, part of swarm (", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/socktainer/socktainer/issues/18",
              children: "#18"
            }), ")"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/tasks/{id}/logs"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "⚠️"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Not applicable, part of swarm (", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/socktainer/socktainer/issues/18",
              children: "#18"
            }), ")"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/secrets"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "⚠️"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Not applicable, part of swarm (", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/socktainer/socktainer/issues/18",
              children: "#18"
            }), ")"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/secrets/create"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "⚠️"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Not applicable, part of swarm (", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/socktainer/socktainer/issues/18",
              children: "#18"
            }), ")"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/secrets/{id}"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "⚠️"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Not applicable, part of swarm (", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/socktainer/socktainer/issues/18",
              children: "#18"
            }), ")"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/secrets/{id}/update"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "⚠️"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Not applicable, part of swarm (", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/socktainer/socktainer/issues/18",
              children: "#18"
            }), ")"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/configs"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "⚠️"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Not applicable, part of swarm (", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/socktainer/socktainer/issues/18",
              children: "#18"
            }), ")"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/configs/create"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "⚠️"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Not applicable, part of swarm (", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/socktainer/socktainer/issues/18",
              children: "#18"
            }), ")"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/configs/{id}"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "⚠️"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Not applicable, part of swarm (", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/socktainer/socktainer/issues/18",
              children: "#18"
            }), ")"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/configs/{id}/update"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "⚠️"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Not applicable, part of swarm (", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/socktainer/socktainer/issues/18",
              children: "#18"
            }), ")"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "contributing-to-api-coverage",
      children: "Contributing to API Coverage"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This feature parity list is subject to change as both Socktainer and Apple's container framework mature. If you're interested in implementing any of the missing endpoints:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Check if there's an existing GitHub issue for the endpoint"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review the Apple container framework capabilities"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "File a new issue before starting implementation to coordinate with other contributors"
      }), "\n"]
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}



/***/ })

}]);