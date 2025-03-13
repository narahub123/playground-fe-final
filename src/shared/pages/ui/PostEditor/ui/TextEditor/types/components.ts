interface ISegmentProps {
  row: number;
  col: number;
  text: string;
}

interface ILine {
  row: number;
  segments: ISegment[];
}

interface ISegment {
  type: SegmentType;
  row: number;
  col: number;
  text: string;
}

type SegmentType = "plain" | "inline";

export type { ISegmentProps, ILine, ISegment, SegmentType };
