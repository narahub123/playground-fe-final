import { Select } from "@shared/@common/ui/components";
import { useSelect } from "@shared/@common/ui/components/Select";

interface SelectDateUnitProps {
  disabled?: boolean;
  field: string;
  label: string;
  value: number;
  options: {
    text: string;
    value: number;
  }[];
  updateFunc: (value: any) => { type: string; payload: any };
  setIsValid: React.Dispatch<
    React.SetStateAction<
      | {
          [key: string]: boolean;
        }
      | boolean
    >
  >;
}

const SelectDateUnit = ({
  disabled = false,
  field,
  label,
  value,
  options,
  updateFunc,
  setIsValid,
}: SelectDateUnitProps) => {
  const {
    handleKeyDown,
    isOpen,
    onClose,
    optionSelected,
    toggleListbox,
    updateValue,
  } = useSelect({ value, options, field, updateFunc, setIsValid });

  return (
    <Select
      field={field}
      label={label}
      isOpen={isOpen}
      handleKeyDown={handleKeyDown}
      toggleListbox={toggleListbox}
      onClose={onClose}
      value={value}
      disabled={disabled}
      numberOfOptions={options.length}
    >
      {options.map((option) => {
        const selectCond = option.value === value;
        return (
          <Select.Option
            className={selectCond ? optionSelected : undefined}
            key={option.value}
            ariaSelected={selectCond}
            onMouseDown={(e) => updateValue(e, option.value)}
            value={value}
          >
            {option.text}
          </Select.Option>
        );
      })}
    </Select>
  );
};

export default SelectDateUnit;
