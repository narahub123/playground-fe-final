interface ICaretInfo {
  curNode: Node;
}

interface ILine {
  text: string;
  row: number;
  col: number;
}

interface ISegment extends ILine {}

export type { ICaretInfo, ILine, ISegment };
