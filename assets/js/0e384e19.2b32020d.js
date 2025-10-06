"use strict";
(self["webpackChunkwebsite"] = self["webpackChunkwebsite"] || []).push([[3976],{

/***/ 3987:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_intro_md_0e3_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-intro-md-0e3.json
const site_docs_intro_md_0e3_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"intro","title":"Introduction","description":"Welcome to Socktainer 🚢 - a CLI/daemon that brings Docker compatibility to Apple\'s containerization framework on macOS!","source":"@site/docs/intro.md","sourceDirName":".","slug":"/intro","permalink":"/docs/intro","draft":false,"unlisted":false,"editUrl":"https://github.com/socktainer/socktainer.github.io/tree/main/docs/intro.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"mySidebar","next":{"title":"Docker Engine API Feature Parity","permalink":"/docs/api-feature-parity"}}');
// EXTERNAL MODULE: ./node_modules/.pnpm/react@19.2.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(7259);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mdx-js+react@3.1.1_@types+react@19.2.0_react@19.2.0/node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(1197);
;// ./docs/intro.md


const frontMatter = {
	sidebar_position: 1
};
const contentTitle = 'Introduction';

const assets = {

};



const toc = [{
  "value": "What is Socktainer?",
  "id": "what-is-socktainer",
  "level": 2
}, {
  "value": "Key Features ✨",
  "id": "key-features-",
  "level": 2
}, {
  "value": "Requirements 📋",
  "id": "requirements-",
  "level": 2
}, {
  "value": "Getting Started",
  "id": "getting-started",
  "level": 2
}, {
  "value": "Community 💬",
  "id": "community-",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "introduction",
        children: "Introduction"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Welcome to ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Socktainer"
      }), " 🚢 - a CLI/daemon that brings Docker compatibility to Apple's containerization framework on macOS!"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "what-is-socktainer",
      children: "What is Socktainer?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Socktainer exposes a Docker-compatible REST API on top of Apple's containerization libraries, allowing you to use familiar Docker tools and clients to manage containers on your Apple Silicon Mac. It seamlessly bridges the gap between the Docker ecosystem and Apple's container framework."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["By creating a Unix domain socket at ", (0,jsx_runtime.jsx)(_components.code, {
        children: "$HOME/.socktainer/container.sock"
      }), ", Socktainer enables common Docker clients (like the Docker CLI) to interact with local containers on macOS using the standard Docker API surface 🐳💻."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "key-features-",
      children: "Key Features ✨"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Built on Apple's Container Framework"
        }), " 🍏 - Leverages macOS containerization capabilities"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Docker API Compatibility"
        }), " 🔄 - Provides partial compatibility with the Docker REST API"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Unix Domain Socket"
        }), " 📡 - Listens on ", (0,jsx_runtime.jsx)(_components.code, {
          children: "$HOME/.socktainer/container.sock"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Container Lifecycle Management"
        }), " 🛠️ - Full support for inspect, start, stop, restart, kill, and remove operations"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Image Operations"
        }), " 📦 - List, pull, delete images, and build from Dockerfiles"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Advanced Features"
        }), " 📄 - Container logs, health checks, exec support, and event broadcasting"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Volume & Network Support"
        }), " 🔌 - Create and manage volumes and networks"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Podman Desktop Integration"
        }), " - Works with the ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/podman-desktop/extension-apple-container",
          children: "Podman Desktop Apple Container extension"
        }), " to visualize Apple containers and images"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "requirements-",
      children: "Requirements 📋"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "To use Socktainer, you need:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "macOS on Apple Silicon (arm64)"
        }), " 🍏💻", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Apple's container APIs only work on arm64 Macs"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["See ", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://developer.apple.com/documentation/containerframework",
              children: "Apple container requirements"
            }), " for more details"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "getting-started",
      children: "Getting Started"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Ready to use Socktainer? Head over to the ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/download",
        children: "Download page"
      }), " to get the latest release and installation instructions."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["For a comprehensive list of supported Docker API endpoints and feature parity status, check out the ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./api-feature-parity",
        children: "API Feature Parity"
      }), " documentation."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "community-",
      children: "Community 💬"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Join the Socktainer community to ask questions, share ideas, or get help:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Discord"
        }), ": ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://discord.gg/Pw9VWKcUEt",
          children: "discord.gg/Pw9VWKcUEt"
        }), " – Chat in real time with contributors and users"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "GitHub Discussions"
        }), ": ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/socktainer/socktainer/discussions",
          children: "socktainer/discussions"
        }), " – Ask questions or propose features"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "GitHub Issues"
        }), ": ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/socktainer/socktainer/issues",
          children: "socktainer/issues"
        }), " – Report bugs or request features"]
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