import styles from "./SelectMain.module.css";
import { joinClassNames } from "@shared/@common/utils";
import Text from "../../../Text/Text";
import { LuChevronDown } from "react-icons/lu";
import { ReactNode, useRef, useState } from "react";
import SelectListbox from "../SelectListbox/SelectListbox";
import { SelectContextProvider } from "../../context";
import { SelectContextType } from "../../types";
import { useClickOutside } from "@shared/@common/models/hooks";

interface SelectMainProps {
  label: string;
  field: string;
  value: string;
  children: ReactNode;
  toggleListbox: () => void;
  handleKeyDown: (e: React.KeyboardEvent<HTMLDivElement>) => void;
  onClose: () => void;
  isOpen: boolean;
  numberOfOptions: number;
  className?: string;
  disabled?: boolean;
}

const SelectMain = ({
  label,
  field,
  value,
  isOpen,
  children,
  toggleListbox,
  handleKeyDown,
  onClose,
  numberOfOptions,
  className,
  disabled = false,
}: SelectMainProps) => {
  const selectRef = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState(false);

  useClickOutside({ containerRef: selectRef, toggle: onClose });

  const focusCond = isFocused;

  const classNames = joinClassNames([
    styles["select"],
    isFocused ? styles[`select--focused`] : styles[`select--unfocused`],
    disabled ? styles["select--disabled"] : undefined,
    className,
  ]);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
    onClose();
  };

  const context: SelectContextType = {
    field,
    selectRef,
    numberOfOptions,
  };

  return (
    <SelectContextProvider value={context}>
      <div
        className={classNames}
        tabIndex={disabled ? -1 : 0}
        onFocus={!disabled ? handleFocus : undefined}
        onBlur={handleBlur}
        onMouseDown={!disabled ? toggleListbox : undefined}
        onKeyDown={!disabled ? handleKeyDown : undefined}
        ref={selectRef}
        role="button"
        aria-expanded={isOpen} // 드롭다운을 토글하는 버튼 역할을 하는 요소에 적용해야 함
        aria-haspopup={"listbox"} // 해당 요소가 팝업을 트리거할 수 있다는 것을 스크린 리더 사용자에게 알려주는 속성
        aria-controls={`select-${field}`} // 어떤 요소에 대한 컨트롤인지를 참조
        aria-disabled={disabled} // 활성화/비활성화 상태
      >
        <div className={styles[`select__container`]}>
          <span className={styles[`select__left`]}>
            <Text
              type="expl"
              className={joinClassNames([
                disabled
                  ? styles[`select__label--disabled`]
                  : styles[`select__label`],
                focusCond
                  ? styles[`select__label--focused`]
                  : styles[`select__label--unfocused`],
              ])}
            >
              {label}
            </Text>
            <Text
              className={
                disabled
                  ? styles[`select__field--disabled`]
                  : styles[`select__field`]
              }
            >
              {value}
            </Text>
          </span>
          <span className={styles[`select__right`]}>
            <LuChevronDown
              className={joinClassNames([
                disabled
                  ? styles[`select__icon--disabled`]
                  : styles[`select__icon`],
                isFocused
                  ? styles[`select__icon--focused`]
                  : styles[`select__icon--unfocused`],
                isOpen
                  ? styles[`select__icon--open`]
                  : styles[`select__icon--close`],
              ])}
            />
          </span>
        </div>
        {isOpen && !disabled && <SelectListbox>{children}</SelectListbox>}
      </div>
    </SelectContextProvider>
  );
};

export default SelectMain;
