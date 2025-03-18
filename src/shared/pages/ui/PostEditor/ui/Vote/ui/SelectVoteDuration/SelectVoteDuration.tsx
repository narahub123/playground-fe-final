import { Select } from "@shared/@common/ui/components";
import { useSelect } from "@shared/@common/ui/components/Select";
import { IVoteDuration } from "../../types";

interface SelectVoteDurationProps {
  value: number;
  className?: string;
  disabled?: boolean;
  setIsValid: React.Dispatch<
    React.SetStateAction<
      | {
          [key: string]: boolean;
        }
      | boolean
    >
  >;
  setFunc: React.Dispatch<React.SetStateAction<IVoteDuration>>;
  field: string;
  options: { text: string; value: number | string }[];
  label: string;
}

const SelectVoteDuration = ({
  className,
  disabled = false,
  value,
  setIsValid,
  setFunc,
  field,
  options,
  label,
}: SelectVoteDurationProps) => {
  const {
    handleKeyDown,
    isOpen,
    onClose,
    optionSelected,
    toggleListbox,
    updateValue,
  } = useSelect({
    value,
    options,
    field,
    setFunc,
    setIsValid,
  });

  return (
    <Select
      className={className}
      label={label}
      field={field}
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

export default SelectVoteDuration;
