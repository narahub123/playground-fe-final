import {
  InputContainer,
  InputDropdown,
  InputError,
  InputMain,
  InputTop,
  InputBottom,
  InputField,
} from "./ui";

const Input = Object.assign(InputContainer, {
  Main: InputMain,
  Top: InputTop,
  Bottom: InputBottom,
  Field: InputField,
  Dropdown: InputDropdown,
  Error: InputError,
});

export default Input;
