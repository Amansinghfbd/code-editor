import React from "react";

const Buttons = ({ isLocked, onCopy, onSave, onToggleLock }) => {
  return (
    <div className="buttons">
      <button
        className="buttons__button buttons__button--copy"
        onClick={onCopy}
      >
        Copy
      </button>
      <button
        className="buttons__button buttons__button--save"
        onClick={onSave}
      >
        Save
      </button>
      <button
        className={`buttons__button buttons__button--lock ${
          isLocked ? "buttons__button--locked" : ""
        }`}
        onClick={onToggleLock}
      >
        {isLocked ? "Unlock" : "Lock"}
      </button>
    </div>
  );
};

export default Buttons;
