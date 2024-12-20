interface InputErrorType {
  regExp: string;
  defaultErrorMsg: string;
  errorList?: { regExp: string; errorMsg: string }[];
  empty?: string;
}

export type { InputErrorType };
