import { useCallback } from "react";
import {
  ILine,
  ISegment,
  getRowAndColOfSegment,
  getSegmentType,
  initialLine,
} from "@shared/pages/ui/PostEditor/ui/TextEditor";

const useUpdateLines = (
  linesRef: React.MutableRefObject<(HTMLDivElement | null)[]>,
  setLines: React.Dispatch<React.SetStateAction<ILine[]>>
) => {
  const updateLines = useCallback(() => {
    console.log(
      "--------------------- updateLines 시작 --------------------------"
    );

    const lines = linesRef.current;

    if (lines.length === 0) return;

    console.log("현재 linesRef.current:", lines); // linesRef의 내용을 로그로 기록

    const newLines = [...lines];

    const updatedLines: ILine[] = newLines.map((line, idx) => {
      if (!line) return initialLine;

      const segments = Array.from(line.childNodes);

      console.log(`라인 ${idx}의 세그먼트들:`, segments); // 각 라인의 세그먼트 정보 로그

      const updatedSegments: ISegment[] = segments.map((segment) => {
        const { row, col } = getRowAndColOfSegment(segment);

        const segmentData = {
          type: getSegmentType(segment),
          row,
          col,
          text: segment.textContent || "",
        };

        console.log("세그먼트 데이터:", segmentData); // 각 세그먼트의 데이터 로그

        return segmentData;
      });

      return {
        row: idx,
        segments: updatedSegments,
      };
    });

    console.log("업데이트된 줄들:", updatedLines); // 최종적으로 업데이트된 라인 데이터 로그

    setLines(updatedLines);
    console.log(
      "--------------------- updateLines 완료 --------------------------"
    );
  }, [linesRef, setLines]);

  return updateLines;
};

export default useUpdateLines;
