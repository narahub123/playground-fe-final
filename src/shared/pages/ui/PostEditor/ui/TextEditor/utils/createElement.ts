import styles from "../ui/TextEditor/TextEditor.module.css";

// 라인 생성
const createLine = (row: number, col: number, spans?: HTMLElement[]) => {
  const div = document.createElement("div");
  div.setAttribute("class", styles["text__editor__line"]);
  div.setAttribute("data-offset", `${row}`);

  if (spans && spans.length > 0) {
    for (const span of spans) {
      div.appendChild(span);
    }
  } else {
    const item = createItem(row, col);
    div.appendChild(item);
  }

  return div;
};

// 아이템 생성
const createItem = (row?: number, col?: number, text?: string | null) => {
  const span = document.createElement("span");
  span.setAttribute("class", styles["text__editor__item"]);
  span.setAttribute("data-offset", `${row || 0}-${col || 0}`);

  if (!text) {
    const br = createBr();
    span.appendChild(br);
  } else {
    span.textContent = text;
  }

  return span;
};

// 인라인 아이템 생성
const createInlineItem = (row?: number, col?: number, text?: string | null) => {
  const inlineItem = document.createElement("span");
  inlineItem.setAttribute("style", `color: ${"cornflowerblue"}`);

  const item = createItem(row, col, text);

  inlineItem.appendChild(item);

  return inlineItem;
};

// br 생성
const createBr = () => {
  const br = document.createElement("br");
  br.setAttribute("data-text", "true");

  return br;
};

export { createLine, createItem, createBr, createInlineItem };
