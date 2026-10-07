"use strict";
(self["webpackChunkwebsite"] = self["webpackChunkwebsite"] || []).push([["9452"], {
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
7086(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react@19.2.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(7259);
// EXTERNAL MODULE: ./node_modules/.pnpm/@docusaurus+core@3.10.2_@docusaurus+faster@3.10.2_@docusaurus+types@3.10.2_@swc+core@1._e0b4eaa988cc61160a482facd28fdf4e/node_modules/@docusaurus/core/lib/client/exports/Link.js
var Link = __webpack_require__(6605);
// EXTERNAL MODULE: ./node_modules/.pnpm/@fortawesome+free-solid-svg-icons@7.3.1/node_modules/@fortawesome/free-solid-svg-icons/index.mjs
var free_solid_svg_icons = __webpack_require__(3222);
// EXTERNAL MODULE: ./node_modules/.pnpm/@fortawesome+react-fontawesome@3.5.0_@fortawesome+fontawesome-svg-core@7.3.1_react@19.2.0/node_modules/@fortawesome/react-fontawesome/dist/index.js
var dist = __webpack_require__(7613);
;// CONCATENATED MODULE: ./src/components/HeroAnimation/styles.module.css
// extracted by css-extract-rspack-plugin
/* export default */ const styles_module = ({"typing":"typing__j9f","caret":"caret_2TgB","blink":"blink_UMG_","output":"output_bOmP","req":"req_PtMk","res":"res_DJEg","glowCli":"glowCli_rnhm","glowSock":"glowSock_whf2","glowApple":"glowApple_NQtc","vm":"vm_Gk4s"});
;// CONCATENATED MODULE: ./src/components/HeroAnimation/index.tsx


// Single-column grid: zone backgrounds and the flow track are placed on explicit rows behind the content.
const row = (gridRow)=>({
        gridRow,
        gridColumn: 1
    });
const nodeClass = 'relative z-10 mx-3 flex items-center justify-center gap-3 h-14 px-3 rounded-xl border border-orange-200 dark:border-orange-800 bg-white dark:bg-zinc-900';
const zoneLabelClass = 'relative z-10 mx-3 mt-3 text-[10px] font-semibold uppercase tracking-wider text-left';
function Node({ icon, title, subtitle, glow, gridRow, className = '' }) {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        style: row(gridRow),
        className: `${nodeClass} ${glow} ${className}`,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "text-3xl",
                children: icon
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "text-left",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: "font-bold text-gray-800 dark:text-zinc-200",
                        children: title
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: "text-xs text-gray-600 dark:text-zinc-400",
                        children: subtitle
                    })
                ]
            })
        ]
    });
}
function HeroAnimation() {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        role: "img",
        "aria-label": "On the CLI side, docker run sends a request through the Unix socket. On the socket side, Socktainer receives it and Apple container starts the container in its own lightweight VM, then the result goes back to the Docker CLI.",
        className: "bg-white dark:bg-zinc-800 rounded-2xl shadow-2xl p-4 border-2 border-orange-200 dark:border-orange-800 w-full max-w-md",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "grid gap-1.5",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    style: row('1 / 4'),
                    className: "rounded-xl border border-dashed border-sky-300 dark:border-sky-800 bg-sky-50 dark:bg-sky-950/30"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    style: row('5 / 10'),
                    className: "rounded-xl border border-dashed border-orange-300 dark:border-orange-800 bg-orange-50 dark:bg-orange-950/30"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    style: row('3 / 9'),
                    className: "relative pointer-events-none",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "absolute left-1/2 -translate-x-1/2 top-7 bottom-7 w-0.5 bg-orange-300 dark:bg-orange-700",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                className: styles_module.req
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                className: styles_module.res
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    style: row('1'),
                    className: `${zoneLabelClass} text-sky-700 dark:text-sky-300`,
                    children: "CLI side"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    style: row('2'),
                    className: "relative z-10 mx-3 bg-gray-900 dark:bg-black rounded-lg p-3 border border-gray-700 font-mono text-sm text-left",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "flex gap-1.5 mb-3",
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
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "text-gray-300",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                    className: "text-green-400",
                                    children: "$ "
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                    className: styles_module.typing,
                                    children: "docker run -d nginx"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                    className: `${styles_module.caret} text-orange-400`,
                                    children: "▌"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: `${styles_module.output} text-gray-400`,
                            children: "3f2a9c1e7b4d…"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Node, {
                    icon: "\uD83D\uDC33",
                    title: "Docker CLI",
                    subtitle: "docker, compose, testcontainers…",
                    glow: styles_module.glowCli,
                    gridRow: "3",
                    className: "mb-3"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    style: row('4'),
                    className: "relative flex justify-center py-1",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                        className: "relative z-10 px-3 py-1 rounded-full whitespace-nowrap font-mono text-[10px] sm:text-[11px] bg-white dark:bg-zinc-900 text-orange-700 dark:text-orange-300 border border-orange-300 dark:border-orange-700",
                        children: "\uD83D\uDD0C unix://$HOME/.socktainer/container.sock"
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    style: row('5'),
                    className: `${zoneLabelClass} text-orange-700 dark:text-orange-300`,
                    children: "Socket side"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Node, {
                    icon: "\uD83E\uDE84",
                    title: "Socktainer",
                    subtitle: "Docker REST API",
                    glow: styles_module.glowSock,
                    gridRow: "6"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    style: row('7'),
                    className: "h-8 flex items-center pl-[calc(50%+0.75rem)] whitespace-nowrap text-[10px] font-mono text-orange-600 dark:text-orange-400",
                    children: "Containerization framework"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Node, {
                    icon: "\uD83C\uDF4F",
                    title: "Apple container",
                    subtitle: "one lightweight VM per container",
                    glow: styles_module.glowApple,
                    gridRow: "8"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    style: row('9'),
                    className: "relative z-10 mx-3 mb-3 flex flex-wrap justify-center gap-2 text-xs font-mono",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                            className: "px-2 py-1 rounded-md bg-white dark:bg-zinc-900 text-gray-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700",
                            children: "VM \xb7 redis"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                            className: "px-2 py-1 rounded-md bg-white dark:bg-zinc-900 text-gray-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700",
                            children: "VM \xb7 postgres"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                            className: `${styles_module.vm} px-2 py-1 rounded-md bg-green-50 dark:bg-green-950/50 text-green-700 dark:text-green-300 border border-green-300 dark:border-green-800`,
                            children: "VM \xb7 nginx"
                        })
                    ]
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./src/components/HomepageFeatures/styles.module.css
// extracted by css-extract-rspack-plugin
/* export default */ const HomepageFeatures_styles_module = ({"term":"term_fDhC","typeIn":"typeIn_cSBa","after":"after_EVe6","fadeIn":"fadeIn_qKMj","chip":"chip_to3A","pop":"pop_v1_l","cta":"cta_lvao","ctaIn":"ctaIn_AEya","shine":"shine_JK1_"});
;// CONCATENATED MODULE: ./src/components/HomepageFeatures/index.tsx



const chipClass = 'px-2.5 py-1 rounded-md text-xs font-mono bg-zinc-100 dark:bg-zinc-900 text-gray-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-800';
const vars = (v)=>v;
const termClass = `${HomepageFeatures_styles_module.term} rounded-lg bg-zinc-950 border border-zinc-800 p-3 font-mono text-xs text-zinc-300 overflow-x-auto`;
function Chips({ items }) {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: "flex flex-wrap gap-2",
        children: items.map((item, i)=>/*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                className: `${HomepageFeatures_styles_module.chip} ${chipClass}`,
                style: vars({
                    '--i': i
                }),
                children: item
            }, item))
    });
}
const tiles = [
    {
        title: 'Docker API compatible',
        icon: '🐳',
        description: 'A Docker-compatible REST API, so the tools you already use talk to Apple containers unchanged.',
        visual: /*#__PURE__*/ (0,jsx_runtime.jsx)(Chips, {
            items: [
                'Docker CLI',
                'Testcontainers',
                'Podman Desktop',
                'any Docker API client'
            ]
        }),
        span: 'lg:col-span-2'
    },
    {
        title: 'Built on Apple container',
        icon: '🍏',
        description: "Runs on Apple's containerization framework, designed for Apple Silicon.",
        visual: /*#__PURE__*/ (0,jsx_runtime.jsx)(Chips, {
            items: [
                'arm64',
                '1 VM per container',
                'Swift'
            ]
        })
    },
    {
        title: 'Testcontainers',
        icon: '☕',
        description: 'Run your integration tests on macOS without Docker Desktop.',
        visual: /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* ["default"] */.A, {
            to: "/tutorial/testcontainers",
            className: "font-semibold text-orange-600 dark:text-orange-400 hover:text-orange-700 dark:hover:text-orange-300",
            children: "View tutorial →"
        })
    },
    {
        title: 'Container lifecycle',
        icon: '♻️',
        description: 'Create, run and inspect containers, follow logs, exec into them and stream events.',
        visual: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "space-y-3",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: termClass,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                            className: "text-green-400",
                            children: "$ "
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                            className: HomepageFeatures_styles_module.typeIn,
                            style: vars({
                                '--n': 18
                            }),
                            children: "docker logs -f web"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: `${HomepageFeatures_styles_module.after} text-zinc-500`,
                            children: "listening on :8080"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Chips, {
                    items: [
                        'create',
                        'start',
                        'stop',
                        'restart',
                        'kill',
                        'rm',
                        'inspect',
                        'logs',
                        'exec',
                        'attach',
                        'events'
                    ]
                })
            ]
        }),
        span: 'lg:col-span-2'
    },
    {
        title: 'Image management',
        icon: '📦',
        description: 'Pull, build and push OCI images, with authentication for your registries.',
        visual: /*#__PURE__*/ (0,jsx_runtime.jsx)(Chips, {
            items: [
                'pull',
                'build',
                'push',
                'tag',
                'list',
                'delete',
                'save / load'
            ]
        }),
        span: 'lg:col-span-2'
    },
    {
        title: 'Unix socket',
        icon: '🔌',
        description: 'Point DOCKER_HOST at the socket and you are done.',
        visual: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: termClass,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                    className: HomepageFeatures_styles_module.typeIn,
                    style: vars({
                        '--n': 19
                    }),
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                            className: "text-green-400",
                            children: "export"
                        }),
                        " DOCKER_HOST="
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    className: `${HomepageFeatures_styles_module.after} pl-4 whitespace-nowrap text-yellow-500`,
                    children: "unix://$HOME/.socktainer/container.sock"
                })
            ]
        })
    }
];
function Feature({ title, icon, description, visual, span = '', index }) {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        style: vars({
            '--i': index
        }),
        className: `reveal-on-scroll ${span} min-w-0 flex flex-col gap-4 p-6 rounded-2xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 hover:border-orange-400 dark:hover:border-orange-500 hover:shadow-[0_0_32px_-8px_rgb(249_115_22/0.45)] transition-[border-color,box-shadow] duration-300`,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "w-10 h-10 flex items-center justify-center rounded-xl text-xl bg-orange-100 dark:bg-orange-950/50",
                children: icon
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("h3", {
                        className: "text-lg font-bold mb-1 text-gray-900 dark:text-zinc-100",
                        children: title
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                        className: "m-0 text-gray-600 dark:text-zinc-400 leading-relaxed",
                        children: description
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "mt-auto",
                children: visual
            })
        ]
    });
}
function HomepageFeatures() {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("section", {
        className: "py-20 bg-gray-50 dark:bg-zinc-900",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "container mx-auto px-4 max-w-6xl",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "text-center lg:text-left mb-12",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: "text-sm font-semibold uppercase tracking-wider text-orange-600 dark:text-orange-400 mb-2",
                            children: "Why Socktainer"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("h2", {
                            className: "text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-zinc-100",
                            children: "Key Features"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                            className: "text-xl text-gray-600 dark:text-zinc-400 max-w-3xl mx-auto lg:mx-0",
                            children: "Running Docker workloads on macOS with Apple's container framework"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    className: "grid md:grid-cols-2 lg:grid-cols-3 gap-4",
                    children: tiles.map((tile, index)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(Feature, {
                            index: index,
                            ...tile
                        }, tile.title))
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: `${HomepageFeatures_styles_module.cta} mt-16 flex flex-col md:flex-row md:items-center justify-between gap-6 rounded-2xl p-8 md:p-10 bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-xl`,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("h3", {
                                    className: "text-2xl md:text-3xl font-bold mb-2 text-white",
                                    children: "Ready to get started?"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                    className: "m-0 text-orange-50",
                                    children: "Download Socktainer and start running your Docker workloads on Apple containers today."
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "flex flex-col sm:flex-row gap-3 shrink-0",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* ["default"] */.A, {
                                    to: "/download",
                                    className: "inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-orange-600 hover:bg-orange-50 hover:text-orange-700 font-semibold rounded-lg shadow transition-colors",
                                    children: "\uD83D\uDCE5 Download"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                                    href: "https://github.com/socktainer/socktainer",
                                    className: "inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-white/70 text-white hover:bg-white/10 hover:text-white font-semibold rounded-lg transition-colors",
                                    children: "⭐ Star on GitHub"
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
}

// EXTERNAL MODULE: ./node_modules/.pnpm/react@19.2.0/node_modules/react/index.js
var react = __webpack_require__(6363);
;// CONCATENATED MODULE: ./src/components/QuickStart/styles.module.css
// extracted by css-extract-rspack-plugin
/* export default */ const QuickStart_styles_module = ({"show":"show_M1VC","typed":"typed_Hrnj","typing":"typing_vpjy","fade":"fade_LV5L","step":"step_NNEf"});
;// CONCATENATED MODULE: ./src/components/QuickStart/index.tsx



const COMMANDS = `container system start
./socktainer
export DOCKER_HOST=unix://$HOME/.socktainer/container.sock
docker ps`;
const at = (d, n)=>({
        '--d': `${d}s`,
        '--n': n
    });
function Command({ d, n, cont, children }) {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: QuickStart_styles_module.show,
        style: at(d),
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                className: "text-green-400 select-none",
                children: cont ? '    ' : '$ '
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                className: QuickStart_styles_module.typed,
                style: at(d, n),
                children: children
            })
        ]
    });
}
function Output({ d, children }) {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: `${QuickStart_styles_module.fade} text-gray-400 select-none`,
        style: at(d),
        children: children
    });
}
function Step({ d, n, label }) {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
        className: `${QuickStart_styles_module.step} px-2 py-0.5 rounded-full bg-orange-500/20 text-orange-300 border border-orange-500/50`,
        style: at(d),
        children: [
            n,
            " \xb7 ",
            label
        ]
    });
}
function QuickStart() {
    const [copied, setCopied] = (0,react.useState)(false);
    const copy = ()=>navigator.clipboard?.writeText(COMMANDS).then(()=>{
            setCopied(true);
            setTimeout(()=>setCopied(false), 1500);
        });
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "mt-2 bg-gray-900 dark:bg-black rounded-lg shadow-2xl p-4 md:p-5 border border-gray-700 max-w-2xl mx-auto lg:mx-0",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "flex flex-wrap items-center gap-2 mb-3 text-xs font-medium",
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
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Step, {
                        d: 0.3,
                        n: 1,
                        label: "Start"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                        className: "text-gray-600",
                        children: "─"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Step, {
                        d: 1.7,
                        n: 2,
                        label: "Run"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                        className: "text-gray-600",
                        children: "─"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Step, {
                        d: 3,
                        n: 3,
                        label: "Use"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                        type: "button",
                        onClick: copy,
                        className: "ml-auto px-2 py-0.5 rounded border border-gray-600 text-gray-300 hover:text-white hover:border-gray-400 bg-transparent cursor-pointer",
                        children: copied ? '✓ Copied' : '⧉ Copy'
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("pre", {
                className: "text-xs md:text-sm text-left overflow-x-auto bg-transparent p-0 m-0",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("code", {
                    className: "text-gray-300 bg-transparent border-0 p-0",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Command, {
                            d: 0.3,
                            n: 22,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                className: "text-orange-400",
                                children: "container system start"
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Output, {
                            d: 1.3,
                            children: "✓ Apple container ready"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Command, {
                            d: 1.7,
                            n: 12,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                className: "text-orange-400",
                                children: "./socktainer"
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Output, {
                            d: 2.4,
                            children: "✓ listening on ~/.socktainer/container.sock"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Command, {
                            d: 3,
                            n: 20,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                    className: "text-green-400",
                                    children: "export"
                                }),
                                " ",
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                    className: "text-blue-400",
                                    children: "DOCKER_HOST"
                                }),
                                '=\\'
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Command, {
                            cont: true,
                            d: 3.8,
                            n: 39,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                className: "text-yellow-500",
                                children: "unix://$HOME/.socktainer/container.sock"
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Command, {
                            d: 5.3,
                            n: 9,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                    className: "text-orange-400",
                                    children: "docker"
                                }),
                                " ",
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                    className: "text-purple-400",
                                    children: "ps"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Output, {
                            d: 5.9,
                            children: 'CONTAINER ID   IMAGE   STATUS\n3f2a9c1e7b4d   nginx   Up 2 seconds'
                        })
                    ]
                })
            })
        ]
    });
}

// EXTERNAL MODULE: ./node_modules/.pnpm/@docusaurus+theme-classic@3.10.2_@docusaurus+faster@3.10.2_@docusaurus+types@3.10.2_@sw_1c3b122b14b09c693582135ada653d35/node_modules/@docusaurus/theme-classic/lib/theme/Layout/index.js + 73 modules
var Layout = __webpack_require__(3026);
// EXTERNAL MODULE: ./src/components/TailWindThemeSelector/index.tsx
var TailWindThemeSelector = __webpack_require__(5335);
;// CONCATENATED MODULE: ./src/pages/index.tsx









function HomepageHeader() {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("header", {
        className: "relative overflow-hidden flex items-center min-h-[calc(100svh-var(--ifm-navbar-height))] bg-orange-50 dark:bg-zinc-900 py-6 lg:py-8",
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
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "relative w-full container mx-auto px-4",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "grid lg:grid-cols-2 gap-8 lg:gap-10 items-center",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "min-w-0 text-center lg:text-left space-y-4",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                    className: "inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium backdrop-blur bg-orange-100/80 dark:bg-orange-950/50 text-orange-800 dark:text-orange-300 border border-orange-200 dark:border-orange-800",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(dist/* .FontAwesomeIcon */.gc, {
                                            icon: free_solid_svg_icons/* .faMicrochip */.YSV
                                        }),
                                        "Only for Apple Silicon"
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("h1", {
                                    className: "text-5xl lg:text-6xl font-bold tracking-tight text-balance text-orange-600 dark:text-orange-400 leading-none",
                                    children: "Socktainer"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                    className: "text-xl md:text-2xl font-semibold text-balance text-gray-800 dark:text-zinc-200",
                                    children: "Docker REST API for Apple Containers"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                    className: "text-base md:text-lg text-gray-600 dark:text-zinc-300 max-w-2xl mx-auto lg:mx-0",
                                    children: [
                                        "Use your existing Docker tooling on macOS with",
                                        ' ',
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* ["default"] */.A, {
                                            to: "https://github.com/apple/container",
                                            className: "whitespace-nowrap",
                                            children: "Apple containers \uD83C\uDF4F"
                                        }),
                                        ", through a Docker-compatible REST API built on Apple's Container Framework."
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "flex flex-col sm:flex-row gap-3 justify-center lg:justify-start",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Link/* ["default"] */.A, {
                                            className: "inline-flex items-center justify-center gap-3 px-6 py-3 bg-orange-500 hover:bg-orange-600 dark:bg-orange-600 dark:hover:bg-orange-700 text-white hover:text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-[background-color,box-shadow] duration-200 text-base",
                                            to: "/download",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(dist/* .FontAwesomeIcon */.gc, {
                                                    icon: free_solid_svg_icons/* .faDownload */.cbP
                                                }),
                                                "Download Now"
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Link/* ["default"] */.A, {
                                            className: "group inline-flex items-center justify-center gap-3 px-6 py-3 bg-white dark:bg-zinc-900 hover:bg-gray-50 dark:hover:bg-zinc-800 text-orange-500 dark:text-orange-400 font-semibold rounded-lg border-2 border-orange-500 dark:border-orange-500 shadow-md hover:shadow-lg transition-[background-color,box-shadow] duration-200 text-base",
                                            to: "/docs/intro",
                                            children: [
                                                "Get Started",
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(dist/* .FontAwesomeIcon */.gc, {
                                                    icon: free_solid_svg_icons/* .faArrowRight */.dmS,
                                                    className: "transition-transform group-hover:translate-x-1"
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(QuickStart, {})
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: "min-w-0 flex justify-center lg:justify-end",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(HeroAnimation, {})
                        })
                    ]
                })
            })
        ]
    });
}
function WorksWith() {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("section", {
        style: {
            animationRange: 'entry 0% entry 100%'
        },
        className: "reveal-on-scroll border-y border-zinc-200 dark:border-zinc-800 bg-white/60 dark:bg-zinc-950/40",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "container mx-auto px-4 py-5 flex flex-col md:flex-row items-center justify-between gap-4 text-sm",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-gray-600 dark:text-zinc-400",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                            className: "text-xs font-semibold uppercase tracking-wider text-orange-600 dark:text-orange-400",
                            children: "Works with"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                            className: "font-medium text-gray-800 dark:text-zinc-200",
                            children: "Docker CLI"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                            className: "font-medium text-gray-800 dark:text-zinc-200",
                            children: "Testcontainers"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                            className: "font-medium text-gray-800 dark:text-zinc-200",
                            children: "Podman Desktop"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("a", {
                    href: "https://github.com/socktainer/socktainer",
                    className: "flex items-center gap-2",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                            src: "https://img.shields.io/github/stars/socktainer/socktainer?style=flat&logo=github&label=stars&color=f97316",
                            alt: "GitHub stars",
                            height: 20
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                            src: "https://img.shields.io/github/v/release/socktainer/socktainer?style=flat&label=release&color=f97316",
                            alt: "Latest release",
                            height: 20
                        })
                    ]
                })
            ]
        })
    });
}
function Home() {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Layout/* ["default"] */.A, {
        title: "Docker API for Apple Container",
        description: "Docker-compatible REST API server built on Apple's Container Framework. Use Docker CLI, Testcontainers on macOS with containers.",
        children: [
            ' ',
            /*#__PURE__*/ (0,jsx_runtime.jsx)(TailWindThemeSelector/* ["default"] */.A, {}),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(HomepageHeader, {}),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(WorksWith, {}),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("main", {
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(HomepageFeatures, {})
            })
        ]
    });
}


},

}]);