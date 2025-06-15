import { selectBirth } from "@shared/@common/models/selectors";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { Select } from "@shared/@common/ui/components";
import { useSelector } from "react-redux";
import { birthYearList } from "@features/auth-email/data";
import { useSelect } from "@shared/@common/ui/components/Select";
import { setBirthYear } from "@shared/@common/models/slices/userSlice";

interface SelectYearProps {
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

const SelectYear = ({
  className,
  disabled = false,
  setIsValid,
}: SelectYearProps) => {
  // 언어 설정
  const { label, unit } = useLanguageContent(["profilepage", "SelectYear"]);

  const field = "year";

  const birth = useSelector(selectBirth);

  const value = birth.year;

  const options = birthYearList(unit);

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
    updateFunc: setBirthYear,
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

export default SelectYear;
