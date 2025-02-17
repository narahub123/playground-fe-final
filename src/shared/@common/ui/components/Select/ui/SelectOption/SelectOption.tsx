import { ReactNode, useEffect, useRef } from "react";
import styles from "./SelectOption.module.css";
import { joinClassNames } from "@shared/@common/utils";

interface SelectOptionCustomProps {
  children: ReactNode;
  value: string | number;
  onMouseDown: (value: any) => void;
  ariaSelected: boolean;
  className?: string;
}

type SelectOptionProps = SelectOptionCustomProps &
  React.HTMLAttributes<HTMLLIElement>;

const SelectOption = ({
  children,
  value,
  onMouseDown,
  className,
  ariaSelected,
  ...props
}: SelectOptionProps) => {
  const optionRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    if (!optionRef.current) return;

    const option = optionRef.current;

    if (option.className.includes("selected")) {
      option.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [value]);

  const classNames = joinClassNames([styles["select__option"], className]);

  return (
    <li
      className={classNames}
      onMouseDown={onMouseDown}
      ref={optionRef}
      role="option"
      aria-selected={ariaSelected}
      {...props}
    >
      {children}
    </li>
  );
};

export default SelectOption;
