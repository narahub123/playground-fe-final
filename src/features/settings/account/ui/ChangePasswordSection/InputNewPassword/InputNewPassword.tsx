import styles from "./InputNewPassword.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { Text } from "@shared/@common/ui/components";
import { joinClassNames } from "@shared/@common/utils";
import { InputPassword } from "@shared/auth/ui/components";

interface InputNewPasswordProps {
  className?: string;
  inputValue: string;
  isValid: boolean;
  errorMessage?: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputNewPassword = ({
  className,
  inputValue,
  isValid,
  errorMessage,
  handleChange,
}: InputNewPasswordProps) => {
  // 언어 설정
  const { label } = useLanguageContent(["settings", "InputNewPassword"]);

  const classNames = joinClassNames([
    styles["input__new__password"],
    className,
  ]);

  return (
    <div className={classNames}>
      <InputPassword
        className={styles["input__new__password__field"]}
        field={"newPw"}
        label={label}
        inputValue={inputValue}
        isValid={isValid}
        handleChange={handleChange}
      />
      {errorMessage && (
        <div className={styles["input__new__password__error"]}>
          <Text status="error" type="expl">
            {errorMessage}
          </Text>
        </div>
      )}
    </div>
  );
};

export default InputNewPassword;
