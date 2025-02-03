import styles from "./SelectMain.module.css";
import { joinClassNames } from "@shared/@common/utils";
import Text from "../../../Text/Text";
import { LuChevronDown } from "react-icons/lu";
import { ReactNode, useRef, useState } from "react";
import SelectListbox from "../SelectListbox/SelectListbox";
import { SelectContextProvider } from "../../context";
import { SelectContextType } from "../../types";

interface SelectMainProps {
  label: string;
  field: string;
  value: string;
  children: ReactNode;
  handleMouseDown: () => void;
  handleKeyDown: (e: React.KeyboardEvent<HTMLDivElement>) => void;
  onClose: () => void;
  isOpen: boolean;
  className?: string;
  disabled?: boolean;
}

const SelectMain = ({
  label,
  field,
  value,
  isOpen,
  children,
  handleMouseDown,
  handleKeyDown,
  onClose,
  className,
  disabled = false,
}: SelectMainProps) => {
  const selectRef = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState(false);

  const focusCond = isFocused;

  const classNames = joinClassNames([
    styles["select"],
    isFocused ? styles[`select--focused`] : styles[`select--unfocused`],
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
  };

  return (
    <SelectContextProvider value={context}>
      <div
        className={classNames}
        tabIndex={0}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onMouseDown={handleMouseDown}
        onKeyDown={handleKeyDown}
        ref={selectRef}
      >
        <div className={styles[`select__container`]}>
          <span className={styles[`select__left`]}>
            <Text
              type="expl"
              className={joinClassNames([
                styles[`select__label`],
                focusCond
                  ? styles[`select__label--focused`]
                  : styles[`select__label--unfocused`],
              ])}
            >
              {label}
            </Text>
            <Text className={styles[`select__field`]}>{value}</Text>
          </span>
          <span className={styles[`select__right`]}>
            <LuChevronDown
              className={joinClassNames([
                styles[`select__icon`],
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
