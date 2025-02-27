import { useLanguageContent } from "@shared/@common/models/hooks";
import styles from "./InputVerifyPassword.module.css";
import { joinClassNames } from "@shared/@common/utils";
import {
  InputPassword,
  PasswordRecoveryButton,
} from "@shared/auth/ui/components";

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
  // 언어 설정
  const {} = useLanguageContent(["auths", "InputVerifyPassword"]);

  const classNames = joinClassNames([
    styles["input__verify__password"],
    className,
  ]);

  return (
    <div className={classNames}>
      <InputPassword
        className={styles["input__verify__password__input"]}
        field={field}
        label={label}
        inputValue={inputValue}
        isValid={isValid}
        handleChange={handleChange}
      />
      <div className={styles["input__verify__password__link"]}>
        <PasswordRecoveryButton handleClick={() => {}}>
          비밀번호를 잊으셨나요?
        </PasswordRecoveryButton>
      </div>
    </div>
  );
};

export default InputVerifyPassword;
