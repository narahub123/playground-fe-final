interface InputErrorType {
  regExp: string;
  defaultErrorMsg: string;
  errorList?: { regExp: string; errorMsg: string }[];
  empty?: string;
}

interface DropdownItemType {
  text: string;
  value: string | number;
}

export type { InputErrorType, DropdownItemType };
