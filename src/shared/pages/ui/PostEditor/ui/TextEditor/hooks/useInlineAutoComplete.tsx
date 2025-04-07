import { IAccount } from "@shared/@common/types";
import {
  detectInlineType,
  IRect,
} from "@shared/pages/ui/PostEditor/ui/TextEditor";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectCaretPosition } from "../../../models/selectors";

interface useInlineAutoCompleteProps {
  textEditorRef: React.RefObject<HTMLDivElement>;
  setRect: React.Dispatch<React.SetStateAction<IRect | undefined>>;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setOptions: React.Dispatch<React.SetStateAction<(string | IAccount)[]>>;
  setCurText: React.Dispatch<React.SetStateAction<string>>;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const hashtagList = ["#abcd", "#abcde", "#abcce"];

const mentionList: IAccount[] = [
  { profileImage: "", username: "몰라", userId: "abcd", intro: "" },
  { profileImage: "", username: "몰라", userId: "abce", intro: "" },
  { profileImage: "", username: "몰라", userId: "abcf", intro: "" },
];

const useInlineAutoComplete = ({
  textEditorRef,
  setRect,
  setIsOpen,
  setOptions,
  setCurText,
  setIsLoading,
}: useInlineAutoCompleteProps) => {
  const caretPosition = useSelector(selectCaretPosition);
  useEffect(() => {
    if (!textEditorRef.current) return;
    setIsLoading(true);

    const textEditor = textEditorRef.current;

    const { row, col } = caretPosition;

    // 커서가 놓은 현재 세그먼트
    const curSegment = textEditor.children[row].children[col] as HTMLElement;

    if (!curSegment) {
      setCurText("");
      setRect(undefined);
      setIsOpen(false);
      setIsLoading(false);
      return;
    }

    const curText = curSegment.textContent || "";

    const inlineType = detectInlineType(curText);

    // 현재 세그먼트가 인라인이라면
    if (
      curSegment.className.includes("inline") &&
      (inlineType === "hashtag" || inlineType === "mention")
    ) {
      // 인라인 목록
      let options;
      if (inlineType === "hashtag") {
        options = hashtagList.filter((hashtag) => hashtag.startsWith(curText));
      } else {
        options = mentionList.filter((mention) =>
          mention.userId.startsWith(curText.slice(1))
        );
      }

      if (options.length === 0) {
        setIsOpen(false);
      } else {
        setIsOpen(true);
        setOptions(options);
        const curLine = textEditor.children[row] as HTMLElement;

        const { top, left } = curLine.getBoundingClientRect();

        setCurText(curText);
        setRect({ top: top + 50, left });
        setIsLoading(false);
      }
    } else {
      setCurText("");
      setRect(undefined);
      setIsOpen(false);
      setIsLoading(false);
    }
  }, [caretPosition]);

  return;
};

export default useInlineAutoComplete;
