import {
  InputContainer,
  InputDropdown,
  InputError,
  InputMain,
  InputBottom,
  InputField,
} from "./ui";
import { InputContext, InputContextProvider } from "./context";
import { useInputContext } from "./hooks";
import { InputContextType } from "./types";

const Input = Object.assign(InputContainer, {
  Main: InputMain,
  Bottom: InputBottom,
  Field: InputField,
  Dropdown: InputDropdown,
  Error: InputError,
});

export default Input;

export { InputContext, InputContextProvider, useInputContext };

export type { InputContextType };
