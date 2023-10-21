import React from "react";
import { DiHtml5, DiCss3, DiJavascript1 } from "react-icons/di";

const CodeEditor = ({ code, onCodeChange, isLocked, handleIndent }) => {
  return (
    <div className="code-editor">
      <div>
        <label htmlFor={"html"} className="code-editor__label">
          <DiHtml5 /> HTML
        </label>
        <textarea
          className="code-editor__textarea code-editor__textarea--html"
          value={code.html}
          onChange={onCodeChange("html")}
          readOnly={isLocked}
          onKeyDown={handleIndent}
          id="html"
          rows={18}
          cols={55}
        />
      </div>

      <div>
        <label htmlFor={"css"} className="code-editor__label">
          <DiCss3 /> CSS
        </label>
        <textarea
          className="code-editor__textarea code-editor__textarea--css"
          value={code.css}
          onChange={onCodeChange("css")}
          readOnly={isLocked}
          onKeyDown={handleIndent}
          id="css"
          rows={18}
          cols={55}
        />
      </div>
      <div>
        <label htmlFor={"js"} className="code-editor__label">
          <DiJavascript1 /> JAVASCRIPT
        </label>
        <textarea
          className="code-editor__textarea code-editor__textarea--js"
          value={code.js}
          onChange={onCodeChange("js")}
          readOnly={isLocked}
          onKeyDown={handleIndent}
          id="js"
          rows={18}
          cols={55}
        />
      </div>
    </div>
  );
};

export default CodeEditor;
