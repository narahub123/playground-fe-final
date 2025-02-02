import styles from "./Select.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { joinClassNames } from "@shared/@common/utils";
import Text from "../Text/Text";
import { LuChevronDown } from "react-icons/lu";
import { ReactNode, useState } from "react";

interface SelectProps {
  label: string;
  value: string;
  children: ReactNode;
  className?: string;
  disabled?: boolean;
}

const Select = ({
  label,
  value,
  children,
  className,
  disabled = false,
}: SelectProps) => {
  const [isFocused, setIsFocused] = useState(false);
  // 언어 설정
  const {} = useLanguageContent(["components", "Select"]);

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
  };

  console.log(isFocused);

  return (
    <div
      className={classNames}
      tabIndex={0}
      onFocus={handleFocus}
      onBlur={handleBlur}
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
      <ul className={styles[`input__option__container`]}>{children}</ul>
    </div>
  );
};

export default Select;
