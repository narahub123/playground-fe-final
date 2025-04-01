import styles from "./TextEditor.module.css";
import React, { useRef, useState } from "react";
import {
  createInnerHtml,
  getCaretPosition,
  getLines,
  getSegments,
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

  const handlePaste = (e: React.ClipboardEvent<HTMLDivElement>) => {
    console.log("--------------- handlePaste 시작 ---------------");
    e.preventDefault();

    const caretPosition = getCaretPosition();

    const { caretPos, row, col } = caretPosition;
    console.log(caretPosition);

    let curPos = caretPos;
    let curRow = row;
    let curCol = col;

    const textEditor = e.currentTarget;
    console.log("텍스트 에디터", textEditor);

    // 추가될 세그먼트 착지
    const segment = textEditor.children[curRow].children[curCol] as HTMLElement;

    // 추가될 세그먼트의 텍스트
    let text = segment.textContent || "";

    // 추가할 텍스트
    const content = e.clipboardData.getData("text");

    const textBefore = text.slice(0, caretPos);
    const textAfter = text.slice(caretPos);

    // 현재 세그먼트에 추가될 텍스트 추가하기
    text = textBefore.concat("", content).concat("", textAfter);

    // 현재 세그먼트 만들기
    const newSegments = getSegments(text);

    // 텍스트에디터의 라인들
    const lines = getLines(textEditor);

    let newLines: string[] = [];
    for (let row = 0; row < lines.length; row++) {
      const line = lines[row];

      const segments = getSegments(line);

      // 커서가 위치한 row가 같은 경우
      if (row === curRow) {
        segments.splice(curCol, 1, ...newSegments);
      }

      const htmlSpan = segments
        .map((segment, col) => {
          if (segment.type === "plain") {
            return `<span class=${styles["segment"]} data-offset='${row}-${col}'><span data-text="true">${segment.text}</span></span>`;
          } else {
            return `<span class=${styles["inline"]}><span class=${styles["segment"]} data-offset='${row}-${col}'><span data-text="true">${segment.text}</span></span></span>`;
          }
        })
        .join("");

      const newLine = `<div class=${styles["line"]}>${htmlSpan}</div>`;

      newLines.push(newLine);
    }

    textEditor.innerHTML = `${newLines.join("")}`;
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
      onPaste={handlePaste}
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
