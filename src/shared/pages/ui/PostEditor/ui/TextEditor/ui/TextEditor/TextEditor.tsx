import styles from "./TextEditor.module.css";
import { useRef } from "react";
import {
  useCaretInfo,
  useMaintainTextEditorStructure,
  useNewLine,
} from "@shared/pages/ui/PostEditor/ui/TextEditor";

interface TextEditorProps {}

const TextEditor = ({}: TextEditorProps) => {
  const textEditorRef = useRef<HTMLDivElement>(null);

  const caretInfo = useCaretInfo();

  // 구조 유지하기
  useMaintainTextEditorStructure();

  // 새 줄 만들기
  const createNewLine = useNewLine();

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const key = e.key;
    if (key === "Enter") {
      e.preventDefault();
      console.log("새줄 만들기");
      createNewLine(caretInfo);
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
    >
      <div className={styles["line"]} data-offset="0">
        <span className={styles["segment"]} data-offset="0-0">
          <br data-text={true} />
        </span>
        {/* <span className={styles["segment"]} data-offset="0-0">
          sdfsdf
        </span>
        <span className={styles["segment"]} data-offset="0-1">
          adkjljf
        </span> */}
      </div>
    </div>
  );
};

export default TextEditor;
