import styles from "./TextEditor.module.css";
import {
  createNewLine,
  ILine,
  ITextEditorContext,
  Line,
  TextEditorContextProvider,
} from "@shared/pages/ui/PostEditor/ui/TextEditor";
import { joinClassNames } from "@shared/@common/utils";
import React, { useRef, useState } from "react";
import { updateLines } from "../../utils";
import { useCaretInfo } from "../../hooks";

interface TextEditorProps {
  className?: string;
}

const TextEditor = ({ className }: TextEditorProps) => {
  const classNames = joinClassNames([styles["text__editor"], className]);
  const linesRef = useRef<(HTMLDivElement | null)[]>([]);

  const [lines, setLines] = useState<ILine[]>([
    {
      row: 0,
      segments: [
        { type: "plain", text: "ㅎㅎ", row: 0, col: 0 },
        { type: "inline", text: "22", row: 0, col: 1 },
      ],
    },
  ]);

  const getCaretInfo = useCaretInfo();

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const key = e.key;

    if (key === "Enter") {
      e.preventDefault();
      const caretInfo = getCaretInfo();
      if (!caretInfo) return;
      console.log(caretInfo);

      updateLines(setLines, linesRef);
      createNewLine(setLines, linesRef, caretInfo);
    }
  };

  const value: ITextEditorContext = {
    setLines,
  };

  return (
    <TextEditorContextProvider value={value}>
      <div
        className={classNames}
        contentEditable={true}
        onKeyDown={handleKeyDown}
      >
        {lines.map((line, index) => (
          <Line
            row={index}
            segments={line.segments}
            key={index}
            ref={(el) => (linesRef.current[index] = el)}
          />
        ))}
      </div>
    </TextEditorContextProvider>
  );
};

export default TextEditor;
