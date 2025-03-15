import styles from "./TextEditor.module.css";
import {
  createNewLine,
  ICaretInfo,
  ILine,
  ITextEditorContext,
  Line,
  TextEditorContextProvider,
} from "@shared/pages/ui/PostEditor/ui/TextEditor";
import { joinClassNames } from "@shared/@common/utils";
import React, { useEffect, useRef, useState } from "react";
import { useCaretInfo } from "../../hooks";
import useUpdateLines from "../../hooks/useUpdateLines";

interface TextEditorProps {
  className?: string;
}

const TextEditor = ({ className }: TextEditorProps) => {
  const classNames = joinClassNames([styles["text__editor"], className]);
  const linesRef = useRef<(HTMLDivElement | null)[]>([]);
  const [addLine, setAddLine] = useState(false);
  const [caretInfo, setCaretInfo] = useState<ICaretInfo | null>(null);

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

  useEffect(() => {
    if (!addLine) return;

    createNewLine(setLines, linesRef, caretInfo);

    setAddLine(false);
  }, [lines]);

  const updateLines = useUpdateLines(linesRef, setLines);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const key = e.key;

    if (key === "Enter") {
      e.preventDefault();
      const caretInfo = getCaretInfo();
      console.log("상태 변경 전 커서 위치", caretInfo);
      if (caretInfo) {
        setCaretInfo(caretInfo);
      }

      updateLines();
      setAddLine(true);
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
        suppressContentEditableWarning={true}
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
