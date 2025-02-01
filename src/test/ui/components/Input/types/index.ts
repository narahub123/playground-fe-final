type InputContextType = {
  label: string;
  field: string;
  disabled: boolean;
  isFocused: boolean;
  setIsFocused: React.Dispatch<React.SetStateAction<boolean>>;
  maxLength?: string;
};

export type { InputContextType };
