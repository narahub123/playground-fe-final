import {
  InputContainer,
  InputDropdown,
  InputMain,
  InputBottom,
  InputField,
  InputExtra,
} from "./ui";
import { InputContext, InputContextProvider } from "./context";
import { useInputContext } from "./hooks";
import { InputContextType } from "./types";

const Input = Object.assign(InputContainer, {
  Main: InputMain,
  Bottom: InputBottom,
  Field: InputField,
  Dropdown: InputDropdown,
  Extra: InputExtra,
});

export default Input;

export { InputContext, InputContextProvider, useInputContext };

export type { InputContextType };
