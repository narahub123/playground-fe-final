import styles from "../ui/TextEditor/TextEditor.module.css";
import {
  getLines,
  getSegments,
} from "@shared/pages/ui/PostEditor/ui/TextEditor";

const createInnerHtml = (target: HTMLDivElement): string => {
  const lines = getLines(target);
  console.log("줄 들", lines);

  const newLines: string[] = [];

  for (let row = 0; row < lines.length; row++) {
    const line = lines[row];
    const segments = getSegments(line);

    const newSegments = segments.map((segment, col) => {
      if (segment.type === "plain") {
        if (segment.text) {
          return `<span class=${styles["segment"]} data-offset='${row}-${col}'><span data-text="true">${segment.text}</span></span>`;
        } else
          return `<span class=${styles["segment"]} data-offset='${row}-${col}'><br data-text="true" /></span>`;
      } else {
        return `<span class=${styles["inline"]}><span class=${styles["segment"]} data-offset='${row}-${col}'><span data-text="true">${segment.text}</span></span></span>`;
      }
    });

    const newLine = `<div class=${styles["line"]}>${newSegments.join(
      ""
    )}</div>`;
    newLines.push(newLine);
  }

  return newLines.join("");
};

export default createInnerHtml;
