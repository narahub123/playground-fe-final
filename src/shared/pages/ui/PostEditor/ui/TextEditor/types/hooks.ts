interface ICaretInfo {
  curText: string;
  curPos: number;
  curRow: number;
  curCol: number;
  curSegment: HTMLSpanElement;
  curLine: HTMLDivElement;
}

export type { ICaretInfo };
