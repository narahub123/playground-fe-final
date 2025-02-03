import SelectMain from "./ui/SelectMain/SelectMain";
import SelectOption from "./ui/SelectOption/SelectOption";
import { SelectContextType, SelectOptionType } from "./types";
import { SelectContext, SelectContextProvider } from "./context";
import { useSelect, useSelectContext } from "./hooks";

const Select = Object.assign(SelectMain, {
  Option: SelectOption,
});

export default Select;

export type { SelectContextType, SelectOptionType };
export { SelectContext, SelectContextProvider, useSelectContext, useSelect };
