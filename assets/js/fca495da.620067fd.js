"use strict";
(self["webpackChunkwebsite"] = self["webpackChunkwebsite"] || []).push([[9174],{

/***/ 1870:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_tutorial_testcontainers_md_fca_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/tutorial/site-tutorial-testcontainers-md-fca.json
const site_tutorial_testcontainers_md_fca_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"testcontainers","title":"Testcontainers","description":"This guide demonstrates how to use Testcontainers with Socktainer, which provides a Docker-compatible socket interface on top of Apple Container.","source":"@site/tutorial/testcontainers.md","sourceDirName":".","slug":"/testcontainers","permalink":"/tutorial/testcontainers","draft":false,"unlisted":false,"editUrl":"https://github.com/socktainer/socktainer.github.io/tree/main/tutorial/testcontainers.md","tags":[],"version":"current","frontMatter":{},"sidebar":"mySidebar","previous":{"title":"Tutorials","permalink":"/tutorial/"}}');
// EXTERNAL MODULE: ./node_modules/.pnpm/react@19.2.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(7259);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mdx-js+react@3.1.1_@types+react@19.2.0_react@19.2.0/node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(1197);
;// ./tutorial/testcontainers.md


const frontMatter = {};
const contentTitle = 'Testcontainers';

const assets = {

};



const toc = [{
  "value": "Overview",
  "id": "overview",
  "level": 2
}, {
  "value": "Prerequisites",
  "id": "prerequisites",
  "level": 2
}, {
  "value": "Socktainer Configuration",
  "id": "socktainer-configuration",
  "level": 2
}, {
  "value": "Step 1: Start Socktainer",
  "id": "step-1-start-socktainer",
  "level": 3
}, {
  "value": "Step 2: Configure Docker Host for Testcontainers",
  "id": "step-2-configure-docker-host-for-testcontainers",
  "level": 3
}, {
  "value": "Option 1: Environment Variable (Recommended)",
  "id": "option-1-environment-variable-recommended",
  "level": 4
}, {
  "value": "Option 2: System Property",
  "id": "option-2-system-property",
  "level": 4
}, {
  "value": "Option 3: Testcontainers Configuration File",
  "id": "option-3-testcontainers-configuration-file",
  "level": 4
}, {
  "value": "Step 3: Disable Ryuk Container",
  "id": "step-3-disable-ryuk-container",
  "level": 3
}, {
  "value": "Running Tests",
  "id": "running-tests",
  "level": 2
}, {
  "value": "Using Maven",
  "id": "using-maven",
  "level": 3
}, {
  "value": "Full Installation with Tests",
  "id": "full-installation-with-tests",
  "level": 3
}, {
  "value": "Example Project",
  "id": "example-project",
  "level": 2
}, {
  "value": "Troubleshooting",
  "id": "troubleshooting",
  "level": 2
}, {
  "value": "Testcontainers can&#39;t find Docker",
  "id": "testcontainers-cant-find-docker",
  "level": 3
}, {
  "value": "Ryuk container fails to start",
  "id": "ryuk-container-fails-to-start",
  "level": 3
}, {
  "value": "Container fails to start",
  "id": "container-fails-to-start",
  "level": 3
}, {
  "value": "Next Steps",
  "id": "next-steps",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    header: "header",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "testcontainers",
        children: "Testcontainers"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This guide demonstrates how to use ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://testcontainers.com/",
        children: "Testcontainers"
      }), " with Socktainer, which provides a Docker-compatible socket interface on top of ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/apple/container",
        children: "Apple Container"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "overview",
      children: "Overview"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Testcontainers is a popular testing library that provides lightweight, throwaway instances of common databases, web browsers, or anything else that can run in a Docker container. With Socktainer, you can use Testcontainers on macOS with Apple Silicon using Apple's native container framework."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "prerequisites",
      children: "Prerequisites"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Before you begin, ensure you have:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["☕ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Java 23 or higher"
        }), " installed"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["📦 ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Maven 3.9 or higher"
        }), " installed"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["🔌 ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Socktainer installed and running"
        }), " (see ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/download",
          children: "Download"
        }), ")"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "socktainer-configuration",
      children: "Socktainer Configuration"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-1-start-socktainer",
      children: "Step 1: Start Socktainer"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "First, start Socktainer to expose the socket that Testcontainers will use:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "./socktainer\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You should see output similar to:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "[ NOTICE ] Server started on http+unix: $HOME/.socktainer/container.sock\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-2-configure-docker-host-for-testcontainers",
      children: "Step 2: Configure Docker Host for Testcontainers"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Following the ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://java.testcontainers.org/features/configuration/#customizing-docker-host-detection",
        children: "Testcontainers Docker host configuration"
      }), ", you need to configure Testcontainers to use the Socktainer socket instead of the standard Docker socket."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "There are three ways to configure this:"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "option-1-environment-variable-recommended",
      children: "Option 1: Environment Variable (Recommended)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Set the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "DOCKER_HOST"
      }), " environment variable:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "export DOCKER_HOST=unix://$HOME/.socktainer/container.sock\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "option-2-system-property",
      children: "Option 2: System Property"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Pass the Docker host as a JVM system property:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "-Ddocker.host=unix://$HOME/.socktainer/container.sock\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "option-3-testcontainers-configuration-file",
      children: "Option 3: Testcontainers Configuration File"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Create or edit ", (0,jsx_runtime.jsx)(_components.code, {
        children: "~/.testcontainers.properties"
      }), " and add:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-properties",
        children: "docker.host=unix://$HOME/.socktainer/container.sock\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "tip",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Replace ", (0,jsx_runtime.jsx)(_components.code, {
          children: "$HOME"
        }), " with the actual path (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
          children: "/Users/yourusername"
        }), ") in the properties file."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-3-disable-ryuk-container",
      children: "Step 3: Disable Ryuk Container"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      title: "Important",
      type: "warning",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "The Ryuk container expects to mount the Docker socket inside containers. This feature is not currently supported in Socktainer mode, so you must disable Ryuk."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Set the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "TESTCONTAINERS_RYUK_DISABLED"
      }), " environment variable when running tests:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "export TESTCONTAINERS_RYUK_DISABLED=true\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Or pass it directly when running Maven:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "TESTCONTAINERS_RYUK_DISABLED=true mvn test\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "running-tests",
      children: "Running Tests"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Once Socktainer is configured, you can run your Testcontainers tests:"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "using-maven",
      children: "Using Maven"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "TESTCONTAINERS_RYUK_DISABLED=true mvn test\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "full-installation-with-tests",
      children: "Full Installation with Tests"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "TESTCONTAINERS_RYUK_DISABLED=true mvn install\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "example-project",
      children: "Example Project"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["For a complete working example, check out the ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/socktainer/sample-testcontainers-java",
        children: "sample-testcontainers-java"
      }), " repository on GitHub."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "troubleshooting",
      children: "Troubleshooting"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "testcontainers-cant-find-docker",
      children: "Testcontainers can't find Docker"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem"
      }), ": Testcontainers reports it can't find Docker."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution"
      }), ": Ensure that:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Socktainer is running (", (0,jsx_runtime.jsx)(_components.code, {
          children: "./socktainer"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "DOCKER_HOST"
        }), " is set correctly to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "unix://$HOME/.socktainer/container.sock"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["The socket file exists at ", (0,jsx_runtime.jsx)(_components.code, {
          children: "~/.socktainer/container.sock"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ryuk-container-fails-to-start",
      children: "Ryuk container fails to start"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem"
      }), ": Tests fail with Ryuk-related errors."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution"
      }), ": Make sure ", (0,jsx_runtime.jsx)(_components.code, {
        children: "TESTCONTAINERS_RYUK_DISABLED=true"
      }), " is set in your environment."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "container-fails-to-start",
      children: "Container fails to start"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem"
      }), ": Containers fail to start or run."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Check that you're running on macOS 26 (Tahoe) or later with Apple Silicon"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Verify Apple Container framework is installed"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Check Socktainer logs for any error messages"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "next-steps",
      children: "Next Steps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Explore more ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://testcontainers.com/modules/",
          children: "Testcontainers modules"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Learn about ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/docs/intro",
          children: "Socktainer configuration"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Try the ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/socktainer/sample-testcontainers-java",
          children: "example project"
        })]
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