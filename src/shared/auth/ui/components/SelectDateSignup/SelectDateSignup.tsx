import { birthDateList } from "@features/auth-email/data";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { Select } from "@shared/@common/ui/components";
import { useSelect } from "@shared/@common/ui/components/Select";
import { getBirthInSignup } from "@shared/auth/models/selectors";
import { setBirthDateInSignup } from "@shared/auth/models/slices/signupSlice";
import { useSelector } from "react-redux";

interface SelectDateSignupProps {
  setIsValid: React.Dispatch<
    React.SetStateAction<
      | {
          [key: string]: boolean; // 각 필드에 대한 유효성 상태를 업데이트하는 함수입니다. 필드 이름을 키로 하고, boolean 값을 업데이트합니다.
        }
      | boolean // 전체 유효성 상태를 업데이트하는 함수입니다. 모든 입력 필드에 대한 유효성 상태를 한 번에 업데이트할 수 있습니다.
    >
  >; // `isValid`의 값을 업데이트하는 함수입니다. 객체일 경우, 각 필드의 유효성 상태를 개별적으로 업데이트하거나, boolean 값일 경우 전체 유효성 상태를 한 번에 업데이트할 수 있습니다.
  className?: string;
  disabled?: boolean;
}

const SelectDateSignup = ({
  setIsValid,
  className,
  disabled = false,
}: SelectDateSignupProps) => {
  // 언어 설정
  const { label, unit } = useLanguageContent([
    "components",
    "SelectDateSignup",
  ]);

  const field = "date";

  const birth = useSelector(getBirthInSignup);

  const value = birth.date as string;

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
    updateFunc: setBirthDateInSignup,
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

export default SelectDateSignup;
