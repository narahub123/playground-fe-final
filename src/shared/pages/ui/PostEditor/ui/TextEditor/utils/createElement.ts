import { ILine, ISegment } from "../types";
import styles from "../ui/TextEditor/TextEditor.module.css";

const createTextSpan = (text?: string) => {
  let textSpan;
  if (!text) {
    textSpan = document.createElement("br");
  } else {
    textSpan = document.createElement("span");
    textSpan.textContent = text;
  }

  textSpan.setAttribute("date-text", "true");

  return textSpan;
};

const createSegment = ({ text, row, col }: ISegment) => {
  const textSpan = createTextSpan(text);

  const segment = document.createElement("span");
  segment.setAttribute("class", styles["segment"]);
  segment.setAttribute("date-offset", `${row ? row : 0}-${col ? col : 0}`);
  segment.appendChild(textSpan);

  return segment;
};

const createLine = ({ text, row, col }: ILine) => {
  const segment = createSegment({ text, row, col });

  const line = document.createElement("div");
  line.setAttribute("class", styles["line"]);
  line.setAttribute("date-offset", `${row ? row : 0}`);
  line.appendChild(segment);

  return line;
};

export { createTextSpan, createSegment, createLine };
