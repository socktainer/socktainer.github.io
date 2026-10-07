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
5452(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (Download)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(7259);
/* import */ var _docusaurus_Link__rspack_import_1 = __webpack_require__(6605);
/* import */ var _theme_Layout__rspack_import_2 = __webpack_require__(3026);
/* import */ var react__rspack_import_3 = __webpack_require__(6363);
/* import */ var _components_TailWindThemeSelector__rspack_import_4 = __webpack_require__(5335);





function Download() {
    const [showZipInstructions, setShowZipInstructions] = (0,react__rspack_import_3.useState)(false);
    const [showBinaryInstructions, setShowBinaryInstructions] = (0,react__rspack_import_3.useState)(false);
    const [showPrereleaseBrewInstructions, setShowPrereleaseBrewInstructions] = (0,react__rspack_import_3.useState)(false);
    const [showPrereleaseTagLinks, setShowPrereleaseTagLinks] = (0,react__rspack_import_3.useState)(false);
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)(_theme_Layout__rspack_import_2/* ["default"] */.A, {
        title: "Download",
        description: "Download Socktainer - Docker REST API for Apple Containers",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_components_TailWindThemeSelector__rspack_import_4/* ["default"] */.A, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("main", {
                className: "container mx-auto px-4 py-12",
                children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                    className: "max-w-4xl mx-auto",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("h1", {
                            className: "text-4xl md:text-5xl font-bold text-orange-600 dark:text-orange-400 mb-6",
                            children: "Download Socktainer"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                            className: "text-xl text-gray-600 dark:text-zinc-300 mb-12",
                            children: "Get started with Socktainer on your Apple Silicon Mac"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("section", {
                            className: "mb-12 p-6 bg-orange-50 dark:bg-zinc-900 rounded-lg border-2 border-orange-200 dark:border-orange-800",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                    className: "flex items-center gap-2 mb-4",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                            className: "text-2xl",
                                            children: "\uD83D\uDCE6"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("h2", {
                                            className: "text-2xl font-bold text-gray-800 dark:text-zinc-200",
                                            children: "PKG Installer (Recommended)"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                    className: "text-gray-600 dark:text-zinc-300 mb-4",
                                    children: "The easiest way to install Socktainer is using the macOS installer package:"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                    className: "flex flex-col gap-4",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)(_docusaurus_Link__rspack_import_1/* ["default"] */.A, {
                                            to: "https://github.com/socktainer/socktainer/releases/latest/download/socktainer-installer.pkg",
                                            className: "inline-flex items-center justify-center gap-3 px-8 py-4 bg-orange-500 hover:bg-orange-600 dark:bg-orange-600 dark:hover:bg-orange-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 text-lg",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                                    className: "text-2xl",
                                                    children: "\uD83D\uDCE5"
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                                    children: "Download socktainer-installer.pkg"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                            className: "text-sm text-gray-600 dark:text-zinc-400",
                                            children: "Simply download and double-click to install. The installer will guide you through the process."
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("section", {
                            className: "mb-12 p-6 bg-gray-50 dark:bg-zinc-800 rounded-lg border border-gray-200 dark:border-zinc-700",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                    className: "flex items-center gap-2 mb-4",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                            className: "text-2xl",
                                            children: "\uD83C\uDF7A"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("h2", {
                                            className: "text-2xl font-bold text-gray-800 dark:text-zinc-200",
                                            children: "Homebrew Installation (Alternative)"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                    className: "text-gray-600 dark:text-zinc-300 mb-4",
                                    children: "If you prefer using Homebrew to manage installations and updates:"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                    className: "space-y-4",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                                    className: "text-sm font-semibold text-gray-700 dark:text-zinc-300 mb-2",
                                                    children: "1. Add the Socktainer tap:"
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                                    className: "bg-gray-900 dark:bg-black p-4 rounded-md",
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("code", {
                                                        className: "text-green-400 font-mono text-sm",
                                                        children: "brew tap socktainer/tap https://github.com/socktainer/homebrew-tap"
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                                    className: "text-sm font-semibold text-gray-700 dark:text-zinc-300 mb-2",
                                                    children: "2. Install Socktainer:"
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                                    className: "bg-gray-900 dark:bg-black p-4 rounded-md",
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("code", {
                                                        className: "text-green-400 font-mono text-sm",
                                                        children: "brew install socktainer/tap/socktainer"
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                            className: "pt-2",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("p", {
                                                className: "text-sm text-gray-600 dark:text-zinc-400",
                                                children: [
                                                    "For more information, visit the",
                                                    ' ',
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Link__rspack_import_1/* ["default"] */.A, {
                                                        to: "https://github.com/socktainer/homebrew-tap",
                                                        className: "text-orange-500 hover:text-orange-600 dark:text-orange-400 dark:hover:text-orange-300 underline",
                                                        children: "Homebrew tap repository"
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("section", {
                            className: "mb-12",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                    className: "flex items-center gap-2 mb-6",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                            className: "text-2xl",
                                            children: "�"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("h2", {
                                            className: "text-2xl font-bold text-gray-800 dark:text-zinc-200",
                                            children: "Other Download Options"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                    className: "space-y-6",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                            className: "p-6 bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-700 rounded-lg",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                                className: "flex items-start gap-3 mb-4",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                                        className: "text-3xl",
                                                        children: "\uD83D\uDCC1"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                                        className: "flex-1",
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("h3", {
                                                                className: "text-lg font-bold text-gray-800 dark:text-zinc-200 mb-2",
                                                                children: "ZIP Archive"
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                                                className: "text-sm text-gray-600 dark:text-zinc-400 mb-4",
                                                                children: "Complete package with all components"
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                                                className: "flex flex-col gap-3",
                                                                children: [
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)(_docusaurus_Link__rspack_import_1/* ["default"] */.A, {
                                                                        to: "https://github.com/socktainer/socktainer/releases/latest/download/socktainer.zip",
                                                                        className: "inline-flex items-center gap-2 text-orange-500 hover:text-orange-600 dark:text-orange-400 dark:hover:text-orange-300 underline text-sm",
                                                                        children: [
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                                                                children: "\uD83D\uDCE5"
                                                                            }),
                                                                            "Download socktainer.zip"
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("button", {
                                                                        onClick: ()=>setShowZipInstructions(!showZipInstructions),
                                                                        className: "inline-flex items-center gap-2 text-sm text-gray-700 dark:text-zinc-300 hover:text-orange-500 dark:hover:text-orange-400 transition-colors",
                                                                        children: [
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                                                                children: showZipInstructions ? '▼' : '▶'
                                                                            }),
                                                                            showZipInstructions ? 'Hide' : 'Show',
                                                                            " installation instructions"
                                                                        ]
                                                                    })
                                                                ]
                                                            }),
                                                            showZipInstructions && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                                                className: "mt-4 space-y-3",
                                                                children: [
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                                                        className: "text-sm font-semibold text-gray-700 dark:text-zinc-300",
                                                                        children: "Install using curl:"
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                                                        className: "bg-gray-900 dark:bg-black p-4 rounded-md",
                                                                        children: [
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("code", {
                                                                                className: "text-green-400 font-mono text-sm block",
                                                                                children: "curl -L -o socktainer.zip https://github.com/socktainer/socktainer/releases/latest/download/socktainer.zip"
                                                                            }),
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("code", {
                                                                                className: "text-green-400 font-mono text-sm block mt-2",
                                                                                children: "unzip socktainer.zip"
                                                                            }),
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("code", {
                                                                                className: "text-green-400 font-mono text-sm block mt-2",
                                                                                children: "chmod +x socktainer"
                                                                            }),
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("code", {
                                                                                className: "text-green-400 font-mono text-sm block mt-2",
                                                                                children: "sudo mv socktainer /usr/local/bin/"
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                            className: "p-6 bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-700 rounded-lg",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                                className: "flex items-start gap-3 mb-4",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                                        className: "text-3xl",
                                                        children: "⚙️"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                                        className: "flex-1",
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("h3", {
                                                                className: "text-lg font-bold text-gray-800 dark:text-zinc-200 mb-2",
                                                                children: "Binary Only"
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                                                className: "text-sm text-gray-600 dark:text-zinc-400 mb-4",
                                                                children: "Standalone socktainer binary"
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                                                className: "flex flex-col gap-3",
                                                                children: [
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)(_docusaurus_Link__rspack_import_1/* ["default"] */.A, {
                                                                        to: "https://github.com/socktainer/socktainer/releases/latest/download/socktainer",
                                                                        className: "inline-flex items-center gap-2 text-orange-500 hover:text-orange-600 dark:text-orange-400 dark:hover:text-orange-300 underline text-sm",
                                                                        children: [
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                                                                children: "\uD83D\uDCE5"
                                                                            }),
                                                                            "Download socktainer binary"
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("button", {
                                                                        onClick: ()=>setShowBinaryInstructions(!showBinaryInstructions),
                                                                        className: "inline-flex items-center gap-2 text-sm text-gray-700 dark:text-zinc-300 hover:text-orange-500 dark:hover:text-orange-400 transition-colors",
                                                                        children: [
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                                                                children: showBinaryInstructions ? '▼' : '▶'
                                                                            }),
                                                                            showBinaryInstructions ? 'Hide' : 'Show',
                                                                            " installation instructions"
                                                                        ]
                                                                    })
                                                                ]
                                                            }),
                                                            showBinaryInstructions && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                                                className: "mt-4 space-y-3",
                                                                children: [
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                                                        className: "text-sm font-semibold text-gray-700 dark:text-zinc-300",
                                                                        children: "Install using curl:"
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                                                        className: "bg-gray-900 dark:bg-black p-4 rounded-md",
                                                                        children: [
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("code", {
                                                                                className: "text-green-400 font-mono text-sm block",
                                                                                children: "curl -L -o socktainer https://github.com/socktainer/socktainer/releases/latest/download/socktainer"
                                                                            }),
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("code", {
                                                                                className: "text-green-400 font-mono text-sm block mt-2",
                                                                                children: "chmod +x socktainer"
                                                                            }),
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("code", {
                                                                                className: "text-green-400 font-mono text-sm block mt-2",
                                                                                children: "sudo mv socktainer /usr/local/bin/"
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                            className: "p-6 bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-700 rounded-lg",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                                className: "flex items-start gap-3 mb-4",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                                        className: "text-3xl",
                                                        children: "\uD83E\uDDEA"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                                        className: "flex-1",
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)(_docusaurus_Link__rspack_import_1/* ["default"] */.A, {
                                                                to: "https://github.com/socktainer/prereleases",
                                                                className: "block hover:opacity-80 transition-opacity",
                                                                children: [
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("h3", {
                                                                        className: "text-lg font-bold text-gray-800 dark:text-zinc-200 mb-2",
                                                                        children: "Pre-releases"
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                                                        className: "text-sm text-gray-600 dark:text-zinc-400",
                                                                        children: "Download preview builds and early release candidates from the prereleases repository"
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                                                className: "mt-4 space-y-4",
                                                                children: [
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("button", {
                                                                                onClick: ()=>setShowPrereleaseBrewInstructions(!showPrereleaseBrewInstructions),
                                                                                className: "inline-flex items-center gap-2 text-sm text-gray-700 dark:text-zinc-300 hover:text-orange-500 dark:hover:text-orange-400 transition-colors",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                                                                        children: showPrereleaseBrewInstructions ? '▼' : '▶'
                                                                                    }),
                                                                                    showPrereleaseBrewInstructions ? 'Hide' : 'Show',
                                                                                    " Homebrew pre-release instructions"
                                                                                ]
                                                                            }),
                                                                            showPrereleaseBrewInstructions && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                                                                className: "mt-4 space-y-3",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                                                                        className: "text-sm font-semibold text-gray-700 dark:text-zinc-300",
                                                                                        children: "Install a pre-release build with Homebrew:"
                                                                                    }),
                                                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                                                                        className: "bg-gray-900 dark:bg-black p-4 rounded-md",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("code", {
                                                                                                className: "text-green-400 font-mono text-sm block",
                                                                                                children: "brew tap socktainer/tap https://github.com/socktainer/homebrew-tap"
                                                                                            }),
                                                                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("code", {
                                                                                                className: "text-green-400 font-mono text-sm block mt-2",
                                                                                                children: "brew install socktainer/tap/socktainer-next"
                                                                                            })
                                                                                        ]
                                                                                    })
                                                                                ]
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("button", {
                                                                                onClick: ()=>setShowPrereleaseTagLinks(!showPrereleaseTagLinks),
                                                                                className: "inline-flex items-center gap-2 text-sm text-gray-700 dark:text-zinc-300 hover:text-orange-500 dark:hover:text-orange-400 transition-colors",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                                                                        children: showPrereleaseTagLinks ? '▼' : '▶'
                                                                                    }),
                                                                                    showPrereleaseTagLinks ? 'Hide' : 'Show',
                                                                                    " pre-release tags"
                                                                                ]
                                                                            }),
                                                                            showPrereleaseTagLinks && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                                                                className: "mt-4 space-y-3",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                                                                        className: "text-sm font-semibold text-gray-700 dark:text-zinc-300",
                                                                                        children: "Browse all published pre-release tags:"
                                                                                    }),
                                                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)(_docusaurus_Link__rspack_import_1/* ["default"] */.A, {
                                                                                        to: "https://github.com/socktainer/prereleases/tags",
                                                                                        className: "inline-flex items-center gap-2 text-orange-500 hover:text-orange-600 dark:text-orange-400 dark:hover:text-orange-300 underline text-sm",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                                                                                children: "\uD83C\uDFF7️"
                                                                                            }),
                                                                                            "View prerelease tags"
                                                                                        ]
                                                                                    })
                                                                                ]
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                            className: "p-6 bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-700 rounded-lg",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)(_docusaurus_Link__rspack_import_1/* ["default"] */.A, {
                                                to: "https://github.com/socktainer/socktainer/releases",
                                                className: "flex items-start gap-3 hover:opacity-80 transition-opacity",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                                        className: "text-3xl",
                                                        children: "\uD83D\uDD16"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("h3", {
                                                                className: "text-lg font-bold text-gray-800 dark:text-zinc-200 mb-2",
                                                                children: "All Releases"
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                                                className: "text-sm text-gray-600 dark:text-zinc-400",
                                                                children: "Browse all versions and release notes on GitHub"
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("section", {
                            className: "mb-12 p-6 bg-gray-50 dark:bg-zinc-900 rounded-lg",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                    className: "flex items-center gap-2 mb-4",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                            className: "text-2xl",
                                            children: "\uD83D\uDCBB"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("h2", {
                                            className: "text-2xl font-bold text-gray-800 dark:text-zinc-200",
                                            children: "System Requirements"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("ul", {
                                    className: "list-disc list-inside space-y-2 text-gray-600 dark:text-zinc-300",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("li", {
                                            children: "macOS 26 (Tahoe) or later with Apple silicon (M1, M2, M3, M4, or later)"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("li", {
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Link__rspack_import_1/* ["default"] */.A, {
                                                    to: "https://github.com/apple/container",
                                                    className: "text-orange-500 hover:text-orange-600 dark:text-orange-400 dark:hover:text-orange-300 underline",
                                                    children: "Apple Container framework"
                                                }),
                                                ' ',
                                                "installed"
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("li", {
                                            children: "Docker CLI (optional, for Docker compatibility)"
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("section", {
                            className: "p-6 bg-orange-50 dark:bg-zinc-900 rounded-lg border border-orange-200 dark:border-orange-800",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                    className: "flex items-center gap-2 mb-4",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                            className: "text-2xl",
                                            children: "\uD83D\uDE80"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("h2", {
                                            className: "text-2xl font-bold text-gray-800 dark:text-zinc-200",
                                            children: "Next Steps"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                    className: "text-gray-600 dark:text-zinc-300 mb-4",
                                    children: "After installation, check out our documentation to get started:"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                    className: "flex flex-wrap gap-4",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)(_docusaurus_Link__rspack_import_1/* ["default"] */.A, {
                                            to: "/docs/intro",
                                            className: "inline-flex items-center gap-2 px-6 py-3 bg-orange-500 hover:bg-orange-600 dark:bg-orange-600 dark:hover:bg-orange-700 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                                    children: "\uD83D\uDCDA"
                                                }),
                                                "Getting Started Guide"
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)(_docusaurus_Link__rspack_import_1/* ["default"] */.A, {
                                            to: "https://github.com/socktainer/socktainer",
                                            className: "inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-zinc-800 hover:bg-gray-50 dark:hover:bg-zinc-700 text-orange-500 dark:text-orange-400 font-semibold rounded-lg border-2 border-orange-500 dark:border-orange-500 shadow-md hover:shadow-lg transition-all",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                                    children: "\uD83D\uDCBB"
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
            })
        ]
    });
}


},

}]);