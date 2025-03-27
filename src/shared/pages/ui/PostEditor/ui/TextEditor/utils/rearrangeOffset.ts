import { isInlineSegment, isSegment } from "./elementChecker";

const rearrangeOffset = (nodes: Node[], row: number, col: number) => {
  console.log("형제 요소", nodes);

  nodes.forEach((segment, index) => {
    if (isSegment(segment)) {
      (segment as HTMLElement).dataset["offset"] = `${row}-${col + index}`;
    } else if (isInlineSegment(segment)) {
      const child = segment.firstChild!;

      if ((child as HTMLElement).className.includes("segment")) {
        (child as HTMLElement).dataset["offset"] = `${row}-${col + index}`;
      }
    }
  });
};

export default rearrangeOffset;
