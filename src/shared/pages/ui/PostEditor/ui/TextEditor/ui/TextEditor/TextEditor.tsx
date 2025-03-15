import styles from "./TextEditor.module.css";
import {
  createNewLine,
  ICaretInfo,
  ILine,
  ITextEditorContext,
  Line,
  TextEditorContextProvider,
  setCaretPosition,
  logStart,
  logEnd,
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

  // lines 업데이트 후 커서 위치 지정
  useEffect(() => {
    if (!caretInfo) return;
    const { curSegment, curPos } = caretInfo;
    setCaretPosition(curSegment, curPos);
  }, [lines]);

  // 새 줄 생성 하기
  useEffect(() => {
    if (!addLine) return;

    createNewLine(caretInfo, setLines);

    setAddLine(false);
  }, [lines]);

  // lines 업데이트 후 linesRef 업데이트 하기 
  useEffect(() => {
    linesRef.current = lines.map((_, i) => linesRef.current[i] || null);
  }, [lines]);

  // 다음 줄로 커서 이동
  useEffect(() => {
    const message = "커서 다음 줄로 이동";

    logStart(message);

    const newCaretInfo = getCaretInfo();

    if (!newCaretInfo) {
      logEnd(message);
      return;
    }
    const { curRow } = newCaretInfo;

    const nextLine = linesRef.current[curRow + 1];
    const segment = nextLine?.firstChild as HTMLSpanElement;

    if (!segment) {
      logEnd(message);
      return;
    }

    setCaretPosition(segment, 0);
    logEnd(message);
  }, [linesRef.current]);

  const updateLines = useUpdateLines(linesRef, setLines);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const key = e.key;

    if (key === "Enter") {
      e.preventDefault();
      const caretInfo = getCaretInfo();

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
