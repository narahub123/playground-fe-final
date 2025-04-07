import { IAccount } from "@shared/@common/types";
import {
  convertToHtmlSegments,
  getSegments,
} from "@shared/pages/ui/PostEditor/ui/TextEditor";
import { useSelector } from "react-redux";
import { selectCaretPosition } from "../../../models/selectors";
import { useAppDispatch } from "@app/store";
import { setCaretPosition } from "../../../models/slices/postEditorSlice";

const useSelectOption = () => {
  const dispatch = useAppDispatch();
  const caretPosition = useSelector(selectCaretPosition);
  const handleSelectOption = (
    textEditor: HTMLDivElement | null,
    options: (string | IAccount)[],
    curIndex: number,
    setIsOpen: (value: React.SetStateAction<boolean>) => void,
    index?: number
  ) => {
    if (!textEditor) return;

    const selectedInline = options[index || curIndex];

    const { row, col } = caretPosition;

    const curLine = textEditor.children[row];

    const curSegment = curLine.children[col] as HTMLElement;
    if (!curSegment.className.includes("inline")) return;

    const curLineText = curLine.textContent || "";

    const segments = getSegments(curLineText).map((s) => s.text);

    segments.splice(
      col,
      1,
      typeof selectedInline === "string"
        ? selectedInline
        : "@" + selectedInline.userId
    );

    segments.splice(col + 1, 0, " ");

    const newLineText = segments.join("");

    const newSegments = getSegments(newLineText);

    const htmlSegments = convertToHtmlSegments(newSegments, row);
    console.log(htmlSegments);

    curLine.innerHTML = htmlSegments;

    dispatch(setCaretPosition({ caretPos: 1, row, col: col + 1 }));

    setIsOpen(false);
  };
  return handleSelectOption;
};

export default useSelectOption;
