import SelectMain from "./SelectMain/SelectMain";
import SelectOption from "./SelectOption/SelectOption";

const Select = Object.assign(SelectMain, {
  Option: SelectOption,
});

export default Select;
