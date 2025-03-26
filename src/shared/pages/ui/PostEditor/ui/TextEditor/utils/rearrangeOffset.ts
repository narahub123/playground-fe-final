import { isSegment } from "./elementChecker";

const rearrangeOffset = (nodes: Node[], row: number, col: number) => {
  nodes.forEach((segment, index) => {
    if (isSegment(segment)) {
      (segment as HTMLElement).dataset["offset"] = `${row}-${col + index}`;
    } else {
      const child = segment.firstChild!;

      if ((child as HTMLElement).className.includes("segment")) {
        (child as HTMLElement).dataset["offset"] = `${row}-${col + index}`;
      }
    }
  });
};

export default rearrangeOffset;
