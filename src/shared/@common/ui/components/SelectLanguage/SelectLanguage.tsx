import { useLanguageContent } from "@shared/@common/models/hooks";
import { getLanguage } from "@shared/@common/models/selectors";
import { useSelector } from "react-redux";
import Select, { SelectOptionType, useSelect } from "../Select";
import { setLanguage } from "@shared/@common/models/slices/displaySlice";

interface SelectLanguageProps {
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

const SelectLanguage = ({
  setIsValid,
  className,
  disabled = false,
}: SelectLanguageProps) => {
  // 언어 설정
  const { label, options } = useLanguageContent([
    "components",
    "SelectLanguage",
  ]);

  const field = "language";

  const value = useSelector(getLanguage);

  const {
    handleKeyDown,
    isOpen,
    onClose,
    optionSelected,
    toggleListbox,
    updateValue,
    convertValueToText,
  } = useSelect({
    value,
    options,
    field,
    updateFunc: setLanguage,
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
      value={convertValueToText(value)}
      disabled={disabled}
      numberOfOptions={options.length}
    >
      {(options as SelectOptionType[]).map((option) => {
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

export default SelectLanguage;
