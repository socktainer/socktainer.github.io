"use strict";
(self["webpackChunkwebsite"] = self["webpackChunkwebsite"] || []).push([[2302],{

/***/ 6368:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_docker_context_md_64e_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-docker-context-md-64e.json
const site_docs_docker_context_md_64e_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"docker-context","title":"Docker Context","description":"Socktainer can be used through a dedicated Docker context, so standard Docker CLI commands target the Socktainer socket instead of the default Docker daemon.","source":"@site/docs/docker-context.md","sourceDirName":".","slug":"/docker-context","permalink":"/docs/docker-context","draft":false,"unlisted":false,"editUrl":"https://github.com/socktainer/socktainer.github.io/tree/main/docs/docker-context.md","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3},"sidebar":"mySidebar","previous":{"title":"Docker Engine API Feature Parity","permalink":"/docs/api-feature-parity"},"next":{"title":"Registry Authentication","permalink":"/docs/registry-authentication"}}');
// EXTERNAL MODULE: ./node_modules/.pnpm/react@19.2.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(7259);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mdx-js+react@3.1.1_@types+react@19.2.0_react@19.2.0/node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(1197);
;// ./docs/docker-context.md


const frontMatter = {
	sidebar_position: 3
};
const contentTitle = 'Docker Context';

const assets = {

};



const toc = [{
  "value": "Current Status",
  "id": "current-status",
  "level": 2
}, {
  "value": "Create the Context",
  "id": "create-the-context",
  "level": 2
}, {
  "value": "Switch to Socktainer",
  "id": "switch-to-socktainer",
  "level": 2
}, {
  "value": "Verify",
  "id": "verify",
  "level": 2
}, {
  "value": "Switch Back",
  "id": "switch-back",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    p: "p",
    pre: "pre",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "docker-context",
        children: "Docker Context"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Socktainer can be used through a dedicated Docker context, so standard Docker CLI commands target the Socktainer socket instead of the default Docker daemon."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "current-status",
      children: "Current Status"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Issue ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/socktainer/socktainer/issues/26",
        children: "socktainer/socktainer#26"
      }), "\ntracks adding a built-in option to generate a Docker context automatically."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Today, you can create the context manually and use it immediately with the Docker CLI."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "create-the-context",
      children: "Create the Context"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Run:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "docker context create --description socktainer --docker \"host=unix://${HOME}/.socktainer/container.sock\" socktainer\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This creates a Docker context named ", (0,jsx_runtime.jsx)(_components.code, {
        children: "socktainer"
      }), " pointing at:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "unix://${HOME}/.socktainer/container.sock\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "switch-to-socktainer",
      children: "Switch to Socktainer"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "docker context use socktainer\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["After that, regular Docker commands such as ", (0,jsx_runtime.jsx)(_components.code, {
        children: "docker ps"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "docker images"
      }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "docker logs"
      }), " will go through Socktainer."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "verify",
      children: "Verify"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "docker context ls\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You should see a context similar to:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "NAME            DESCRIPTION                               DOCKER ENDPOINT                                     ERROR\ndefault         Current DOCKER_HOST based configuration   unix:///var/run/docker.sock\ndesktop-linux   Docker Desktop                            unix:///Users/your-user/.docker/run/docker.sock\nsocktainer *    socktainer                                unix:///Users/your-user/.socktainer/container.sock\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "switch-back",
      children: "Switch Back"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "To go back to your default Docker context:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "docker context use default\n"
      })
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