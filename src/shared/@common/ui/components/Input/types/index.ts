type InputContextType = {
  label: string;
  field: string;
  disabled: boolean;
  isFocused: boolean;
  setIsFocused: React.Dispatch<React.SetStateAction<boolean>>;
  inputValue: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isValid: boolean;
  maxLength?: number;
};

export type { InputContextType };
