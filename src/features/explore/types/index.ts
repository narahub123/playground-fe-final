interface ISearchContext {
  keyword: string;
  setKeyword: React.Dispatch<React.SetStateAction<string>>;
  page: number;
  isFocused: boolean;
  setIsFocused: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

interface IRect {
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
}

export type { ISearchContext, IRect };
