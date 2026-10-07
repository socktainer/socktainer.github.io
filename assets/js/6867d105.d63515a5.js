"use strict";
(self["webpackChunkwebsite"] = self["webpackChunkwebsite"] || []).push([["2705"], {
5335(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(7259);
/* import */ var _docusaurus_ExecutionEnvironment__rspack_import_1 = __webpack_require__(5458);
/* import */ var react__rspack_import_2 = __webpack_require__(6363);



function TailWindThemeSelector() {
    function updadeTailwindDarkTheme() {
        if (!document?.documentElement) {
            return;
        }
        const html = document.documentElement;
        if (html.dataset?.theme === 'dark') {
            html.classList.add('dark');
            setTimeout(()=>{
                html.classList.add('dark');
            }, 100);
        } else {
            html.classList.remove('dark');
            setTimeout(()=>{
                html.classList.remove('dark');
            }, 100);
        }
    }
    (0,react__rspack_import_2.useEffect)(()=>{
        if (_docusaurus_ExecutionEnvironment__rspack_import_1/* ["default"].canUseDOM */.A.canUseDOM) {
            updadeTailwindDarkTheme();
        }
    }, [
        _docusaurus_ExecutionEnvironment__rspack_import_1/* ["default"].canUseDOM */.A.canUseDOM
    ]);
    // monitor the attribute managed by docusaurus
    (0,react__rspack_import_2.useEffect)(()=>{
        if (!_docusaurus_ExecutionEnvironment__rspack_import_1/* ["default"].canUseDOM */.A.canUseDOM) {
            return;
        }
        const mutationObserver = new MutationObserver((mutations)=>{
            mutations.forEach((mutation)=>{
                if (mutation.type === 'attributes' && (mutation.attributeName === 'data-rh' || mutation.attributeName === 'data-theme')) {
                    updadeTailwindDarkTheme();
                }
            });
        });
        mutationObserver.observe(document.documentElement, {
            attributes: true,
            childList: false,
            subtree: false
        });
        return ()=>{
            mutationObserver.disconnect();
        };
    }, [
        _docusaurus_ExecutionEnvironment__rspack_import_1/* ["default"].canUseDOM */.A.canUseDOM
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {});
}
/* export default */ const __rspack_default_export = (TailWindThemeSelector);


},
1047(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Download)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react@19.2.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(7259);
// EXTERNAL MODULE: ./node_modules/.pnpm/@docusaurus+core@3.10.2_@docusaurus+faster@3.10.2_@docusaurus+types@3.10.2_@swc+core@1._e0b4eaa988cc61160a482facd28fdf4e/node_modules/@docusaurus/core/lib/client/exports/Link.js
var Link = __webpack_require__(6605);
// EXTERNAL MODULE: ./node_modules/.pnpm/@fortawesome+free-solid-svg-icons@7.3.1/node_modules/@fortawesome/free-solid-svg-icons/index.mjs
var free_solid_svg_icons = __webpack_require__(3222);
// EXTERNAL MODULE: ./node_modules/.pnpm/@fortawesome+free-brands-svg-icons@7.3.1/node_modules/@fortawesome/free-brands-svg-icons/index.mjs
var free_brands_svg_icons = __webpack_require__(3118);
// EXTERNAL MODULE: ./node_modules/.pnpm/@fortawesome+react-fontawesome@3.5.0_@fortawesome+fontawesome-svg-core@7.3.1_react@19.2.0/node_modules/@fortawesome/react-fontawesome/dist/index.js
var dist = __webpack_require__(7613);
// EXTERNAL MODULE: ./node_modules/.pnpm/@docusaurus+theme-classic@3.10.2_@docusaurus+faster@3.10.2_@docusaurus+types@3.10.2_@sw_1c3b122b14b09c693582135ada653d35/node_modules/@docusaurus/theme-classic/lib/theme/Layout/index.js + 73 modules
var Layout = __webpack_require__(3026);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@19.2.0/node_modules/react/index.js
var react = __webpack_require__(6363);
// EXTERNAL MODULE: ./src/components/TailWindThemeSelector/index.tsx
var TailWindThemeSelector = __webpack_require__(5335);
;// CONCATENATED MODULE: ./src/pages/download.module.css
// extracted by css-extract-rspack-plugin
/* export default */ const download_module = ({"panel":"panel_GXxu","panelIn":"panelIn_Eqhv","nudge":"nudge_R818"});
;// CONCATENATED MODULE: ./src/pages/download.tsx









const RELEASES = 'https://github.com/socktainer/socktainer/releases';
const LATEST = `${RELEASES}/latest/download`;
const BREW_TAP = 'brew tap socktainer/tap \\\n  https://github.com/socktainer/homebrew-tap';
// Long commands use shell line continuations so they stay readable and still paste as-is.
const installTabs = [
    {
        id: 'brew',
        label: 'Homebrew',
        commands: [
            'brew install socktainer'
        ],
        links: [
            {
                label: 'Homebrew formula',
                to: 'https://formulae.brew.sh/formula/socktainer'
            }
        ]
    },
    {
        id: 'zip',
        label: 'ZIP',
        commands: [
            `curl -L -o socktainer.zip \\\n  ${LATEST}/socktainer.zip`,
            'unzip socktainer.zip',
            'chmod +x socktainer',
            'sudo mv socktainer /usr/local/bin/'
        ],
        links: [
            {
                label: 'Download socktainer.zip',
                to: `${LATEST}/socktainer.zip`
            }
        ]
    },
    {
        id: 'binary',
        label: 'Binary',
        commands: [
            `curl -L -o socktainer \\\n  ${LATEST}/socktainer`,
            'chmod +x socktainer',
            'sudo mv socktainer /usr/local/bin/'
        ],
        links: [
            {
                label: 'Download socktainer binary',
                to: `${LATEST}/socktainer`
            }
        ]
    },
    {
        id: 'next',
        label: 'Pre-release',
        commands: [
            BREW_TAP,
            'brew install socktainer/tap/socktainer-next'
        ],
        links: [
            {
                label: 'Homebrew tap (nightly)',
                to: 'https://github.com/socktainer/homebrew-tap'
            },
            {
                label: 'Pre-releases repository',
                to: 'https://github.com/socktainer/prereleases'
            },
            {
                label: 'Pre-release tags',
                to: 'https://github.com/socktainer/prereleases/tags'
            }
        ]
    }
];
const pillClass = 'inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/70 dark:bg-zinc-800/70 text-gray-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700';
const linkClass = 'inline-flex items-center gap-2 font-semibold text-orange-600 dark:text-orange-400 hover:text-orange-700 dark:hover:text-orange-300';
function InstallTabs() {
    const [active, setActive] = (0,react.useState)(installTabs[0].id);
    const [copied, setCopied] = (0,react.useState)(false);
    const tab = installTabs.find((t)=>t.id === active) ?? installTabs[0];
    const copy = ()=>navigator.clipboard?.writeText(tab.commands.join('\n')).then(()=>{
            setCopied(true);
            setTimeout(()=>setCopied(false), 1500);
        });
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "bg-gray-900 dark:bg-black rounded-xl shadow-2xl p-5 border border-gray-700",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "flex flex-wrap items-center gap-2 mb-4",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "flex gap-1.5 mr-2",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: "w-3 h-3 rounded-full bg-red-500"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: "w-3 h-3 rounded-full bg-yellow-500"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: "w-3 h-3 rounded-full bg-green-500"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        role: "tablist",
                        "aria-label": "Installation method",
                        className: "flex flex-wrap gap-1.5",
                        children: installTabs.map((t)=>/*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                                type: "button",
                                role: "tab",
                                id: `tab-${t.id}`,
                                "aria-selected": t.id === active,
                                "aria-controls": "install-panel",
                                onClick: ()=>setActive(t.id),
                                className: `px-3 py-1 rounded-full text-xs font-medium border cursor-pointer transition-colors ${t.id === active ? 'bg-orange-500/20 text-orange-300 border-orange-500/60' : 'bg-transparent text-gray-400 border-gray-700 hover:text-gray-200 hover:border-gray-500'}`,
                                children: t.label
                            }, t.id))
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                        type: "button",
                        onClick: copy,
                        className: "ml-auto px-2 py-0.5 rounded border border-gray-600 text-xs text-gray-300 hover:text-white hover:border-gray-400 bg-transparent cursor-pointer",
                        children: copied ? '✓ Copied' : '⧉ Copy'
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                id: "install-panel",
                role: "tabpanel",
                "aria-labelledby": `tab-${tab.id}`,
                className: download_module.panel,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("pre", {
                        className: "text-xs md:text-sm text-left overflow-x-auto bg-transparent p-0 m-0",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("code", {
                            className: "text-gray-300 bg-transparent border-0 p-0",
                            children: tab.commands.map((command)=>/*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                    children: command.split('\n').map((line, i)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                    className: "text-green-400 select-none",
                                                    children: i === 0 ? '$ ' : ''
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                    className: i === 0 ? 'text-gray-200' : 'text-yellow-500',
                                                    children: line
                                                })
                                            ]
                                        }, line))
                                }, command))
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: "mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm",
                        children: tab.links.map((link)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)(Link/* ["default"] */.A, {
                                to: link.to,
                                className: linkClass,
                                children: [
                                    link.label,
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(dist/* .FontAwesomeIcon */.gc, {
                                        icon: free_solid_svg_icons/* .faArrowRight */.dmS
                                    })
                                ]
                            }, link.to))
                    })
                ]
            }, tab.id)
        ]
    });
}
function Download() {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Layout/* ["default"] */.A, {
        title: "Download",
        description: "Download Socktainer - Docker REST API for Apple Containers",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(TailWindThemeSelector/* ["default"] */.A, {}),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("header", {
                className: "relative overflow-hidden flex items-center min-h-[calc(100svh-var(--ifm-navbar-height))] bg-orange-50 dark:bg-zinc-900 py-12 md:py-16",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        "aria-hidden": true,
                        className: "pointer-events-none absolute inset-0 text-zinc-400/40 dark:text-zinc-500/25",
                        style: {
                            backgroundImage: 'radial-gradient(currentColor 1px, transparent 1px)',
                            backgroundSize: '24px 24px',
                            maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 75%)'
                        }
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "relative w-full container mx-auto px-4 max-w-4xl text-center",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                src: "https://img.shields.io/github/v/release/socktainer/socktainer?style=flat&label=latest&color=f97316",
                                alt: "Latest release",
                                height: 20,
                                className: "mx-auto mb-4"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("h1", {
                                className: "text-4xl md:text-5xl font-bold tracking-tight text-balance text-orange-600 dark:text-orange-400 mb-4",
                                children: "Download Socktainer"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                className: "text-lg md:text-xl text-gray-600 dark:text-zinc-300 mb-8",
                                children: "Get started with Socktainer on your Apple Silicon Mac"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Link/* ["default"] */.A, {
                                to: `${LATEST}/socktainer-installer.pkg`,
                                className: "inline-flex items-center justify-center gap-3 px-8 py-4 bg-orange-500 hover:bg-orange-600 dark:bg-orange-600 dark:hover:bg-orange-700 text-white hover:text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-[background-color,box-shadow] duration-200 text-lg",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(dist/* .FontAwesomeIcon */.gc, {
                                        icon: free_solid_svg_icons/* .faDownload */.cbP
                                    }),
                                    "Download socktainer-installer.pkg"
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                className: "mt-3 text-sm text-gray-600 dark:text-zinc-400",
                                children: "Double-click to install. The installer guides you through it."
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "mt-8 flex flex-wrap justify-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                        className: pillClass,
                                        children: "macOS 26 (Tahoe) or later"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                        className: pillClass,
                                        children: "Apple silicon (M1 or later)"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* ["default"] */.A, {
                                        to: "https://github.com/apple/container",
                                        className: `${pillClass} hover:text-orange-600`,
                                        children: "Apple container installed"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                        className: pillClass,
                                        children: "Docker CLI (optional)"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("a", {
                        href: "#other-ways",
                        className: "absolute bottom-6 left-1/2 -translate-x-1/2 inline-flex items-center gap-2 text-sm text-gray-500 dark:text-zinc-400 hover:text-orange-600 dark:hover:text-orange-400",
                        children: [
                            "Other ways to install",
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(dist/* .FontAwesomeIcon */.gc, {
                                icon: free_solid_svg_icons/* .faArrowDown */.B0C,
                                className: download_module.nudge
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("main", {
                className: "container mx-auto px-4 max-w-4xl py-12 space-y-10",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
                        id: "other-ways",
                        className: "scroll-mt-24",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("h2", {
                                className: "text-2xl font-bold text-gray-900 dark:text-zinc-100 mb-4",
                                children: "Other ways to install"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(InstallTabs, {})
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "flex flex-wrap gap-x-8 gap-y-2",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Link/* ["default"] */.A, {
                                to: RELEASES,
                                className: linkClass,
                                children: [
                                    "All releases and release notes",
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(dist/* .FontAwesomeIcon */.gc, {
                                        icon: free_solid_svg_icons/* .faArrowRight */.dmS
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Link/* ["default"] */.A, {
                                to: "https://github.com/socktainer/prereleases/tags",
                                className: linkClass,
                                children: [
                                    "Pre-release tags",
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(dist/* .FontAwesomeIcon */.gc, {
                                        icon: free_solid_svg_icons/* .faArrowRight */.dmS
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
                        className: "flex flex-col md:flex-row md:items-center justify-between gap-6 rounded-2xl p-8 md:p-10 bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-xl",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("h2", {
                                        className: "text-2xl md:text-3xl font-bold mb-2 text-white",
                                        children: "Installed? Start here."
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                        className: "m-0 text-orange-50",
                                        children: "Follow the guide to run your first Docker command on Apple containers."
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "flex flex-col sm:flex-row gap-3 shrink-0",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Link/* ["default"] */.A, {
                                        to: "/docs/intro",
                                        className: "inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-orange-600 hover:bg-orange-50 hover:text-orange-700 font-semibold rounded-lg shadow transition-colors",
                                        children: [
                                            "Getting Started Guide",
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(dist/* .FontAwesomeIcon */.gc, {
                                                icon: free_solid_svg_icons/* .faArrowRight */.dmS
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Link/* ["default"] */.A, {
                                        to: "https://github.com/socktainer/socktainer",
                                        className: "inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-white/70 text-white hover:bg-white/10 hover:text-white font-semibold rounded-lg transition-colors",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(dist/* .FontAwesomeIcon */.gc, {
                                                icon: free_brands_svg_icons/* .faGithub */.Vz1
                                            }),
                                            "View on GitHub"
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
}


},

}]);