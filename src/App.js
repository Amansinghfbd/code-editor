import React, { useState } from "react";
import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CodeEditor from "./CodeEditor";
import OutputPanel from "./OutputPanel";
import Buttons from "./Buttons";

function App() {
  const [isLocked, setIsLocked] = useState(false);
  const [code, setCode] = useState({
    html: "",
    css: "",
    js: "",
  });

  const handleCodeChange = (lang) => (e) => {
    if (!isLocked) {
      setCode({ ...code, [lang]: e.target.value });
    }
  };

  const handleCopyCode = () => {
    const { html, css, js } = code;
    // Copy the code to the clipboard
    const codeToCopy = `<html><style>${css}</style><body>${html}</body><script>${js}</script></html>`;
    navigator.clipboard
      .writeText(codeToCopy)
      .then(() => {
        //Alert message after Copy
        toast("Code copied to clipboard!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      })
      .catch((error) => {
        console.error("Failed to copy code:", error);
      });
  };

  const handleIndent = (e) => {
    if (e.key === "Tab") {
      e.preventDefault();

      const { selectionStart, selectionEnd, value } = e.target;

      // Insert two spaces at the caret position
      const newValue =
        value.substring(0, selectionStart) +
        "  " +
        value.substring(selectionEnd);

      // Update the text area's value and cursor position
      e.target.value = newValue;
      e.target.selectionStart = selectionStart + 2;
      e.target.selectionEnd = selectionStart + 2;

      // Manually trigger the change event so that React's state gets updated
      e.target.dispatchEvent(new Event("input", { bubbles: true }));
    }
  };

  const handleSaveCode = () => {
    // Combine the HTML, CSS, and JS into a single code block
    const fullCode = `<html><style>${code.css}</style><body>${code.html}</body><script>${code.js}</script>`;

    // Generate a unique key for storing the code in local storage (you can customize this)
    const storageKey = "saved_code_" + new Date().getTime();

    // Save the code to local storage
    localStorage.setItem(storageKey, fullCode);

    // Alert message after Saving
    toast("Code saved locally!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const handleToggleLock = () => {
    setIsLocked(!isLocked);
  };

  return (
    <div className="App">
      <h1>Code Editor</h1>
      <Buttons
        isLocked={isLocked}
        onCopy={handleCopyCode}
        onSave={handleSaveCode}
        onToggleLock={handleToggleLock}
      />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="editor-output">
        <CodeEditor
          code={code}
          onCodeChange={handleCodeChange}
          isLocked={isLocked}
          handleIndent={handleIndent}
        />
        <OutputPanel html={code.html} css={code.css} js={code.js} />
      </div>
    </div>
  );
}

export default App;
