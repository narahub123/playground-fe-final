import { useSelector } from "react-redux";
import { selectEmoji } from "../../../models/selectors";
import { useEffect } from "react";
import {
  convertToHtmlSegments,
  getSegments,
  ICaretPosition,
} from "@shared/pages/ui/PostEditor/ui/TextEditor";
import { useAppDispatch } from "@app/store";
import { setEmoji } from "../../../models/slices/postEditorSlice";

interface useEmojiProps {
  textEditorRef: React.RefObject<HTMLDivElement>;
  caretPosition: ICaretPosition;
}

const useEmoji = ({ textEditorRef, caretPosition }: useEmojiProps) => {
  const dispatch = useAppDispatch();
  const emoji = useSelector(selectEmoji);

  useEffect(() => {
    if (!emoji || !textEditorRef.current) return;

    const textEditor = textEditorRef.current;

    const { caretPos, row, col } = caretPosition;

    const line = textEditor.children[row];

    const lineText = line.textContent || "";

    const segments = getSegments(lineText).map((s) => s.text);

    const curSegment = textEditor.children[row].children[col] as HTMLElement;

    const curText = curSegment.textContent || "";

    const textBefore = curText.slice(0, caretPos);
    const textAfter = curText?.slice(caretPos);

    const newCurText = textBefore.concat(emoji).concat(textAfter);

    // 현재 텍스트를 이모지를 추가한 텍스트로 대체
    segments.splice(col, 1, newCurText);

    const newLineText = segments.join("");

    const newSegments = getSegments(newLineText);

    const htmlSegments = convertToHtmlSegments(newSegments, row);

    // 현재 라인의 텍스트 변경
    line.innerHTML = htmlSegments;

    // 이모지 삭제
    dispatch(setEmoji(undefined));
  }, [emoji]);
};

export default useEmoji;
