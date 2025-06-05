import {
  InputContainer,
  InputMain,
  InputBottom,
  InputField,
  InputExtra,
  InputNumber,
} from "./ui";
import { InputContext, InputContextProvider } from "./context";
import { useInputContext, useInput, useCompiledInputError } from "./hooks";
import {
  InputContextType,
  InputErrorType,
  CompileErrorType,
  InputErrorKeyType,
  InputErrorKeyWithRegExp,
  InputErrorKeyWithoutRegExp,
} from "./types";

const Input = Object.assign(InputContainer, {
  Main: InputMain,
  Bottom: InputBottom,
  Field: InputField,
  Extra: InputExtra,
  Number: InputNumber,
});

export default Input;

export {
  InputContext,
  InputContextProvider,
  useInputContext,
  useInput,
  useCompiledInputError,
};

export type {
  InputContextType,
  InputErrorType,
  CompileErrorType,
  InputErrorKeyType,
  InputErrorKeyWithRegExp,
  InputErrorKeyWithoutRegExp,
};
