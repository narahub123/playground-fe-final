type InlineType = "hashtag" | "mention" | "url";

type SegmentType = "plain" | "inline";

interface ISegment {
  type: SegmentType;
  text: string;
}

interface ICaretPosition {
  caretPos: number;
  row: number;
  col: number;
}

export type { InlineType, SegmentType, ISegment, ICaretPosition };
