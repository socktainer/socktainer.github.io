"use strict";
(self["webpackChunkwebsite"] = self["webpackChunkwebsite"] || []).push([[4819],{

/***/ 468:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_registry_authentication_md_94c_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-registry-authentication-md-94c.json
const site_docs_registry_authentication_md_94c_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"registry-authentication","title":"Registry Authentication","description":"Registry authentication currently depends on Apple container behavior.","source":"@site/docs/registry-authentication.md","sourceDirName":".","slug":"/registry-authentication","permalink":"/docs/registry-authentication","draft":false,"unlisted":false,"editUrl":"https://github.com/socktainer/socktainer.github.io/tree/main/docs/registry-authentication.md","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"sidebar_position":4},"sidebar":"mySidebar","previous":{"title":"Docker Context","permalink":"/docs/docker-context"}}');
// EXTERNAL MODULE: ./node_modules/.pnpm/react@19.2.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(7259);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mdx-js+react@3.1.1_@types+react@19.2.0_react@19.2.0/node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(1197);
;// ./docs/registry-authentication.md


const frontMatter = {
	sidebar_position: 4
};
const contentTitle = 'Registry Authentication';

const assets = {

};



const toc = [{
  "value": "Workaround",
  "id": "workaround",
  "level": 2
}, {
  "value": "Usage",
  "id": "usage",
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
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  }, {Details} = _components;
  if (!Details) _missingMdxReference("Details", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "registry-authentication",
        children: "Registry Authentication"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Registry authentication currently depends on Apple ", (0,jsx_runtime.jsx)(_components.code, {
        children: "container"
      }), " behavior.\nIf login appears to succeed but registry pulls or builds still fail, a manual workaround may be required."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "See:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/apple/container/issues/816#issuecomment-3534438608",
          children: "apple/container#816 comment 3534438608"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/apple/container/issues/816#issuecomment-3503618765",
          children: "apple/container#816 comment 3503618765"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "workaround",
      children: "Workaround"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["You can create a custom shell function that mimics the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "docker login"
      }), " ergonomics and writes the registry credential into the macOS System keychain in the format expected by Apple ", (0,jsx_runtime.jsx)(_components.code, {
        children: "container"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The command:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["accepts ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docker login"
        }), "-style arguments such as ", (0,jsx_runtime.jsx)(_components.code, {
          children: "--username"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "--password"
        }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "--password-stdin"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "stores the credential as an internet password entry for the target registry"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["marks the entry with the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "com.apple.container.registry"
        }), " kind expected by Apple ", (0,jsx_runtime.jsx)(_components.code, {
          children: "container"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["grants the Apple ", (0,jsx_runtime.jsx)(_components.code, {
          children: "container"
        }), " binaries access to that keychain entry so private pulls and builds can reuse it"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "warning",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["This function only works in ", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "bash"
          })
        }), " and ", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "zsh"
          })
        }), "."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "warning",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "sudo"
        }), " is required because the command writes the credential into ", (0,jsx_runtime.jsx)(_components.code, {
          children: "/Library/Keychains/System.keychain"
        }), ", which is the system-wide keychain and requires elevated privileges to modify."]
      })
    }), "\n", (0,jsx_runtime.jsxs)(Details, {
      children: [(0,jsx_runtime.jsxs)("summary", {
        children: ["Option: Apple ", (0,jsx_runtime.jsx)(_components.code, {
          children: "container"
        }), " installed from another source"]
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Use this version if ", (0,jsx_runtime.jsx)(_components.code, {
          children: "container"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "container-core-images"
        }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "socktainer"
        }), " are available on your ", (0,jsx_runtime.jsx)(_components.code, {
          children: "PATH"
        }), "."]
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "Add it to your shell configuration:"
      }), (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-bash",
          children: "container_login () {\n\tlocal CONTAINER_USERNAME=\"\"\n\tlocal CONTAINER_PASSWORD=\"\"\n\tlocal CONTAINER_REGISTRY=\"\"\n\tlocal CONTAINER_PASSWORD_STDIN=0\n\tlocal CONTAINER_BIN=\"$(which container 2>/dev/null)\"\n\tlocal CONTAINER_CORE_IMAGES_BIN=\"$(which container-core-images 2>/dev/null)\"\n\tlocal SOCKTAINER_BIN=\"$(which socktainer 2>/dev/null)\"\n\twhile [[ ${#} -gt 0 ]]\n\tdo\n\t\tcase \"${1}\" in\n\t\t\t(--username) if [[ ${#} -lt 2 ]]\n\t\t\t\tthen\n\t\t\t\t\techo \"Error: --username requires a value\" >&2\n\t\t\t\t\treturn 1\n\t\t\t\tfi\n\t\t\t\tCONTAINER_USERNAME=\"${2}\"\n\t\t\t\tshift 2 ;;\n\t\t\t(--password) if [[ ${#} -lt 2 ]]\n\t\t\t\tthen\n\t\t\t\t\techo \"Error: --password requires a value\" >&2\n\t\t\t\t\treturn 1\n\t\t\t\tfi\n\t\t\t\tif [[ ${CONTAINER_PASSWORD_STDIN} -eq 1 ]]\n\t\t\t\tthen\n\t\t\t\t\techo \"Error: --password and --password-stdin cannot be used together\" >&2\n\t\t\t\t\treturn 1\n\t\t\t\tfi\n\t\t\t\tCONTAINER_PASSWORD=\"${2}\"\n\t\t\t\tshift 2 ;;\n\t\t\t(--password-stdin) if [[ -n \"${CONTAINER_PASSWORD}\" ]]\n\t\t\t\tthen\n\t\t\t\t\techo \"Error: --password and --password-stdin cannot be used together\" >&2\n\t\t\t\t\treturn 1\n\t\t\t\tfi\n\t\t\t\tCONTAINER_PASSWORD_STDIN=1\n\t\t\t\tshift ;;\n\t\t\t(--help | -h) echo \"Usage: container_login --username USERNAME [--password PASSWORD | --password-stdin] REGISTRY\" >&2\n\t\t\t\treturn 0 ;;\n\t\t\t(--*) echo \"Error: unknown option: ${1}\" >&2\n\t\t\t\treturn 1 ;;\n\t\t\t(*) if [[ -n \"${CONTAINER_REGISTRY}\" ]]\n\t\t\t\tthen\n\t\t\t\t\techo \"Error: expected a single registry argument\" >&2\n\t\t\t\t\treturn 1\n\t\t\t\tfi\n\t\t\t\tCONTAINER_REGISTRY=\"${1}\"\n\t\t\t\tshift ;;\n\t\tesac\n\tdone\n\tif [[ ${CONTAINER_PASSWORD_STDIN} -eq 1 ]]\n\tthen\n\t\tIFS= read -r CONTAINER_PASSWORD\n\tfi\n\tif [[ -z \"${CONTAINER_USERNAME}\" || -z \"${CONTAINER_PASSWORD}\" || -z \"${CONTAINER_REGISTRY}\" ]]\n\tthen\n\t\techo \"Usage: container_login --username USERNAME [--password PASSWORD | --password-stdin] REGISTRY\" >&2\n\t\treturn 1\n\tfi\n\tif [[ -z \"${CONTAINER_BIN}\" || -z \"${CONTAINER_CORE_IMAGES_BIN}\" || -z \"${SOCKTAINER_BIN}\" ]]\n\tthen\n\t\techo \"Error: could not find container, container-core-images, or socktainer on PATH\" >&2\n\t\treturn 1\n\tfi\n\tsudo security add-internet-password -a \"${CONTAINER_USERNAME}\" -s \"${CONTAINER_REGISTRY}\" -w \"${CONTAINER_PASSWORD}\" -d \"com.apple.container.registry\" -T \"${CONTAINER_BIN}\" -T \"${CONTAINER_CORE_IMAGES_BIN}\" -T \"${SOCKTAINER_BIN}\" -U \"/Library/Keychains/System.keychain\"\n}\n"
        })
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "After storing the credential, retry the registry pull or build command through Socktainer."
      })]
    }), "\n", (0,jsx_runtime.jsxs)(Details, {
      children: [(0,jsx_runtime.jsxs)("summary", {
        children: ["Option: Apple ", (0,jsx_runtime.jsx)(_components.code, {
          children: "container"
        }), " installed from Homebrew"]
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Use this version if you installed the Apple ", (0,jsx_runtime.jsx)(_components.code, {
          children: "container"
        }), " tooling with Homebrew and want to reference the known Homebrew locations directly."]
      }), (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-bash",
          children: "container_login () {\n\tlocal CONTAINER_USERNAME=\"\"\n\tlocal CONTAINER_PASSWORD=\"\"\n\tlocal CONTAINER_REGISTRY=\"\"\n\tlocal CONTAINER_PASSWORD_STDIN=0\n\twhile [[ ${#} -gt 0 ]]\n\tdo\n\t\tcase \"${1}\" in\n\t\t\t(--username) if [[ ${#} -lt 2 ]]\n\t\t\t\tthen\n\t\t\t\t\techo \"Error: --username requires a value\" >&2\n\t\t\t\t\treturn 1\n\t\t\t\tfi\n\t\t\t\tCONTAINER_USERNAME=\"${2}\"\n\t\t\t\tshift 2 ;;\n\t\t\t(--password) if [[ ${#} -lt 2 ]]\n\t\t\t\tthen\n\t\t\t\t\techo \"Error: --password requires a value\" >&2\n\t\t\t\t\treturn 1\n\t\t\t\tfi\n\t\t\t\tif [[ ${CONTAINER_PASSWORD_STDIN} -eq 1 ]]\n\t\t\t\tthen\n\t\t\t\t\techo \"Error: --password and --password-stdin cannot be used together\" >&2\n\t\t\t\t\treturn 1\n\t\t\t\tfi\n\t\t\t\tCONTAINER_PASSWORD=\"${2}\"\n\t\t\t\tshift 2 ;;\n\t\t\t(--password-stdin) if [[ -n \"${CONTAINER_PASSWORD}\" ]]\n\t\t\t\tthen\n\t\t\t\t\techo \"Error: --password and --password-stdin cannot be used together\" >&2\n\t\t\t\t\treturn 1\n\t\t\t\tfi\n\t\t\t\tCONTAINER_PASSWORD_STDIN=1\n\t\t\t\tshift ;;\n\t\t\t(--help | -h) echo \"Usage: container_login --username USERNAME [--password PASSWORD | --password-stdin] REGISTRY\" >&2\n\t\t\t\treturn 0 ;;\n\t\t\t(--*) echo \"Error: unknown option: ${1}\" >&2\n\t\t\t\treturn 1 ;;\n\t\t\t(*) if [[ -n \"${CONTAINER_REGISTRY}\" ]]\n\t\t\t\tthen\n\t\t\t\t\techo \"Error: expected a single registry argument\" >&2\n\t\t\t\t\treturn 1\n\t\t\t\tfi\n\t\t\t\tCONTAINER_REGISTRY=\"${1}\"\n\t\t\t\tshift ;;\n\t\tesac\n\tdone\n\tif [[ ${CONTAINER_PASSWORD_STDIN} -eq 1 ]]\n\tthen\n\t\tIFS= read -r CONTAINER_PASSWORD\n\tfi\n\tif [[ -z \"${CONTAINER_USERNAME}\" || -z \"${CONTAINER_PASSWORD}\" || -z \"${CONTAINER_REGISTRY}\" ]]\n\tthen\n\t\techo \"Usage: container_login --username USERNAME [--password PASSWORD | --password-stdin] REGISTRY\" >&2\n\t\treturn 1\n\tfi\n\tsudo security add-internet-password -a \"${CONTAINER_USERNAME}\" -s \"${CONTAINER_REGISTRY}\" -w \"${CONTAINER_PASSWORD}\" -d \"com.apple.container.registry\" -T \"$(brew --prefix container)/bin/container\" -T \"$(brew --prefix container)/libexec/container-plugins/container-core-images/bin/container-core-images\" -U \"/Library/Keychains/System.keychain\"\n}\n"
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "usage",
      children: "Usage"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "With an inline password:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "container_login --username my-user --password my-token your.registry.example.com\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["With ", (0,jsx_runtime.jsx)(_components.code, {
        children: "stdin"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "printf '%s\\n' \"$REGISTRY_TOKEN\" | container_login --username my-user --password-stdin your.registry.example.com\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "After storing the credential, retry the registry pull or build command through Socktainer."
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
function _missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}



/***/ })

}]);