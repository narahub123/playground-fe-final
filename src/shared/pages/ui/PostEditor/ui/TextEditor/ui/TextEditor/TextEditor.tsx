import styles from "./TextEditor.module.css";
import { useRef } from "react";
import { useMaintainTextEditorStructure } from "@shared/pages/ui/PostEditor/ui/TextEditor";

interface TextEditorProps {}

const TextEditor = ({}: TextEditorProps) => {
  const textEditorRef = useRef<HTMLDivElement>(null);

  useMaintainTextEditorStructure();

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {};

  return (
    <div
      className={styles["text__editor"]}
      contentEditable
      suppressContentEditableWarning={true}
      data-ph={"안녕"}
      ref={textEditorRef}
      onKeyDown={handleKeyDown}
    >
      <div className={styles["line"]} data-offset="0">
        <span className={styles["segment"]} data-offset="0-0">
          <br />
        </span>
      </div>
    </div>
  );
};

export default TextEditor;
