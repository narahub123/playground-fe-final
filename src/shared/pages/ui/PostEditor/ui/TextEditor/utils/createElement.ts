import styles from "../ui/TextEditor/TextEditor.module.css";
import { ILine, ISegment } from "../types";

const createTextSpan = (text?: string) => {
  let textSpan;
  if (!text) {
    textSpan = document.createElement("br");
  } else {
    textSpan = document.createElement("span");
    textSpan.textContent = text;
  }

  textSpan.setAttribute("data-text", "true");

  return textSpan;
};

const createSegment = ({ text, row, col }: ISegment) => {
  const textSpan = createTextSpan(text);

  const segment = document.createElement("span");
  segment.setAttribute("class", styles["segment"]);
  segment.setAttribute("data-offset", `${row ? row : 0}-${col ? col : 0}`);
  segment.appendChild(textSpan);

  return segment;
};

const createLine = ({ text, row, col, siblings }: ILine) => {
  const segment = createSegment({ text, row, col });

  const line = document.createElement("div");
  line.setAttribute("class", styles["line"]);
  line.setAttribute("data-offset", `${row ? row : 0}`);
  line.appendChild(segment);

  if (siblings && siblings.length > 0) {
    const nextNodes = Array.from(siblings);

    nextNodes.forEach((node, index) => {
      (node as HTMLElement).dataset["offset"] = `${row}-${col + index + 1}`;

      line.appendChild(node);
    });
  }

  return line;
};

export { createTextSpan, createSegment, createLine };
