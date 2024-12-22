interface InputErrorType {
  regExp: string;
  defaultErrorMsg: string;
  errorList?: InputErrorListItem[];
  empty?: string;
}

interface InputErrorListItem {
  regExp: string;
  errorMsg: string;
}

interface DropdownItemType {
  text: string;
  value: string | number;
}

export type { InputErrorType, InputErrorListItem, DropdownItemType };
