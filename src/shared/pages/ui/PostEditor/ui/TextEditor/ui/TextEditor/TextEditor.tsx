import React, { useRef, useState } from "react";
import styles from "./TextEditor.module.css";

interface TextEditorProps {}

const TextEditor = ({}: TextEditorProps) => {
  const textEditorRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className={styles["text__editor"]}
      contentEditable
      suppressContentEditableWarning={true}
      data-ph={"안녕"}
      ref={textEditorRef}
    >
      <div className={styles["line"]}>
        <span className={styles["segment"]}>
          <br />
        </span>
      </div>
    </div>
  );
};

export default TextEditor;
