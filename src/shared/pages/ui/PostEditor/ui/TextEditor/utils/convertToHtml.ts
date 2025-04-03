import styles from "../ui/TextEditor/TextEditor.module.css";
import { ISegment } from "@shared/pages/ui/PostEditor/ui/TextEditor";

const convertToHtmlSegments = (segments: ISegment[], row: number): string => {
  console.log("--------------- convertToHtmlSegments 시작 ---------------");
  const htmlSegments = segments
    .map((segment, col) => {
      if (segment.type === "plain")
        if (segment.text) {
          return `<span class=${styles["segment"]} data-offset='${row}-${col}'><span data-text="true">${segment.text}</span></span>`;
        } else
          return `<span class=${styles["segment"]} data-offset='${row}-${col}'><br data-text="true" /></span>`;
      else
        return `<span class=${styles["inline"]}><span class=${styles["segment"]} data-offset='${row}-${col}'><span data-text="true">${segment.text}</span></span></span>`;
    })
    .join("");
  console.log("--------------- convertToHtmlSegments 종료 ---------------");
  return htmlSegments;
};

const convertToHtmlLine = (htmlSegments: string, row: number): string => {
  console.log("--------------- convertToHtmlLine 시작 ---------------");
  const htmlLine = `<div class=${styles["line"]} data-offset='${row}'>${htmlSegments}</div>`;
  console.log("--------------- convertToHtmlLine 종료 ---------------");

  return htmlLine;
};

export { convertToHtmlSegments, convertToHtmlLine };
