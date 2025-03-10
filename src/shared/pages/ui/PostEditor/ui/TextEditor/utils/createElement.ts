import styles from "../ui/TextEditor/TextEditor.module.css";

// 라인 생성
const createLine = (row: number, col: number) => {
  const div = document.createElement("div");
  div.setAttribute("class", styles["text__editor__line"]);
  div.setAttribute("data-offset", `${row}`);

  const item = createItem(row, col);

  div.appendChild(item);

  return div;
};

// 아이템 생성
const createItem = (row: number, col: number) => {
  const span = document.createElement("span");
  span.setAttribute("class", styles["text__editor__item"]);
  span.setAttribute("data-offset", `${row}-${col}`);

  const br = createBr();
  span.appendChild(br);

  return span;
};

// br 생성
const createBr = () => {
  const br = document.createElement("br");
  br.setAttribute("data-text", "true");

  return br;
};

export { createLine, createItem, createBr };
