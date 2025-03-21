import Select, { useSelect } from "@shared/@common/ui/components/Select";

interface SelectScheduleProps {
  className?: string;
  value: number | string;
  disabled?: boolean;
  setIsValid: React.Dispatch<
    React.SetStateAction<
      | {
          [key: string]: boolean;
        }
      | boolean
    >
  >;
  setFunc: React.Dispatch<React.SetStateAction<any>>;
  field: string;
  options: { text: string; value: number | string }[];
  label: string;
}

const SelectSchedule = ({
  className,
  disabled = false,
  value,
  setIsValid,
  setFunc,
  field,
  options,
  label,
}: SelectScheduleProps) => {
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

export default SelectSchedule;
