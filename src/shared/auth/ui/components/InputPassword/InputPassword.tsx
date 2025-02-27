import { Input } from "@shared/@common/ui/components";
import styles from "./InputPassword.module.css";
import { joinClassNames } from "@shared/@common/utils";
import { useState } from "react";
import { Icon } from "@shared/@common/ui/icons";

interface InputPasswordProps {
  className?: string;
  disabled?: boolean;
  field: string;
  label: string;
  inputValue: string;
  isValid: boolean;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputPassword = ({
  field,
  label,
  className,
  disabled = false,
  inputValue,
  isValid,
  handleChange,
}: InputPasswordProps) => {
  const [isShown, setIsShown] = useState(false);

  const classNames = joinClassNames([styles["input__password"], className]);

  return (
    <Input
      label={label}
      field={field}
      inputValue={inputValue}
      isValid={isValid}
      className={classNames}
      handleChange={handleChange}
      disabled={disabled}
    >
      <Input.Main>
        <Input.Bottom>
          <div className={styles["input__password__bottom__wrapper"]}>
            <Input.Field isShown={isShown} />
            <Icon
              iconName={isShown ? "eyeoff" : "eye"}
              onMouseDown={() => {
                setIsShown(!isShown);
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  setIsShown(!isShown);
                }
              }}
              className={joinClassNames([
                styles[`input__password__bottom__icon`],
                inputValue !== ""
                  ? styles[`input__password__bottom__icon--visible`]
                  : styles[`input__password__bottom__icon--invisible`],
              ])}
            />
          </div>
        </Input.Bottom>
      </Input.Main>
    </Input>
  );
};

export default InputPassword;
