import { birthDateList } from "@features/auth-email/data";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { selectBirth } from "@shared/@common/models/selectors";
import { setBirthDate } from "@shared/@common/models/slices/userSlice";
import { Select } from "@shared/@common/ui/components";
import { useSelect } from "@shared/@common/ui/components/Select";
import { useSelector } from "react-redux";

interface SelectDateProps {
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

const SelectDate = ({
  className,
  disabled = false,
  setIsValid,
}: SelectDateProps) => {
  // 언어 설정
  const { label, unit } = useLanguageContent(["profilepage", "SelectDate"]);

  const field = "date";

  const birth = useSelector(selectBirth);

  const value = birth.date;

  const options = birthDateList(birth.year, birth.month, unit);

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
    updateFunc: setBirthDate,
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

export default SelectDate;
