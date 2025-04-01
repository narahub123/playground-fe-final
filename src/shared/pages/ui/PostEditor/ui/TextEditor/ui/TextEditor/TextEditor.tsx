import styles from "./TextEditor.module.css";
import React, { useRef, useState } from "react";
import {
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
    if (isComposing) return;
    const caretPosition = getCaretPosition();
    const textEditor = e.currentTarget;
    console.log("onInput이 사용되는 요소", textEditor);

    const lines = getLines(textEditor);
    console.log("줄 들", lines);

    const lineSegments: string[][] = [];
    for (let row = 0; row < lines.length; row++) {
      const line = lines[row];
      const segments = getSegments(line);
      console.log(segments);

      const newSegments = segments.map((segment, col) => {
        if (segment.type === "plain") {
          return `<span class=${styles["segment"]} data-offset='${row}-${col}'><span data-text="true">${segment.text}</span></span>`;
        } else {
          return `<span class=${styles["inline"]}><span class=${styles["segment"]} data-offset='${row}-${col}'><span data-text="true">${segment.text}</span></span></span>`;
        }
      });

      lineSegments.push(newSegments);
    }

    const newLines: string[] = [];
    for (let row = 0; row < lines.length; row++) {
      const segments = lineSegments[row].join("");

      const newLine = `<div class=${styles["line"]}>${segments}</div>`;

      newLines.push(newLine);
    }

    textEditor.innerHTML = `${newLines.join("")}`;

    setCaretPosition(caretPosition);
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
