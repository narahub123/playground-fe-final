import { useLanguageContent } from "@shared/@common/models/hooks";
import { setBgTheme } from "@shared/@common/models/slices/displaySlice";
import { Select } from "@shared/@common/ui/components";
import { useSelect } from "@shared/@common/ui/components/Select";

interface SelectBirthYearVisibilityProps {
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
}

const SelectBirthYearVisibility = ({
  className,
  disabled = false,
  setIsValid,
}: SelectBirthYearVisibilityProps) => {
  // 언어 설정
  const { label } = useLanguageContent([
    "profilepage",
    "SelectBirthYearVisibility",
  ]);

  const field = "yearVisibility";

  const value = "all";

  const options: { text: string; value: string | number }[] = [];

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
    updateFunc: setBgTheme,
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

export default SelectBirthYearVisibility;
