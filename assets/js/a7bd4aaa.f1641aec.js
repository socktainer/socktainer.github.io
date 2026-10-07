"use strict";
(self["webpackChunkwebsite"] = self["webpackChunkwebsite"] || []).push([["5575"], {
6184(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ DocVersionRoot)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react@19.2.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(7259);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@19.2.0/node_modules/react/index.js
var react = __webpack_require__(6363);
// EXTERNAL MODULE: ./node_modules/.pnpm/@docusaurus+theme-common@3.10.2_@docusaurus+plugin-content-docs@3.10.2_@docusaurus+fast_ad0dd8562e3965c128bf37b11a6bc88d/node_modules/@docusaurus/theme-common/lib/utils/metadataUtils.js
var metadataUtils = __webpack_require__(5712);
;// CONCATENATED MODULE: ./node_modules/.pnpm/@docusaurus+plugin-content-docs@3.10.2_@docusaurus+faster@3.10.2_@docusaurus+types@3.10_d84afea549a3aaf0b6c3f4d80944711f/node_modules/@docusaurus/plugin-content-docs/lib/client/docsSearch.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 

/** The search tag to append as each doc's metadata. */ function getDocsVersionSearchTag(pluginId, versionName) {
    return `docs-${pluginId}-${versionName}`;
}
/**
 * Gets the relevant docs tags to search.
 * This is the logic that powers the contextual search feature.
 *
 * If user is browsing Android 1.4 docs, he'll get presented with:
 * - Android '1.4' docs
 * - iOS 'preferred | latest' docs
 *
 * The result is generic and not coupled to Algolia/DocSearch on purpose.
 */ function useDocsContextualSearchTags() {
    const allDocsData = useAllDocsData();
    const activePluginAndVersion = useActivePluginAndVersion();
    const docsPreferredVersionByPluginId = useDocsPreferredVersionByPluginId();
    // This can't use more specialized hooks because we are mapping over all
    // plugin instances.
    function getDocPluginTags(pluginId) {
        const activeVersion = activePluginAndVersion?.activePlugin.pluginId === pluginId ? activePluginAndVersion.activeVersion : undefined;
        const preferredVersion = docsPreferredVersionByPluginId[pluginId];
        const latestVersion = allDocsData[pluginId].versions.find((v)=>v.isLast);
        const version = activeVersion ?? preferredVersion ?? latestVersion;
        return getDocsVersionSearchTag(pluginId, version.name);
    }
    return [
        ...Object.keys(allDocsData).map(getDocPluginTags)
    ];
}

// EXTERNAL MODULE: ./node_modules/.pnpm/@docusaurus+plugin-content-docs@3.10.2_@docusaurus+faster@3.10.2_@docusaurus+types@3.10_d84afea549a3aaf0b6c3f4d80944711f/node_modules/@docusaurus/plugin-content-docs/lib/client/docsVersion.js
var docsVersion = __webpack_require__(8037);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-router-config@5.1.1_react-router@5.3.4_react@19.2.0__react@19.2.0/node_modules/react-router-config/esm/react-router-config.js
var react_router_config = __webpack_require__(2073);
// EXTERNAL MODULE: ./node_modules/.pnpm/@docusaurus+theme-classic@3.10.2_@docusaurus+faster@3.10.2_@docusaurus+types@3.10.2_@sw_1c3b122b14b09c693582135ada653d35/node_modules/@docusaurus/theme-classic/lib/theme/SearchMetadata/index.js
var SearchMetadata = __webpack_require__(5301);
;// CONCATENATED MODULE: ./node_modules/.pnpm/@docusaurus+theme-classic@3.10.2_@docusaurus+faster@3.10.2_@docusaurus+types@3.10.2_@sw_1c3b122b14b09c693582135ada653d35/node_modules/@docusaurus/theme-classic/lib/theme/DocVersionRoot/index.js

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 




function DocVersionRootMetadata(props) {
    const { version } = props;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(SearchMetadata/* ["default"] */.A, {
                version: version.version,
                tag: getDocsVersionSearchTag(version.pluginId, version.version)
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(metadataUtils/* .PageMetadata */.be, {
                children: version.noIndex && /*#__PURE__*/ (0,jsx_runtime.jsx)("meta", {
                    name: "robots",
                    content: "noindex, nofollow"
                })
            })
        ]
    });
}
function DocVersionRootContent(props) {
    const { version, route } = props;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(metadataUtils/* .HtmlClassNameProvider */.e3, {
        className: version.className,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(docsVersion/* .DocsVersionProvider */.n, {
            version: version,
            children: (0,react_router_config/* .renderRoutes */.v)(route.routes)
        })
    });
}
function DocVersionRoot(props) {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(DocVersionRootMetadata, {
                ...props
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(DocVersionRootContent, {
                ...props
            })
        ]
    });
}


},

}]);