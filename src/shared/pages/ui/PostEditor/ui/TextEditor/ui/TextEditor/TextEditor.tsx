import styles from "./TextEditor.module.css";
import React, { useRef } from "react";

interface TextEditorProps {}

const TextEditor = ({}: TextEditorProps) => {
  const textEditorRef = useRef<HTMLDivElement>(null);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const key = e.key;
    if (key === "Enter") {
      e.preventDefault();
    }
  };

  return (
    <div
      className={styles["text__editor"]}
      contentEditable
      suppressContentEditableWarning={true}
      data-ph={"안녕"}
      ref={textEditorRef}
      onKeyDown={handleKeyDown}
    ></div>
  );
};

export default TextEditor;
