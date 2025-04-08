import {
  getSegments,
  convertToHtmlSegments,
} from "@shared/pages/ui/PostEditor/ui/TextEditor";

const updateLine = (textEditor: HTMLDivElement, row: number) => {
  const line = textEditor.children[row];
  const segments = getSegments(line.textContent || "");
  const htmlSegments = convertToHtmlSegments(segments, row);
  line.innerHTML = htmlSegments;
};

export default updateLine;
