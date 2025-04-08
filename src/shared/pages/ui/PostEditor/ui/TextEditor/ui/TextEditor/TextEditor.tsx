import styles from "./TextEditor.module.css";
import { useEffect, useRef, useState } from "react";
import {
  convertToHtmlLine,
  convertToHtmlSegments,
  getCaretPosition,
  getLines,
  getSegments,
  handlePlaceholder,
  useCaretPosition,
  useInlineAutoComplete,
  IRect,
  useEmoji,
  useSelectOption,
  useNewLine,
  usePaste,
  InlineDropdown,
  useTextLength,
  convertToInnerHtml,
  updateLine,
} from "@shared/pages/ui/PostEditor/ui/TextEditor";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { Text } from "@shared/@common/ui/components";
import { IAccount } from "@shared/@common/types";
import {
  setCaretPosition,
  setCursorPosition,
  setInnerHtml,
} from "@shared/pages/ui/PostEditor/models/slices/postEditorSlice";
import { useAppDispatch } from "@app/store";
import { useSelector } from "react-redux";
import { selectPostEditor } from "@shared/pages/ui/PostEditor/models/selectors";

interface TextEditorProps {}

const TextEditor = ({}: TextEditorProps) => {
  const dispatch = useAppDispatch();
  const textEditorRef = useRef<HTMLDivElement>(null);
  const [isComposing, setIsComposing] = useState(false);
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

  const { post, caretPosition, cursorPosition } = useSelector(selectPostEditor);

  const { placeholder } = useLanguageContent(["components", "TextEditor"]);

  // textEditor의 innerHtml update
  useEffect(() => {
    if (!post.innerHtml || !textEditorRef.current) return;

    const textEditor = textEditorRef.current;

    textEditor.innerHTML = post.innerHtml;
  }, [post.innerHtml]);

  useTextLength({ textEditorRef });

  useCaretPosition({ textEditorRef });

  useInlineAutoComplete({
    textEditorRef,
    setRect,
    setIsOpen,
    setOptions,
    setCurText,
    setIsLoading,
  });

  useEmoji({ textEditorRef, setIsShowingPH });
  const handleSelectOption = useSelectOption();
  const handleNewLine = useNewLine();
  const handlePaste = usePaste();

  const handleOption = (index?: number) =>
    handleSelectOption(
      textEditorRef.current,
      options,
      curIndex,
      setIsOpen,
      index
    );

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    console.log("--------------- handleKeyDown 시작 ---------------");
    const key = e.key;
    if (isOpen) {
      console.log("인라인 드롭다운이 열린 경우");
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
      } else if (key === "Escape") {
        e.preventDefault();
        setIsOpen(false);
      }
    } else {
      if (key === "Enter") {
        e.preventDefault();
        const textEditor = e.currentTarget;

        handleNewLine(textEditor, setIsShowingPH);
      }
    }
    console.log("--------------- handleKeyDown 종료 ---------------");
  };

  const handleKeyUp = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const key = e.key;
    if (!e.shiftKey && !isOpen)
      if (key === "ArrowUp") {
        console.log("--------------- ArrowUp 시작 ---------------");
        const { row } = caretPosition;
        const textEditor = e.target as HTMLDivElement;
        updateLine(textEditor, row);

        const innerHtml = convertToInnerHtml(textEditor);
        dispatch(setInnerHtml(innerHtml));

        const newCaretPosition = getCaretPosition();
        dispatch(setCaretPosition(newCaretPosition));
        console.log("--------------- ArrowUp 종료 ---------------");
      } else if (key === "ArrowDown") {
        console.log("--------------- ArrowDown 시작 ---------------");
        const { row } = caretPosition;
        const textEditor = e.target as HTMLDivElement;
        updateLine(textEditor, row);

        const innerHtml = convertToInnerHtml(textEditor);
        dispatch(setInnerHtml(innerHtml));

        const newCaretPosition = getCaretPosition();
        dispatch(setCaretPosition(newCaretPosition));
        console.log("--------------- ArrowDown 종료 ---------------");
      } else if (key === "ArrowLeft") {
        console.log("--------------- ArrowRight 시작 ---------------");
        const newCaretPosition = getCaretPosition();

        dispatch(setCaretPosition(newCaretPosition));

        const { row } = caretPosition;
        const textEditor = e.target as HTMLDivElement;
        updateLine(textEditor, row);

        const innerHTML = convertToInnerHtml(textEditor);
        dispatch(setInnerHtml(innerHTML));
        console.log("--------------- ArrowLeft 종료 ---------------");
      } else if (key === "ArrowRight") {
        console.log("--------------- ArrowRight 시작 ---------------");
        const newCaretPosition = getCaretPosition();
        dispatch(setCaretPosition(newCaretPosition));

        const { row } = caretPosition;
        const textEditor = e.target as HTMLDivElement;
        updateLine(textEditor, row);

        const innerHTML = convertToInnerHtml(textEditor);
        dispatch(setInnerHtml(innerHTML));

        console.log("--------------- ArrowRight 종료 ---------------");
      }
  };

  const handleInput = (e: React.FormEvent<HTMLDivElement>) => {
    console.log("--------------- handleInput 시작 ---------------");

    const caretPosition = getCaretPosition();
    const { caretPos, row: curRow, col: curCol } = caretPosition;
    const textEditor = e.currentTarget;
    const prevTextEditor = textEditorRef.current as HTMLElement;

    handlePlaceholder(textEditor, setIsShowingPH);

    // textEdior의 구조 유지
    if (textEditor.children.length === 0) {
      console.log("텍스트 에디터에 children이 없는 경우");
      const htmlLine = `<div class="${styles}['line']" data-offset='0'><span class=${styles["segment"]} data-offset='0-0'><br data-text="true" /></span></div>`;

      textEditor.innerHTML = htmlLine;
    } else if (textEditor.children[curRow].children[0].nodeName === "BR") {
      console.log("현재 라인에 세그먼트가 없는 경우");
      textEditor.children[
        curRow
      ].innerHTML = `<span class=${styles["segment"]} data-offset='${curRow}-0'><br data-text="true" /></span>`;
    }

    if (isComposing) {
      console.log("--------------- handleInput 종료 ---------------");
      return;
    }

    const lines = getLines(textEditor);

    // 새로운 커서 위치
    let newCaretPos = caretPos;
    let newCol = curCol;

    const htmlLines: string[] = [];
    for (let row = 0; row < lines.length; row++) {
      const line = lines[row];

      const segments = getSegments(line);

      if (row === curRow) {
        let targetSegmentText;
        // 현재 세그먼트가 존재하는 경우
        if (segments[newCol]) {
          targetSegmentText = segments[newCol].text;
        } else {
          // 현재 세그먼트가 존재하지 않는 경우
          targetSegmentText = segments[newCol - 1].text; // 이부분은 아직 확실한 코드는 아님
          const prevSegment = prevTextEditor.children[curRow].children[
            curCol - 1
          ] as HTMLElement; // 변경 전 전 세그먼트
          const prevSegmentText = prevSegment.textContent || ""; // 변경 전 전 세그먼트의 텍스트

          newCaretPos = prevSegmentText.length + 1; // 변경 전 전 세그먼트의 텍스트의 길이 + 1
          newCol -= 1;
        }

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

    dispatch(setInnerHtml(htmlLines.join("")));

    dispatch(setCaretPosition(newCaretPosition));
    console.log("--------------- handleInput 종료 ---------------");
  };

  const handleCompositionStart = () => {
    setIsComposing(true);
  };

  const handleCompositionEnd = () => {
    setIsComposing(false);
  };

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!e.shiftKey) {
      const caretPosition = getCaretPosition();
      dispatch(setCaretPosition(caretPosition));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLDivElement, Element>) => {
    console.log("--------------- handleBlur 시작 ---------------");
    const textEditor = e.target;

    const { caretPos, row, col } = getCaretPosition();

    const line = textEditor.children[row];
    const lineText = line.textContent || "";

    const segments = getSegments(lineText);

    const htmlSegments = convertToHtmlSegments(segments, row);

    line.innerHTML = htmlSegments;

    const innerHTML = convertToInnerHtml(textEditor);
    dispatch(setInnerHtml(innerHTML));

    let newCaretPos = caretPos;
    let newCol = col;
    let length = caretPos;

    while (length > 0) {
      const curSegment = segments[newCol].text;

      if (curSegment.length < newCaretPos) {
        newCol += 1;
        newCaretPos -= curSegment.length;
      }

      length -= curSegment.length;
    }

    const newCaretPosition = {
      caretPos: newCaretPos,
      row,
      col: newCol,
    };

    dispatch(setCursorPosition(newCaretPosition));

    console.log("--------------- handleBlur 종료 ---------------");
  };

  const handleFocus = () => {
    dispatch(setCaretPosition(cursorPosition));
  };

  return (
    <div className={styles["text__editor__container"]}>
      {isShowingPH && post.textLength === 0 && (
        <div className={styles["placeholder"]}>
          <Text>{placeholder}</Text>
        </div>
      )}
      {isOpen && options.length > 0 && (
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
        tabIndex={0}
        onKeyDown={handleKeyDown}
        onInput={handleInput}
        onCompositionStart={handleCompositionStart}
        onCompositionEnd={handleCompositionEnd}
        onPaste={(e) => handlePaste(e, setIsShowingPH)}
        onClick={handleClick}
        onKeyUp={handleKeyUp}
        onBlur={handleBlur}
        onFocus={handleFocus}
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
