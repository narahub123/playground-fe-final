import { initialLine } from "../data";
import { ILine, ISegment } from "../types";
import { getRowAndColOfSegment, getSegmentType } from "./segments";

const updateLines = (
  setLines: React.Dispatch<React.SetStateAction<ILine[]>>,
  linesRef: React.MutableRefObject<(HTMLDivElement | null)[]>
) => {
  const lines = linesRef.current;

  if (lines.length === 0) return;

  const newLines = [...lines];

  const updatedLines: ILine[] = newLines.map((line, idx) => {
    console.log("각 행", line);
    if (!line) return initialLine;

    const segments = Array.prototype.slice.call(line.childNodes);

    const updatedSegments: ISegment[] = segments.map((segment) => {
      const { row, col } = getRowAndColOfSegment(segment);

      return {
        type: getSegmentType(segment),
        row,
        col,
        text: segment.textContent,
      };
    });

    return {
      row: idx,
      segments: updatedSegments,
    };
  });

  console.log("업데이트된 줄들", updatedLines);

  setLines(updatedLines);
};

export default updateLines;
