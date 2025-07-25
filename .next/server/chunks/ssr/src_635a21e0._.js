module.exports = {

"[project]/src/components/element-tags/FilePhoto.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>FilePhoto)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useFormStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useFormStore.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$apiClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/apiClient.js [app-ssr] (ecmascript)");
;
;
;
function FilePhoto({ id, title, value, error, width, height, className, index, childrenKey, keyData }) {
    const { setData, data } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useFormStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useFormStore"])();
    const sendPhoto = async (e, key)=>{
        const file = e.target.files?.[0];
        if (!file) {
            console.error("No file selected");
            return;
        }
        e.target.value = "";
        const formData = new FormData();
        formData.append("file", file);
        try {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$apiClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].post("/files/upload", formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            });
            setData(key, res.data.id);
        } catch (error) {
            console.error("Upload error:", error);
        }
    };
    const sendPhotoChildren = async (e, key, index, childrenKey)=>{
        const file = e.target.files?.[0];
        if (!file) {
            console.error("No file selected");
            return;
        }
        const formData = new FormData();
        formData.append("file", file);
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$apiClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].post("/files/upload", formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        });
        if (childrenKey) {
            const updatedContent = Array.isArray(data.content) ? [
                ...data.content
            ] : [];
            if (updatedContent[index]) {
                updatedContent[index][childrenKey] = res.data.id;
            }
            setData(key, updatedContent);
        } else {
            setData(key, res.data.id);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `file-photo ${className}`,
        style: {
            width: width || "auto"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                htmlFor: id,
                onClick: ()=>{
                    if (value) {
                        if (index === 0 || index) {
                            const updatedContent = Array.isArray(data.content) ? [
                                ...data.content
                            ] : [];
                            if (updatedContent[index]) {
                                updatedContent[index][childrenKey] = "";
                            }
                            setData(keyData || id, updatedContent);
                        } else {
                            setData(keyData || id, "");
                        }
                    }
                },
                children: !value ? title : "Нест кардан"
            }, void 0, false, {
                fileName: "[project]/src/components/element-tags/FilePhoto.tsx",
                lineNumber: 100,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "file",
                id: id,
                onChange: (e)=>{
                    console.log("index", index);
                    if (index === 0 || index) {
                        sendPhotoChildren(e, keyData || id, index, childrenKey);
                    } else {
                        sendPhoto(e, keyData || id);
                    }
                }
            }, void 0, false, {
                fileName: "[project]/src/components/element-tags/FilePhoto.tsx",
                lineNumber: 122,
                columnNumber: 7
            }, this),
            value && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: typeof value === "string" ? ("TURBOPACK compile-time value", "https://adminapi.kvkd.tj/") + "files/" + value : value,
                alt: id,
                width: width || 300,
                height: height || 300
            }, void 0, false, {
                fileName: "[project]/src/components/element-tags/FilePhoto.tsx",
                lineNumber: 136,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "error",
                style: {
                    opacity: error?.[id] ? 1 : 0
                },
                children: error?.[keyData || id]
            }, void 0, false, {
                fileName: "[project]/src/components/element-tags/FilePhoto.tsx",
                lineNumber: 147,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/element-tags/FilePhoto.tsx",
        lineNumber: 96,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/components/element-tags/Input.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Input)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function Input({ title, error, id, type = "text", value, required, placeholder, classNameLabel, classNameTitle, classNameInput, classNameError, onChange }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
        htmlFor: id,
        className: `input ${classNameLabel || ""}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: ` ${classNameTitle || ""}`,
                children: [
                    title,
                    " ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: required ? "*" : ""
                    }, void 0, false, {
                        fileName: "[project]/src/components/element-tags/Input.tsx",
                        lineNumber: 35,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/element-tags/Input.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                className: `${classNameInput || ""}`,
                type: type,
                placeholder: placeholder,
                id: id,
                onChange: (e)=>onChange(e.target.value),
                value: value
            }, void 0, false, {
                fileName: "[project]/src/components/element-tags/Input.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                style: {
                    opacity: error?.[id] ? 1 : 1
                },
                className: `${classNameError || ""}`
            }, void 0, false, {
                fileName: "[project]/src/components/element-tags/Input.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/element-tags/Input.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/components/element-tags/Editor.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
;
const Editor = ({ initialContent = "", onContentChange, className = "" })=>{
    const editorRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isFocused, setIsFocused] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (editorRef.current && initialContent) {
            editorRef.current.innerHTML = initialContent;
        }
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (editorRef.current && initialContent.length === 0) {
            editorRef.current.innerHTML = "";
        }
    }, [
        initialContent
    ]);
    const toggleFormat = (format)=>{
        const selection = window.getSelection();
        if (!selection?.rangeCount || !editorRef.current) return;
        const range = selection.getRangeAt(0);
        const selectedText = selection.toString();
        if (!selectedText) return;
        // Создаем временный div для работы с выделением
        const tempDiv = document.createElement("div");
        tempDiv.appendChild(range.cloneContents());
        // Проверяем наличие форматирования во всех элементах выделения
        let hasFormatting = false;
        const checkFormat = (node)=>{
            if (node.nodeType === Node.ELEMENT_NODE) {
                const el = node;
                if (format === "bold" && (el.style.fontWeight === "bold" || el.tagName === "B" || el.tagName === "STRONG") || format === "italic" && (el.style.fontStyle === "italic" || el.tagName === "I" || el.tagName === "EM") || format === "underline" && (el.style.textDecoration === "underline" || el.tagName === "U")) {
                    return true;
                }
                for(let i = 0; i < el.childNodes.length; i++){
                    if (checkFormat(el.childNodes[i])) {
                        return true;
                    }
                }
            }
            return false;
        };
        hasFormatting = checkFormat(tempDiv);
        // Сохраняем позицию курсора
        const cursorPosition = saveCursorPosition();
        if (hasFormatting) {
            // Удаляем форматирование
            document.execCommand("removeFormat", false, format);
        } else {
            // Применяем форматирование
            document.execCommand(format, false);
        }
        updateContent();
        if (cursorPosition !== null) {
            restoreCursorPosition(cursorPosition);
        }
    };
    // Функции для сохранения/восстановления позиции курсора
    const saveCursorPosition = ()=>{
        const selection = window.getSelection();
        if (!selection?.rangeCount || !editorRef.current) return null;
        const range = selection.getRangeAt(0);
        const preCaretRange = range.cloneRange();
        preCaretRange.selectNodeContents(editorRef.current);
        preCaretRange.setEnd(range.endContainer, range.endOffset);
        return preCaretRange.toString().length;
    };
    const restoreCursorPosition = (position)=>{
        if (!editorRef.current) return;
        const selection = window.getSelection();
        const range = document.createRange();
        let charCount = 0;
        let foundNode = false;
        const findPosition = (node)=>{
            if (node.nodeType === Node.TEXT_NODE) {
                const nextCharCount = charCount + (node.nodeValue?.length || 0);
                if (!foundNode && position >= charCount && position <= nextCharCount) {
                    const offset = position - charCount;
                    range.setStart(node, offset);
                    range.setEnd(node, offset);
                    foundNode = true;
                    return true;
                }
                charCount = nextCharCount;
            } else {
                for(let i = 0; i < node.childNodes.length; i++){
                    if (findPosition(node.childNodes[i])) {
                        return true;
                    }
                }
            }
            return false;
        };
        findPosition(editorRef.current);
        if (foundNode) {
            selection?.removeAllRanges();
            selection?.addRange(range);
        }
    };
    const updateContent = ()=>{
        if (editorRef.current && onContentChange) {
            onContentChange(editorRef.current.innerHTML);
        }
    };
    console.log("initialContent", initialContent);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `editor-container ${className}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "toolbar",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>toggleFormat("bold"),
                        title: "Жирный (Ctrl+B)",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                            children: "B"
                        }, void 0, false, {
                            fileName: "[project]/src/components/element-tags/Editor.tsx",
                            lineNumber: 151,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/element-tags/Editor.tsx",
                        lineNumber: 150,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>toggleFormat("italic"),
                        title: "Курсив (Ctrl+I)",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                            children: "I"
                        }, void 0, false, {
                            fileName: "[project]/src/components/element-tags/Editor.tsx",
                            lineNumber: 154,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/element-tags/Editor.tsx",
                        lineNumber: 153,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>toggleFormat("underline"),
                        title: "Подчеркивание (Ctrl+U)",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("u", {
                            children: "U"
                        }, void 0, false, {
                            fileName: "[project]/src/components/element-tags/Editor.tsx",
                            lineNumber: 160,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/element-tags/Editor.tsx",
                        lineNumber: 156,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/element-tags/Editor.tsx",
                lineNumber: 149,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: editorRef,
                contentEditable: true,
                className: `editable-area ${isFocused ? "focused" : ""}`,
                onInput: updateContent,
                onBlur: ()=>setIsFocused(false),
                onFocus: ()=>setIsFocused(true),
                onPaste: (e)=>{
                    e.preventDefault();
                    const text = e.clipboardData.getData("text/plain");
                    document.execCommand("insertText", false, text);
                },
                suppressContentEditableWarning: true
            }, void 0, false, {
                fileName: "[project]/src/components/element-tags/Editor.tsx",
                lineNumber: 163,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/element-tags/Editor.tsx",
        lineNumber: 148,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = Editor;
}}),
"[project]/src/components/element-tags/Textarea.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Textarea)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$element$2d$tags$2f$Editor$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/element-tags/Editor.tsx [app-ssr] (ecmascript)");
"use client";
;
;
function Textarea({ title, error, id, // type = "text",
value, required, // placeholder,
classNameLabel, classNameTitle, // classNameInput,
classNameError, onChange }) {
    console.log("value", value);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
        htmlFor: id,
        className: `input ${classNameLabel || ""}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: ` ${classNameTitle || ""}`,
                children: [
                    title,
                    " ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: required ? "*" : ""
                    }, void 0, false, {
                        fileName: "[project]/src/components/element-tags/Textarea.tsx",
                        lineNumber: 40,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/element-tags/Textarea.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$element$2d$tags$2f$Editor$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                initialContent: value,
                onContentChange: (e)=>onChange(e)
            }, void 0, false, {
                fileName: "[project]/src/components/element-tags/Textarea.tsx",
                lineNumber: 50,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                style: {
                    opacity: error?.[id] ? 1 : 1
                },
                className: `${classNameError || ""}`
            }, void 0, false, {
                fileName: "[project]/src/components/element-tags/Textarea.tsx",
                lineNumber: 51,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/element-tags/Textarea.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/app/adding-leadership/page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>AddingLeadership)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$element$2d$tags$2f$FilePhoto$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/element-tags/FilePhoto.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$element$2d$tags$2f$Input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/element-tags/Input.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$element$2d$tags$2f$Textarea$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/element-tags/Textarea.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useFormStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useFormStore.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$apiClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/apiClient.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
function AddingLeadership() {
    const { data, errors, setData, validate } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useFormStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useFormStore"])();
    const onSend = async ()=>{
        const isValid = validate({
            main_title: {
                required: true
            },
            main_photo_id: {
                required: true
            }
        });
        if (isValid) {
            try {
                await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$apiClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].post("/leadership/add", data).then(()=>{
                    setData("main_title", "");
                    setData("main_photo_id", "");
                    setData("content", [
                        {
                            description: "",
                            photo_id: ""
                        }
                    ]);
                });
            } catch (e) {
                console.error("Error sending data:", e);
            }
        } else {
            console.log("Form validation failed:", errors);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setData("content", [
            {
                description: "",
                photo_id: ""
            }
        ]);
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "adding",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "adding-content",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "main-form",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "adding-header",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    children: "Илова"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/adding-leadership/page.tsx",
                                    lineNumber: 45,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: onSend,
                                    children: "Фиристодан"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/adding-leadership/page.tsx",
                                    lineNumber: 46,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/adding-leadership/page.tsx",
                            lineNumber: 44,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "adding-form",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$element$2d$tags$2f$Input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    required: true,
                                    title: " Сарлавҳа",
                                    type: "text",
                                    placeholder: " Сарлавҳа",
                                    id: "main_title",
                                    value: data?.main_title || "",
                                    onChange: (e)=>setData("main_title", e),
                                    error: errors
                                }, void 0, false, {
                                    fileName: "[project]/src/app/adding-leadership/page.tsx",
                                    lineNumber: 49,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$element$2d$tags$2f$FilePhoto$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        keyData: "main_photo_id",
                                        id: "main_photo_id_label",
                                        title: "Аксро бор кардан",
                                        value: data?.main_photo_id,
                                        error: errors
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/adding-leadership/page.tsx",
                                        lineNumber: 61,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/adding-leadership/page.tsx",
                                    lineNumber: 60,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/adding-leadership/page.tsx",
                            lineNumber: 48,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/adding-leadership/page.tsx",
                    lineNumber: 43,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "adding-form-content",
                    children: [
                        Array.isArray(data?.content) && data?.content?.map((item, index, arr)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "adding-form-item",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$element$2d$tags$2f$Textarea$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        title: "Тавсиф",
                                        id: "description",
                                        placeholder: "Тавсиф",
                                        value: item.description,
                                        error: errors,
                                        required: true,
                                        onChange: (e)=>{
                                            const updatedContent = Array.isArray(data.content) ? [
                                                ...data.content
                                            ] : [];
                                            if (updatedContent[index]) {
                                                updatedContent[index].description = e;
                                                setData("content", updatedContent);
                                            }
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/adding-leadership/page.tsx",
                                        lineNumber: 75,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$element$2d$tags$2f$FilePhoto$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                keyData: "content",
                                                id: `content-${index}`,
                                                index: index,
                                                childrenKey: "photo_id",
                                                title: "Аксро бор кардан",
                                                value: item?.photo_id,
                                                error: errors
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/adding-leadership/page.tsx",
                                                lineNumber: 96,
                                                columnNumber: 19
                                            }, this),
                                            index !== 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>{
                                                    setData("content", arr.filter((_, i)=>i !== index));
                                                },
                                                children: "-"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/adding-leadership/page.tsx",
                                                lineNumber: 106,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/adding-leadership/page.tsx",
                                        lineNumber: 95,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, index, true, {
                                fileName: "[project]/src/app/adding-leadership/page.tsx",
                                lineNumber: 74,
                                columnNumber: 15
                            }, this)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>{
                                const updatedContent = Array.isArray(data.content) ? [
                                    ...data.content
                                ] : [];
                                updatedContent.push({
                                    description: "",
                                    photo_id: ""
                                });
                                setData("content", updatedContent);
                            },
                            children: "Илова кардани унсур"
                        }, void 0, false, {
                            fileName: "[project]/src/app/adding-leadership/page.tsx",
                            lineNumber: 121,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/adding-leadership/page.tsx",
                    lineNumber: 71,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/adding-leadership/page.tsx",
            lineNumber: 42,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/adding-leadership/page.tsx",
        lineNumber: 41,
        columnNumber: 5
    }, this);
}
}}),

};

//# sourceMappingURL=src_635a21e0._.js.map