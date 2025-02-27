import { Button, Input } from "@shared/@common/ui/components";
import styles from "./InputVerifyPassword.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { Icon } from "@shared/@common/ui/icons";
import { joinClassNames } from "@shared/@common/utils";
import { useState } from "react";
import { InputPassword } from "@shared/auth/ui/components";

interface InputVerifyPasswordProps {
  className?: string;
  field: string;
  label: string;
  inputValue: string;
  isValid: boolean;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputVerifyPassword = ({
  className,
  field,
  label,
  inputValue,
  isValid,
  handleChange,
}: InputVerifyPasswordProps) => {
  const [isShown, setIsShown] = useState(false);
  // 언어 설정

  const classNames = joinClassNames([
    styles["input__verify__password"],
    className,
  ]);

  return (
    <>
      <InputPassword
        className={styles["input__verify__password"]}
        field={field}
        label={label}
        inputValue={inputValue}
        isValid={isValid}
        handleChange={handleChange}
      />
    </>
  );
};

export default InputVerifyPassword;
