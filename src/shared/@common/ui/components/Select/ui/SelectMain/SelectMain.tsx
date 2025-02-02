import styles from "./SelectMain.module.css";
import { joinClassNames } from "@shared/@common/utils";
import Text from "../../../Text/Text";
import { LuChevronDown } from "react-icons/lu";
import { ReactNode, useState } from "react";
import SelectListbox from "../SelectListbox/SelectListbox";

interface SelectMainProps {
  label: string;
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
  value,
  isOpen,
  children,
  handleMouseDown,
  handleKeyDown,
  onClose,
  className,
  disabled = false,
}: SelectMainProps) => {
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

  return (
    <div
      className={classNames}
      tabIndex={0}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseDown={handleMouseDown}
      onKeyDown={handleKeyDown}
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
            ])}
          />
        </span>
      </div>
      {isOpen && !disabled && <SelectListbox>{children}</SelectListbox>}
    </div>
  );
};

export default SelectMain;
