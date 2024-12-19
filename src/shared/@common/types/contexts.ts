interface ModalContextValueType {
  onClose?: () => void;
  lengthOfList?: number;
  curPage?: number;
  setCurPage?: React.Dispatch<React.SetStateAction<number>>;
}

export type { ModalContextValueType };
