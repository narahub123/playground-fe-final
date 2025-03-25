interface ICaretInfo {
  curPos: number;
  curText: string;
  curNode: Node;
  curElem: Node;
  curLine: Node;
  nextLine: Node | null;
  textEditor: Node;
}

interface ILine {
  text: string;
  row: number;
  col: number;
  siblings?: ChildNode[];
}

interface ISegment extends ILine {}

export type { ICaretInfo, ILine, ISegment };
