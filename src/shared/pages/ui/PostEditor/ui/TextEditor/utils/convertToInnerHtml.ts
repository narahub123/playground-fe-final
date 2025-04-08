import {
  convertToHtmlLine,
  convertToHtmlSegments,
  getLines,
  getSegments,
} from "@shared/pages/ui/PostEditor/ui/TextEditor";

const convertToInnerHtml = (textEditor: HTMLDivElement) => {
  const lines = getLines(textEditor);

  const htmlLines: string[] = [];
  for (let row = 0; row < lines.length; row++) {
    const line = lines[row];

    const segments = getSegments(line);

    const htmlSegments = convertToHtmlSegments(segments, row);

    const htmlLine = convertToHtmlLine(htmlSegments, row);

    htmlLines.push(htmlLine);
  }

  return htmlLines.join("");
};

export default convertToInnerHtml;
