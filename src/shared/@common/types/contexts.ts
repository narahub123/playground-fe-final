interface ModalContextValueType {
  onClose?: () => void;
  lengthOfList?: number;
  curPage?: number;
  setCurPage?: React.Dispatch<React.SetStateAction<number>>;
  width?: number;
  unit?: FontUnitType;
}

type FontUnitType = "px" | "%" | "rem";

export type { ModalContextValueType, FontUnitType };
