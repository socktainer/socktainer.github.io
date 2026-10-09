"use strict";
(self["webpackChunkwebsite"] = self["webpackChunkwebsite"] || []).push([["2504"], {
9324(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_api_feature_parity_md_464_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-api-feature-parity-md-464.json
var site_docs_api_feature_parity_md_464_namespaceObject = JSON.parse('{"id":"api-feature-parity","title":"Docker Engine API Feature Parity","description":"This page tracks how much of the Docker Engine API v1.51 Socktainer supports on top of Apple container.","source":"@site/docs/api-feature-parity.md","sourceDirName":".","slug":"/api-feature-parity","permalink":"/docs/api-feature-parity","draft":false,"unlisted":false,"editUrl":"https://github.com/socktainer/socktainer.github.io/tree/main/docs/api-feature-parity.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"mySidebar","previous":{"title":"Introduction","permalink":"/docs/intro"},"next":{"title":"Docker Context","permalink":"/docs/docker-context"}}')
// EXTERNAL MODULE: ./node_modules/.pnpm/react@19.2.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(7259);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mdx-js+react@3.1.1_@types+react@19.3.0_react@19.2.0/node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(1746);
;// CONCATENATED MODULE: ./docs/api-feature-parity.md


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
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "docker-engine-api-feature-parity",
        children: "Docker Engine API Feature Parity"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This page tracks how much of the ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/moby/moby/blob/v28.5.2/api/swagger.yaml",
        children: "Docker Engine API v1.51"
      }), " Socktainer supports on top of Apple container."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Source ticket: ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/socktainer/socktainer/issues/14",
        children: "socktainer/socktainer#14"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "✅ Supported"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "⚠️ Partial / pending"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "❌ Not applicable"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "52"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "17"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "28"
            })
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "52 of 69 applicable endpoints are supported (~75%)."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "note",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Compared against Apple container ", (0,jsx_runtime.jsx)(_components.code, {
          children: "1.5.0"
        }), " (commit ", (0,jsx_runtime.jsx)(_components.code, {
          children: "d265d669ecae041bf338cb3b39c4118316d138f0"
        }), ").\nLast updated October 8th, 2026."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "status-legend",
      children: "Status Legend"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Implemented"
        }), " - The linked PRs and issues give details and limitations"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["⚠️ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Partial / pending"
        }), " - Not implemented or stubbed yet. Apple container may add support later, or Socktainer may emulate it"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["❌ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Not applicable"
        }), " - Not applicable to Apple container (for example swarm or pause). Returns a \"not supported\" error"]
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
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/containers/create"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/socktainer/socktainer/issues/37",
              children: "#37"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/containers/{id}/json"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
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
          }), (0,jsx_runtime.jsx)(_components.td, {})]
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
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/socktainer/socktainer/issues/313",
              children: "#313"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/containers/{id}/stats"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/socktainer/socktainer/issues/217",
              children: "#217"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/containers/{id}/resize"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/socktainer/socktainer/issues/232",
              children: "#232"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/containers/{id}/start"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/containers/{id}/stop"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/containers/{id}/restart"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/socktainer/socktainer/issues/82",
              children: "#82"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/containers/{id}/kill"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/socktainer/socktainer/issues/82",
              children: "#82"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/containers/{id}/update"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/socktainer/socktainer/issues/308",
              children: "#308"
            }), " — restart policy only; resource limits are ignored with a warning (VM resources fixed at create)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/containers/{id}/rename"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/socktainer/socktainer/issues/418",
              children: "#418"
            }), " — never-started containers only (409 otherwise)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/containers/{id}/pause"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not supported by Apple container, returns an error"
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
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/socktainer/socktainer/issues/94",
              children: "#94"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/containers/{id}/attach/ws"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/socktainer/socktainer/issues/243",
              children: "#243"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/containers/{id}/wait"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/socktainer/socktainer/issues/82",
              children: "#82"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/containers/{id}"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/containers/{id}/archive"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/socktainer/socktainer/issues/169",
              children: "#169"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/containers/prune"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/socktainer/socktainer/issues/65",
              children: "#65"
            })
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
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/build"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/socktainer/socktainer/issues/101",
              children: "#101"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/build/prune"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/socktainer/socktainer/issues/183",
              children: "#183"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/images/create"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/socktainer/socktainer/issues/12",
              children: "#12"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/socktainer/socktainer/issues/321",
              children: "#321"
            }), " (import via ", (0,jsx_runtime.jsx)(_components.code, {
              children: "fromSrc=-"
            }), "; URL ", (0,jsx_runtime.jsx)(_components.code, {
              children: "fromSrc"
            }), " unsupported)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/images/{name}/json"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/images/{name}/history"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/socktainer/socktainer/issues/188",
              children: "#188"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/images/{name}/push"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/socktainer/socktainer/issues/128",
              children: "#128"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/images/{name}/tag"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/socktainer/socktainer/issues/126",
              children: "#126"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/images/{name}"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/images/search"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/socktainer/socktainer/issues/309",
              children: "#309"
            }), " — Docker Hub only"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/images/prune"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/socktainer/socktainer/issues/133",
              children: "#133"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/images/{name}/get"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/socktainer/socktainer/issues/137",
              children: "#137"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/images/get"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/socktainer/socktainer/issues/137",
              children: "#137"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/images/load"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/socktainer/socktainer/issues/137",
              children: "#137"
            })
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
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/exec/{id}/start"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/exec/{id}/resize"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/exec/{id}/json"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
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
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/socktainer/socktainer/issues/58",
              children: "#58"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/volumes/create"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/socktainer/socktainer/issues/58",
              children: "#58"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/volumes/{name}"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/socktainer/socktainer/issues/58",
              children: "#58"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/volumes/prune"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/socktainer/socktainer/issues/58",
              children: "#58"
            })
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
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/socktainer/socktainer/issues/44",
              children: "#44"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/networks/{id}"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/socktainer/socktainer/issues/44",
              children: "#44"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/socktainer/socktainer/issues/52",
              children: "#52"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/networks/create"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/socktainer/socktainer/issues/52",
              children: "#52"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/networks/{id}/connect"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "⚠️"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["No-op returning 200 so Compose proceeds; Apple container cannot attach networks (", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/socktainer/socktainer/issues/212",
              children: "#212"
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
            children: ["No-op returning 200 so Compose proceeds; Apple container cannot detach networks (", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/socktainer/socktainer/issues/212",
              children: "#212"
            }), ")"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/networks/prune"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/socktainer/socktainer/issues/52",
              children: "#52"
            })
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
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/socktainer/socktainer/issues/105",
              children: "#105"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/info"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/socktainer/socktainer/issues/28",
              children: "#28"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/version"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/socktainer/socktainer/issues/28",
              children: "#28"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/_ping"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
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
              children: "/events"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/system/df"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/socktainer/socktainer/issues/191",
              children: "#191"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/distribution/{name}/json"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/socktainer/socktainer/issues/311",
              children: "#311"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/session"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not supported by Apple container, returns an error"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "plugins",
      children: "Plugins"
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
            children: ["Apple container supports a plugin system, should be revisited in the future (", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/socktainer/socktainer/issues/18",
              children: "#18"
            }), ")."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/plugins/privileges"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "⚠️"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Apple container supports a plugin system, should be revisited in the future (", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/socktainer/socktainer/issues/18",
              children: "#18"
            }), ")."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/plugins/pull"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "⚠️"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Apple container supports a plugin system, should be revisited in the future (", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/socktainer/socktainer/issues/18",
              children: "#18"
            }), ")."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/plugins/{name}/json"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "⚠️"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Apple container supports a plugin system, should be revisited in the future (", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/socktainer/socktainer/issues/18",
              children: "#18"
            }), ")."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/plugins/{name}"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "⚠️"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Apple container supports a plugin system, should be revisited in the future (", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/socktainer/socktainer/issues/18",
              children: "#18"
            }), ")."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/plugins/{name}/enable"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "⚠️"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Apple container supports a plugin system, should be revisited in the future (", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/socktainer/socktainer/issues/18",
              children: "#18"
            }), ")."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/plugins/{name}/disable"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "⚠️"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Apple container supports a plugin system, should be revisited in the future (", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/socktainer/socktainer/issues/18",
              children: "#18"
            }), ")."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/plugins/{name}/upgrade"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "⚠️"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Apple container supports a plugin system, should be revisited in the future (", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/socktainer/socktainer/issues/18",
              children: "#18"
            }), ")."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/plugins/create"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "⚠️"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Apple container supports a plugin system, should be revisited in the future (", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/socktainer/socktainer/issues/18",
              children: "#18"
            }), ")."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/plugins/{name}/push"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "⚠️"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Apple container supports a plugin system, should be revisited in the future (", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/socktainer/socktainer/issues/18",
              children: "#18"
            }), ")."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/plugins/{name}/set"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "⚠️"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Apple container supports a plugin system, should be revisited in the future (", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/socktainer/socktainer/issues/18",
              children: "#18"
            }), ")."]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "swarm-not-applicable",
      children: "Swarm (Not Applicable)"
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
            children: "❌"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Not applicable (swarm), returns a \"not supported\" error (", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/socktainer/socktainer/issues/17",
              children: "#17"
            }), ")"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/nodes/{id}"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Not applicable (swarm), returns a \"not supported\" error (", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/socktainer/socktainer/issues/17",
              children: "#17"
            }), ")"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/nodes/{id}/update"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Not applicable (swarm), returns a \"not supported\" error (", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/socktainer/socktainer/issues/17",
              children: "#17"
            }), ")"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/swarm"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Not applicable (swarm), returns a \"not supported\" error (", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/socktainer/socktainer/issues/17",
              children: "#17"
            }), ")"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/swarm/init"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Not applicable (swarm), returns a \"not supported\" error (", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/socktainer/socktainer/issues/17",
              children: "#17"
            }), ")"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/swarm/join"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Not applicable (swarm), returns a \"not supported\" error (", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/socktainer/socktainer/issues/17",
              children: "#17"
            }), ")"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/swarm/leave"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Not applicable (swarm), returns a \"not supported\" error (", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/socktainer/socktainer/issues/17",
              children: "#17"
            }), ")"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/swarm/update"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Not applicable (swarm), returns a \"not supported\" error (", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/socktainer/socktainer/issues/17",
              children: "#17"
            }), ")"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/swarm/unlockkey"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Not applicable (swarm), returns a \"not supported\" error (", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/socktainer/socktainer/issues/17",
              children: "#17"
            }), ")"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/swarm/unlock"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Not applicable (swarm), returns a \"not supported\" error (", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/socktainer/socktainer/issues/17",
              children: "#17"
            }), ")"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/services"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Not applicable (swarm), returns a \"not supported\" error (", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/socktainer/socktainer/issues/17",
              children: "#17"
            }), ")"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/services/create"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Not applicable (swarm), returns a \"not supported\" error (", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/socktainer/socktainer/issues/17",
              children: "#17"
            }), ")"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/services/{id}"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Not applicable (swarm), returns a \"not supported\" error (", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/socktainer/socktainer/issues/17",
              children: "#17"
            }), ")"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/services/{id}/update"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Not applicable (swarm), returns a \"not supported\" error (", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/socktainer/socktainer/issues/17",
              children: "#17"
            }), ")"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/services/{id}/logs"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Not applicable (swarm), returns a \"not supported\" error (", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/socktainer/socktainer/issues/17",
              children: "#17"
            }), ")"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/tasks"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Not applicable (swarm), returns a \"not supported\" error (", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/socktainer/socktainer/issues/17",
              children: "#17"
            }), ")"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/tasks/{id}"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Not applicable (swarm), returns a \"not supported\" error (", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/socktainer/socktainer/issues/17",
              children: "#17"
            }), ")"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/tasks/{id}/logs"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Not applicable (swarm), returns a \"not supported\" error (", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/socktainer/socktainer/issues/17",
              children: "#17"
            }), ")"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/secrets"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Not applicable (swarm), returns a \"not supported\" error (", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/socktainer/socktainer/issues/17",
              children: "#17"
            }), ")"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/secrets/create"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Not applicable (swarm), returns a \"not supported\" error (", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/socktainer/socktainer/issues/17",
              children: "#17"
            }), ")"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/secrets/{id}"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Not applicable (swarm), returns a \"not supported\" error (", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/socktainer/socktainer/issues/17",
              children: "#17"
            }), ")"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/secrets/{id}/update"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Not applicable (swarm), returns a \"not supported\" error (", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/socktainer/socktainer/issues/17",
              children: "#17"
            }), ")"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/configs"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Not applicable (swarm), returns a \"not supported\" error (", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/socktainer/socktainer/issues/17",
              children: "#17"
            }), ")"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/configs/create"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Not applicable (swarm), returns a \"not supported\" error (", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/socktainer/socktainer/issues/17",
              children: "#17"
            }), ")"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/configs/{id}"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Not applicable (swarm), returns a \"not supported\" error (", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/socktainer/socktainer/issues/17",
              children: "#17"
            }), ")"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/configs/{id}/update"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Not applicable (swarm), returns a \"not supported\" error (", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/socktainer/socktainer/issues/17",
              children: "#17"
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
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}



},

}]);