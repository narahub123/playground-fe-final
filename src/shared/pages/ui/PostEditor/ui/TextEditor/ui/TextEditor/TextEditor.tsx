import styles from "./TextEditor.module.css";
import React, { useRef, useState } from "react";
import {
  createInnerHtml,
  getCaretPosition,
  handleNewLine,
  handlePaste,
  handlePlaceholder,
  ICaretPosition,
  useCaretPosition,
} from "@shared/pages/ui/PostEditor/ui/TextEditor";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { Text } from "@shared/@common/ui/components";

interface TextEditorProps {}

const TextEditor = ({}: TextEditorProps) => {
  const textEditorRef = useRef<HTMLDivElement>(null);
  const [isComposing, setIsComposing] = useState(false);
  const [caretPosition, setCaretPosition] = useState<ICaretPosition>({
    caretPos: 0,
    row: 0,
    col: 0,
  });
  const [isShowingPH, setIsShowingPH] = useState(true);

  const { placeholder } = useLanguageContent(["components", "TextEditor"]);

  useCaretPosition({ textEditorRef, caretPosition });

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const key = e.key;
    if (key === "Enter") {
      e.preventDefault();
      const textEditor = e.currentTarget;

      handleNewLine(textEditor, caretPosition, setCaretPosition);
      handlePlaceholder(textEditor, setIsShowingPH);
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
    console.log("onInput이 사용되x는 요소", textEditor);

    handlePlaceholder(textEditor, setIsShowingPH);

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
    <div className={styles["text__editor__container"]}>
      {isShowingPH && (
        <div className={styles["placeholder"]}>
          <Text>{placeholder}</Text>
        </div>
      )}
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
    </div>
  );
};

export default TextEditor;
