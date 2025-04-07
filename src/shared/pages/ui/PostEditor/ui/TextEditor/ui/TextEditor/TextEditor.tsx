import styles from "./TextEditor.module.css";
import React, { useRef, useState } from "react";
import {
  convertToHtmlLine,
  convertToHtmlSegments,
  getCaretPosition,
  getLines,
  getSegments,
  handleNewLine,
  handlePaste,
  handlePlaceholder,
  ICaretPosition,
  // InlineDropdown,
  useCaretPosition,
  useInlineAutoComplete,
  IRect,
  handleSelectOption,
  useEmoji,
} from "@shared/pages/ui/PostEditor/ui/TextEditor";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { Text } from "@shared/@common/ui/components";
import { IAccount } from "@shared/@common/types";
import InlineDropdown from "../InlineDropdown/ui/InlineDropdown/InlineDropdown";

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
  // dropdown 관련 상태
  const [isOpen, setIsOpen] = useState(false);
  const [rect, setRect] = useState<IRect | undefined>();
  const [options, setOptions] = useState<(string | IAccount)[]>([]);
  const [curText, setCurText] = useState("");
  const [curIndex, setCurIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const onClose = () => {
    setIsOpen(false);
  };

  const { placeholder } = useLanguageContent(["components", "TextEditor"]);

  useCaretPosition({ textEditorRef, caretPosition });

  useInlineAutoComplete({
    textEditorRef,
    caretPosition,
    setRect,
    setIsOpen,
    setOptions,
    setCurText,
    setIsLoading,
  });

  useEmoji({ textEditorRef, caretPosition, setCaretPosition });

  const handleOption = (index?: number) =>
    handleSelectOption(
      textEditorRef.current,
      caretPosition,
      options,
      curIndex,
      setCaretPosition,
      setIsOpen,
      index
    );

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const key = e.key;
    if (isOpen) {
      if (key === "Enter") {
        e.preventDefault();
        handleOption();
      } else if (key === "Tab") {
        e.preventDefault();
        handleOption();
      } else if (key === "ArrowUp") {
        e.preventDefault();
        const prevIndex = curIndex - 1 < 0 ? options.length - 1 : curIndex - 1;

        setCurIndex(prevIndex);
      } else if (key === "ArrowDown") {
        e.preventDefault();
        const nextIndex = curIndex + 1 > options.length - 1 ? 0 : curIndex + 1;

        setCurIndex(nextIndex);
      }
    } else {
      if (key === "Enter") {
        e.preventDefault();
        const textEditor = e.currentTarget;

        handleNewLine(textEditor, setCaretPosition);
        handlePlaceholder(textEditor, setIsShowingPH);
      }
    }
  };

  const handleInput = (e: React.FormEvent<HTMLDivElement>) => {
    console.log("--------------- handleInput 시작 ---------------");

    const caretPosition = getCaretPosition();
    const textEditor = e.currentTarget;

    handlePlaceholder(textEditor, setIsShowingPH);

    if (isComposing) {
      console.log("--------------- handleInput 종료 ---------------");
      return;
    }

    const lines = getLines(textEditor);

    const { caretPos, row: curRow, col: curCol } = caretPosition;

    // 새로운 커서 위치
    let newCaretPos = caretPos;
    let newCol = curCol;

    const htmlLines: string[] = [];
    for (let row = 0; row < lines.length; row++) {
      const line = lines[row];

      const segments = getSegments(line);

      if (row === curRow) {
        const targetSegmentText = segments[newCol].text;
        console.log("현재 세그먼트", targetSegmentText);
        if (targetSegmentText.length < newCaretPos) {
          console.log("타겟 세그먼트의 길이가 커서 위치보다 짧은 경우");
          // 커서 위치: 현재 커서 위치에서 타겟 세그먼트의 길이를 뺌
          newCaretPos -= targetSegmentText.length;
          // 세그먼트: 세그먼트 위치를 하나 더 함
          newCol += 1;
        }
      }

      const htmlSegments = convertToHtmlSegments(segments, row);

      const htmlLine = convertToHtmlLine(htmlSegments, row);

      htmlLines.push(htmlLine);
    }

    const newCaretPosition = {
      caretPos: newCaretPos,
      row: curRow,
      col: newCol,
    };

    textEditor.innerHTML = `${htmlLines.join("")}`;

    setCaretPosition(newCaretPosition);
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
      {isOpen && options.length && (
        <InlineDropdown
          curIndex={curIndex}
          curText={curText}
          isLoading={isLoading}
          onClick={handleOption}
          onClose={onClose}
          options={options}
          top={rect?.top}
          left={rect?.left}
        />
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
        onPaste={(e) => handlePaste(e, setCaretPosition, setIsShowingPH)}
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
