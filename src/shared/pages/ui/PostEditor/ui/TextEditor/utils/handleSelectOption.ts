import { IAccount } from "@shared/@common/types";
import {
  convertToHtmlSegments,
  getSegments,
  ICaretPosition,
} from "@shared/pages/ui/PostEditor/ui/TextEditor";

const handleSelectOption = (
  textEditor: HTMLDivElement | null,
  caretPosition: ICaretPosition,
  options: (string | IAccount)[],
  curIndex: number,
  setCaretPosition: React.Dispatch<React.SetStateAction<ICaretPosition>>,
  setIsOpen: (value: React.SetStateAction<boolean>) => void,
  index?: number
) => {
  if (!textEditor) return;
  const selectedInline = options[index || curIndex];

  const { row, col } = caretPosition;

  const curLine = textEditor.children[row];

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

  setCaretPosition({ caretPos: 1, row, col: col + 1 });

  setIsOpen(false);
};

export default handleSelectOption;
