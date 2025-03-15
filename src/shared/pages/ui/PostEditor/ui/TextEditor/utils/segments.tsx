import { IOffset, SegmentType } from "../types";

const isPlainSegment = (node: Node | HTMLElement): boolean => {
  return Boolean(
    node.nodeName === "SPAN" && (node as HTMLElement).dataset["offset"]
  );
};

const isInlineSegment = (node: Node | HTMLElement): boolean => {
  return Boolean(
    node.nodeName === "SPAN" && !(node as HTMLElement).dataset["offset"]
  );
};

const getSegmentType = (segment: Node | HTMLElement): SegmentType => {
  return isInlineSegment(segment) ? "inline" : "plain";
};

const getRowAndColOfSegment = (segment: Node | HTMLElement): IOffset => {
  const offset = isInlineSegment(segment)
    ? (segment.firstChild as HTMLElement).dataset["offset"]
    : (segment as HTMLElement).dataset["offset"];
  if (!offset) {
    console.error("offset이 존재하지 않음");
    return { row: 0, col: 0 };
  }

  const [row, col] = offset.split("-").map(Number);

  return {
    row,
    col,
  };
};

const logError = (message: string, content: any) => {
  if (import.meta.env.VITE_ENV === "development")
    console.error(`${message}: ${content}}`);
};

export {
  isPlainSegment,
  isInlineSegment,
  getRowAndColOfSegment,
  getSegmentType,
  logError,
};
