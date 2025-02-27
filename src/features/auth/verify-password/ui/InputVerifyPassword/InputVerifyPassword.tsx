import { Button, Input } from "@shared/@common/ui/components";
import styles from "./InputVerifyPassword.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { Icon } from "@shared/@common/ui/icons";
import { joinClassNames } from "@shared/@common/utils";
import { useState } from "react";

interface InputVerifyPasswordProps {
  className?: string;
  inputValue: string;
  isValid: boolean;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputVerifyPassword = ({
  className,
  inputValue,
  isValid,
  handleChange,
}: InputVerifyPasswordProps) => {
  const [isShown, setIsShown] = useState(false);
  // 언어 설정
  const { label } = useLanguageContent(["auths", "InputVerifyPassword"]);

  const field = "password";

  const classNames = joinClassNames([
    styles["input__verify__password"],
    className,
  ]);

  return (
    <Input
      label={label}
      field={field}
      inputValue={inputValue}
      isValid={isValid}
      className={classNames}
      handleChange={handleChange}
    >
      <Input.Main>
        <Input.Bottom>
          <div className={styles["input__bottom__wrapper"]}>
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
                styles[`input__bottom__icon`],
                inputValue !== ""
                  ? styles[`input__bottom__icon--visible`]
                  : styles[`input__bottom__icon--invisible`],
              ])}
            />
          </div>
        </Input.Bottom>
      </Input.Main>
      <Input.Extra>
        <Button
          onClick={() => {}}
          variant="plain"
          fontColor="colorTheme"
          fontSize="xs"
        >
          비밀번호를 잊으셨나요?
        </Button>
      </Input.Extra>
    </Input>
  );
};

export default InputVerifyPassword;
