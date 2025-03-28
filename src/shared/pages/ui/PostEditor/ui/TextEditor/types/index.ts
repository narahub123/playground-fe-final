type InlineType = "hashtag" | "mention" | "url";

type SegmentType = "plain" | "inline";

interface ISegment {
  type: SegmentType;
  text: string;
}

export type { InlineType, SegmentType, ISegment };
