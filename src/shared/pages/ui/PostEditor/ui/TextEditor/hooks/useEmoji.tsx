import { useSelector } from "react-redux";
import {
  selectCaretPosition,
  selectCursorPosition,
  selectEmoji,
} from "../../../models/selectors";
import { useEffect } from "react";
import {
  convertToHtmlSegments,
  getSegments,
  handlePlaceholder,
} from "@shared/pages/ui/PostEditor/ui/TextEditor";
import { useAppDispatch } from "@app/store";
import {
  setCursorPosition,
  setEmoji,
} from "../../../models/slices/postEditorSlice";

interface useEmojiProps {
  textEditorRef: React.RefObject<HTMLDivElement>;
  setIsShowingPH: React.Dispatch<React.SetStateAction<boolean>>;
}

const useEmoji = ({ textEditorRef, setIsShowingPH }: useEmojiProps) => {
  const dispatch = useAppDispatch();
  const emoji = useSelector(selectEmoji);
  const cursorPosition = useSelector(selectCursorPosition);
  const caretPosition = useSelector(selectCaretPosition);

  // caretPostion과 cursorPosition의 일치
  useEffect(() => {
    dispatch(setCursorPosition(caretPosition));
  }, [caretPosition]);

  useEffect(() => {
    if (!emoji || !textEditorRef.current) return;

    const textEditor = textEditorRef.current;

    const { caretPos, row, col } = cursorPosition;

    const line = textEditor.children[row];

    const lineText = line.textContent || "";

    const segments = getSegments(lineText).map((s) => s.text);

    const curSegment = textEditor.children[row].children[col] as HTMLElement;

    const curText = curSegment.textContent || "";

    // 이모지가 유니코드이기 때문에 slice를 쓰는 경우 유니코드를 분해하는 결과가 나올 수 있음
    // 유니코드를 안전하게 분해할 수 있는 Array.from을 이용해서 이모지를 삽입함
    const chars = Array.from(curText);
    chars.splice(caretPos, 0, emoji);

    const newCurText = chars.join("");

    // 현재 텍스트를 이모지를 추가한 텍스트로 대체
    segments.splice(col, 1, newCurText);

    const newLineText = segments.join("");

    const newSegments = getSegments(newLineText);

    const htmlSegments = convertToHtmlSegments(newSegments, row);

    // 현재 라인의 텍스트 변경
    line.innerHTML = htmlSegments;

    // 커서 위치 지정
    const newCaretPostion =
      // 현재 세그먼트가 inline인 경우
      newSegments[col].type === "inline"
        ? {
            caretPos: 2,
            row,
            col: col + 1,
          }
        : // 현재 세그먼트가 inline가 아닌 경우
          {
            caretPos: caretPos + 2,
            row,
            col,
          };

    // cursorPosition만 업데이트
    dispatch(setCursorPosition(newCaretPostion));

    handlePlaceholder(textEditor, setIsShowingPH);

    // 이모지 삭제
    dispatch(setEmoji(undefined));
  }, [emoji, caretPosition]);
};

export default useEmoji;
