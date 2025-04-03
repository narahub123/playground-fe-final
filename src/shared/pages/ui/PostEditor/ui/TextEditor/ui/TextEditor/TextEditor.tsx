import styles from "./TextEditor.module.css";
import React, { useRef, useState } from "react";
import {
  createInnerHtml,
  getCaretPosition,
  handlePaste,
  ICaretPosition,
  useCaretPosition,
} from "@shared/pages/ui/PostEditor/ui/TextEditor";

interface TextEditorProps {}

const TextEditor = ({}: TextEditorProps) => {
  const textEditorRef = useRef<HTMLDivElement>(null);
  const [isComposing, setIsComposing] = useState(false);
  const [caretPosition, setCaretPosition] = useState<ICaretPosition>({
    caretPos: 0,
    row: 0,
    col: 0,
  });

  useCaretPosition({ textEditorRef, caretPosition });

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const key = e.key;
    if (key === "Enter") {
      e.preventDefault();
    }
  };

  const handleInput = (e: React.FormEvent<HTMLDivElement>) => {
    console.log("--------------- handleInput 시작 ---------------");
    if (isComposing) {
      console.log("--------------- handleInput 종료 ---------------");
      return;
    }
    const caretPosition = getCaretPosition();
    const textEditor = e.currentTarget;
    console.log("onInput이 사용되는 요소", textEditor);

    const innerHtml = createInnerHtml(textEditor);

    textEditor.innerHTML = innerHtml;

    setCaretPosition(caretPosition);

    console.log("--------------- handleInput 종료 ---------------");
  };

  const handleCompositionStart = () => {
    setIsComposing(true);
  };

  const handleCompositionEnd = () => {
    setIsComposing(false);
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
      onCompositionStart={handleCompositionStart}
      onCompositionEnd={handleCompositionEnd}
      onPaste={(e) => handlePaste(e, setCaretPosition)}
    >
      <div className={styles["line"]}>
        <span className={styles["segment"]} data-offset="0-0">
          <br data-text="true" />
        </span>
      </div>
    </div>
  );
};

export default TextEditor;
