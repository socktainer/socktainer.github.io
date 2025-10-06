"use strict";
(self["webpackChunkwebsite"] = self["webpackChunkwebsite"] || []).push([[1901],{

/***/ 4613:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_tutorial_index_md_a58_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/tutorial/site-tutorial-index-md-a58.json
const site_tutorial_index_md_a58_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"index","title":"Tutorials","description":"Learn how to use Socktainer with popular tools and frameworks","source":"@site/tutorial/index.md","sourceDirName":".","slug":"/","permalink":"/tutorial/","draft":false,"unlisted":false,"editUrl":"https://github.com/socktainer/socktainer.github.io/tree/main/tutorial/index.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1,"title":"Tutorials","description":"Learn how to use Socktainer with popular tools and frameworks"},"sidebar":"mySidebar","next":{"title":"Testcontainers","permalink":"/tutorial/testcontainers"}}');
// EXTERNAL MODULE: ./node_modules/.pnpm/react@19.2.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(7259);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mdx-js+react@3.1.1_@types+react@19.2.0_react@19.2.0/node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(1197);
;// ./tutorial/index.md


const frontMatter = {
	sidebar_position: 1,
	title: 'Tutorials',
	description: 'Learn how to use Socktainer with popular tools and frameworks'
};
const contentTitle = 'Socktainer Tutorials';

const assets = {

};



const toc = [{
  "value": "Available Tutorials:",
  "id": "available-tutorials",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    header: "header",
    li: "li",
    p: "p",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "socktainer-tutorials",
        children: "Socktainer Tutorials"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Step-by-step guides to help you integrate Socktainer with various tools and frameworks."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "available-tutorials",
      children: "Available Tutorials:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/tutorial/testcontainers",
          children: "Testcontainers"
        }), " Learn how to use Testcontainers with Socktainer for integration testing in Java applications."]
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