import InputActionIcon from "./InputActionIcon/InputActionIcon";
import InputAdornmentIcon from "./InputAdornmentIcon/InputAdornmentIcon";
import InputBottom from "./InputBottom/InputBottom";
import InputCounter from "./InputCounter/InputCounter";
import InputDropdown from "./InputDropdown/InputDropdown";
import InputError from "./InputError/InputError";
import InputField from "./InputField/InputField";
import InputLabel from "./InputLabel/InputLabel";
import InputMain from "./InputMain/InputMain";
import InputTop from "./InputTop/InputTop";
import InputWrapper from "./InputWrapper/InputWrapper";

const Input = Object.assign(InputWrapper, {
  Main: InputMain,
  Top: InputTop,
  Label: InputLabel,
  Counter: InputCounter,
  Bottom: InputBottom,
  Field: InputField,
  AdornmentIcon: InputAdornmentIcon,
  ActionIcon: InputActionIcon,
  Error: InputError,
  Dropdown: InputDropdown,
});

export default Input;
