import React, { useEffect, useRef, useState } from "react";
// import DOMPurify from "dompurify";

interface EditorProps {
  initialContent?: string;
  onContentChange?: (html: string) => void;
  className?: string;
}

const Editor: React.FC<EditorProps> = ({
  initialContent = "",
  onContentChange,
  className = "",
}) => {
  const editorRef = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    if (editorRef.current && initialContent) {
      editorRef.current.innerHTML = initialContent;
    }
  }, []);

  useEffect(() => {
    
    if (editorRef.current && initialContent.length === 0) {
      editorRef.current.innerHTML = "";
    }
  }, [initialContent]);
  
  const toggleFormat = (format: "bold" | "italic" | "underline") => {
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
    const checkFormat = (node: Node): boolean => {
      if (node.nodeType === Node.ELEMENT_NODE) {
        const el = node as HTMLElement;
        if (
          (format === "bold" &&
            (el.style.fontWeight === "bold" ||
              el.tagName === "B" ||
              el.tagName === "STRONG")) ||
              (format === "italic" &&
                (el.style.fontStyle === "italic" ||
                  el.tagName === "I" ||
                  el.tagName === "EM")) ||
                  (format === "underline" &&
                    (el.style.textDecoration === "underline" || el.tagName === "U"))
                  ) {
                    return true;
                  }
                  
                  for (let i = 0; i < el.childNodes.length; i++) {
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
            const saveCursorPosition = (): number | null => {
              const selection = window.getSelection();
              if (!selection?.rangeCount || !editorRef.current) return null;
              
              const range = selection.getRangeAt(0);
              const preCaretRange = range.cloneRange();
              preCaretRange.selectNodeContents(editorRef.current);
              preCaretRange.setEnd(range.endContainer, range.endOffset);
              return preCaretRange.toString().length;
            };
            
            const restoreCursorPosition = (position: number) => {
              if (!editorRef.current) return;
              
              const selection = window.getSelection();
              const range = document.createRange();
              let charCount = 0;
              let foundNode = false;
              
              const findPosition = (node: Node): boolean => {
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
                  for (let i = 0; i < node.childNodes.length; i++) {
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
  
  const updateContent = () => {
    if (editorRef.current && onContentChange) {
      onContentChange(editorRef.current.innerHTML);
    }
  };
  
  console.log("initialContent", initialContent);
  return (
    <div className={`editor-container ${className}`}>
      <div className="toolbar">
        <button onClick={() => toggleFormat("bold")} title="Жирный (Ctrl+B)">
          <b>B</b>
        </button>
        <button onClick={() => toggleFormat("italic")} title="Курсив (Ctrl+I)">
          <i>I</i>
        </button>
        <button
          onClick={() => toggleFormat("underline")}
          title="Подчеркивание (Ctrl+U)"
        >
          <u>U</u>
        </button>
      </div>
      <div
        ref={editorRef}
        contentEditable
        className={`editable-area ${isFocused ? "focused" : ""}`}
        onInput={updateContent}
        onBlur={() => setIsFocused(false)}
        onFocus={() => setIsFocused(true)}
        onPaste={(e) => {
          e.preventDefault();
          const text = e.clipboardData.getData("text/plain");
          document.execCommand("insertText", false, text);
        }}
        suppressContentEditableWarning
      />
    </div>
  );
};

export default Editor;
