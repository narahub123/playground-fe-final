import { birthMonthList } from "@features/auth-email/data";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { selectBirth } from "@shared/@common/models/selectors";
import { setBirthMonth } from "@shared/@common/models/slices/userSlice";
import { Select } from "@shared/@common/ui/components";
import { useSelect } from "@shared/@common/ui/components/Select";
import { useSelector } from "react-redux";

interface SelectMonthProps {
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

const SelectMonth = ({
  className,
  disabled = false,
  setIsValid,
}: SelectMonthProps) => {
  // 언어 설정
  const { label, unit } = useLanguageContent(["profilepage", "SelectMonth"]);

  const field = "month";

  const birth = useSelector(selectBirth);

  const value = birth.month;

  const options = birthMonthList(unit);

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
    updateFunc: setBirthMonth,
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

export default SelectMonth;
