interface ISearchContext {
  keyword: string;
  setKeyword: React.Dispatch<React.SetStateAction<string>>;
}

interface IRect {
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
}

export type { ISearchContext, IRect };
