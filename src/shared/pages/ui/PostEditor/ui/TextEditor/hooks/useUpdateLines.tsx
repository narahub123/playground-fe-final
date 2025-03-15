import { useCallback } from "react";
import { ILine, ISegment } from "../types";
import { getRowAndColOfSegment, getSegmentType } from "../utils";
import { initialLine } from "../data";

const useUpdateLines = (
  linesRef: React.MutableRefObject<(HTMLDivElement | null)[]>,
  setLines: React.Dispatch<React.SetStateAction<ILine[]>>
) => {
  const updateLines = useCallback(() => {
    const lines = linesRef.current;

    if (lines.length === 0) return;

    const newLines = [...lines];

    const updatedLines: ILine[] = newLines.map((line, idx) => {
      console.log("각 행", line);
      if (!line) return initialLine;

      const segments = Array.prototype.slice.call(line.childNodes);
      // const segments = Array.from(line.childNodes);

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
  }, []);

  return updateLines;
};

export default useUpdateLines;
