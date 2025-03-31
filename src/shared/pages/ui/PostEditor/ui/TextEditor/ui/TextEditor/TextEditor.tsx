import styles from "./TextEditor.module.css";
import React, { useRef, useState } from "react";
import {
  getLines,
  getSegments,
  ISegment,
  PlainSegment,
} from "@shared/pages/ui/PostEditor/ui/TextEditor";

interface TextEditorProps {}

const TextEditor = ({}: TextEditorProps) => {
  const textEditorRef = useRef<HTMLDivElement>(null);
  const initialLine: ISegment[] = [{ text: "", type: "plain" }];
  const [segments, setSegments] = useState<ISegment[][]>([initialLine]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const key = e.key;
    if (key === "Enter") {
      e.preventDefault();
    }
  };

  const handleInput = (e: React.FormEvent<HTMLDivElement>) => {
    const textEditor = e.currentTarget;
    console.log("onInput이 사용되는 요소", textEditor);

    const lines = getLines(textEditor);
    console.log("줄 들", lines);

    const newSegments: ISegment[][] = [];
    for (const line of lines) {
      const segments = getSegments(line);
      console.log("각 줄의 세그먼트", segments);

      newSegments.push(segments);
    }

    setSegments(newSegments);
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
      {segments.map((line, row) => (
        <div className={styles["line"]} key={row}>
          {line.map((segment, col) => (
            <PlainSegment text={segment.text} row={row} col={col} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default TextEditor;
