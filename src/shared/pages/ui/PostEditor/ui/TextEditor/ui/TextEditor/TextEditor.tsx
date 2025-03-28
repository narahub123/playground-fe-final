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

  const handleInput = (e: React.FormEvent<HTMLDivElement>) => {
    const textEditor = e.currentTarget;
    console.log("onInput이 사용되는 요소", textEditor);

    
  };

  return (
    <div
      className={styles["text__editor"]}
      contentEditable
      suppressContentEditableWarning={true}
      data-ph={"안녕"}
      ref={textEditorRef}
      onKeyDown={handleKeyDown}
      onInput={handleInput}
    >
      <div className={styles["line"]}>
        <span className={styles["segment"]}>
          <br data-text={true} />
        </span>
      </div>
    </div>
  );
};

export default TextEditor;
