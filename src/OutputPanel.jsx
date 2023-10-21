import React from "react";

const OutputPanel = ({ html, css, js }) => {
  return (
    <iframe
      title="output"
      className="output-panel"
      srcDoc={`<html><style>${css}</style><body>${html}</body><script>${js}</script></html>`}
    ></iframe>
  );
};

export default OutputPanel;
