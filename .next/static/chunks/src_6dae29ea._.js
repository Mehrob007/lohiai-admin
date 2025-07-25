(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/stors/globalState.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "useGlobalState": (()=>useGlobalState)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/react.mjs [app-client] (ecmascript)");
"use client";
;
const LOCAL_STORAGE_KEY = "headerContent";
const getInitialHeaderContent = ()=>{
    if ("TURBOPACK compile-time truthy", 1) {
        try {
            const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
            return stored ? JSON.parse(stored) : {
                backPath: "",
                addPath: "",
                title: ""
            };
        } catch  {
            return {
                backPath: "",
                addPath: "",
                title: ""
            };
        }
    }
    return {
        backPath: "",
        addPath: "",
        title: ""
    }; // SSR fallback
};
const useGlobalState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])((set)=>({
        headerContent: getInitialHeaderContent(),
        setHeaderContent: (content)=>{
            localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(content));
            set({
                headerContent: content
            });
        }
    }));
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/LeftMenu.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>LeftMenu)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stors$2f$globalState$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/stors/globalState.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const menu = [
    {
        title: "Хабар",
        href: [
            "/",
            "/adding-news"
        ]
    },
    {
        title: "Роҳбарият",
        href: [
            "/leadership",
            "/adding-leadership"
        ]
    },
    {
        title: "Таърихи Коллеҷи милитсия",
        href: [
            "/college-history",
            "/adding-college-history"
        ]
    },
    {
        title: "Сохтори Коллеҷ",
        href: [
            "/college-structure",
            "/adding-college-structure"
        ]
    },
    {
        title: "Курсанти беҳтарин",
        href: [
            "/cadets",
            "/adding-cadets"
        ]
    },
    {
        title: "Баромадҳо",
        href: [
            "/outputs",
            "/adding-outputs"
        ]
    },
    {
        title: "Нақшаҳои таълимӣ ва нашрияҳо",
        href: [
            "/educational-plans",
            "/adding-educational-plans"
        ]
    },
    {
        title: "Шӯрои илмию педагогӣ",
        href: [
            "/pedagogical-council",
            "/adding-pedagogical-council"
        ]
    },
    {
        title: "Санадҳо",
        href: [
            "/acts",
            "/adding-acts"
        ]
    }
];
function LeftMenu() {
    _s();
    const pathName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const { setHeaderContent } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stors$2f$globalState$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGlobalState"])({
        "LeftMenu.useGlobalState": (state)=>state
    }["LeftMenu.useGlobalState"]);
    const quit = ()=>{
        localStorage.removeItem("token");
        document.location.href = "/login";
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "left-menu",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: "nav-bar",
                children: menu.map((e, i)=>{
                    const isActive = e.href.includes(pathName);
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        onClick: ()=>setHeaderContent({
                                backPath: e.href[0],
                                addPath: e.href[1],
                                title: e.title
                            }),
                        className: `${isActive ? "active-link" : ""} `,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: e.href[0],
                            children: e.title
                        }, void 0, false, {
                            fileName: "[project]/src/components/LeftMenu.tsx",
                            lineNumber: 72,
                            columnNumber: 15
                        }, this)
                    }, i, false, {
                        fileName: "[project]/src/components/LeftMenu.tsx",
                        lineNumber: 61,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/components/LeftMenu.tsx",
                lineNumber: 57,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: quit,
                children: "Баромадан"
            }, void 0, false, {
                fileName: "[project]/src/components/LeftMenu.tsx",
                lineNumber: 77,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/LeftMenu.tsx",
        lineNumber: 56,
        columnNumber: 5
    }, this);
}
_s(LeftMenu, "BMgTj1iHt+x2rdsw8tNj7rlbLC4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stors$2f$globalState$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGlobalState"]
    ];
});
_c = LeftMenu;
var _c;
__turbopack_context__.k.register(_c, "LeftMenu");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/utils/apiClient.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
;
const BASE_URL = ("TURBOPACK compile-time value", "https://adminapi.kvkd.tj/");
const getToken = ()=>{
    return localStorage.getItem("token");
};
const apiClient = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].create({
    baseURL: BASE_URL,
    headers: "application/json"
});
apiClient.interceptors.request.use((config)=>{
    const token = getToken();
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, (error)=>Promise.reject(error));
apiClient.interceptors.response.use((response)=>response, (error)=>{
    if (error.response?.status === 401) {
        document.location.href = "/login";
        console.warn("Unauthorized, redirecting to login...");
    }
    return Promise.reject(error);
});
const __TURBOPACK__default__export__ = apiClient;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/hooks/useFormStore.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "useFormStore": (()=>useFormStore),
    "useFunctions": (()=>useFunctions)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$apiClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/apiClient.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/react.mjs [app-client] (ecmascript)");
;
;
const useFormStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])((set, get)=>({
        data: {},
        errors: {},
        setData: (field, value)=>set((state)=>({
                    data: {
                        ...state.data,
                        [field]: value
                    }
                })),
        setClear: ()=>set(()=>({
                    data: {}
                })),
        setDataMony: (data)=>set(()=>({
                    data: data
                })),
        resetErrors: ()=>set({
                errors: {}
            }),
        validate: (rules)=>{
            const { data } = get();
            const errors = {};
            Object.keys(rules).forEach((field)=>{
                const rule = rules[field];
                const value = data[field];
                if (rule.required && (value === "" || value === undefined || value === null)) {
                    errors[field] = rule.message || " Ин ҷои ҳатмист";
                    return;
                }
                if (typeof value === "string") {
                    if (rule.minLength && value.length < rule.minLength) {
                        errors[field] = rule.message || `Камтар аз ${rule.minLength} аломат набояд бошад`;
                        return;
                    }
                    if (rule.maxLength && value.length > rule.maxLength) {
                        errors[field] = rule.message || `Аз ${rule.maxLength} аломат зиёд набояд бошад`;
                        return;
                    }
                    if (rule.pattern && !rule.pattern.test(value)) {
                        errors[field] = rule.message || "Формати нодуруст";
                        return;
                    }
                }
                if (typeof value === "number") {
                    if (rule.min !== undefined && value < rule.min) {
                        errors[field] = rule.message || `Аниқати камтарин: ${rule.min}`;
                        return;
                    }
                    if (rule.max !== undefined && value > rule.max) {
                        errors[field] = rule.message || `Аниқати бештарин: ${rule.max}`;
                        return;
                    }
                }
            });
            set({
                errors
            });
            return Object.keys(errors).length === 0;
        }
    }));
const useFunctions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])(()=>({
        getItems: async (url, id)=>{
            try {
                const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$apiClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`${url}${id ? `/${id}` : ""}`);
                return res.data;
            } catch (e) {
                console.error(e);
                return null;
            }
        }
    }));
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/Conteiner.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Conteiner)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useFormStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useFormStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stors$2f$globalState$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/stors/globalState.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function Conteiner({ children }) {
    _s();
    const pathName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const { setClear } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useFormStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFormStore"])();
    const { headerContent } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stors$2f$globalState$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGlobalState"])({
        "Conteiner.useGlobalState": (state)=>state
    }["Conteiner.useGlobalState"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "components",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "components-header",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        children: headerContent.title
                    }, void 0, false, {
                        fileName: "[project]/src/components/Conteiner.tsx",
                        lineNumber: 20,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            onClick: ()=>setClear(),
                            href: pathName.split("-")[0] === "/adding" ? headerContent.backPath : headerContent.addPath,
                            children: pathName.split("-")[0] === "/adding" ? "Бозгашт" : "Илова"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Conteiner.tsx",
                            lineNumber: 22,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Conteiner.tsx",
                        lineNumber: 21,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Conteiner.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Conteiner.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
_s(Conteiner, "kLua1DvU1QY++IMWqP2s0dNfGkA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useFormStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFormStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stors$2f$globalState$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGlobalState"]
    ];
});
_c = Conteiner;
var _c;
__turbopack_context__.k.register(_c, "Conteiner");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_6dae29ea._.js.map