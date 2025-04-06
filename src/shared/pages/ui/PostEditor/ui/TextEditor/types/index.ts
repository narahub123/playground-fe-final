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

interface IRect {
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
}

export type { InlineType, SegmentType, ISegment, ICaretPosition, IRect };
