import styles from "./InputPasswordConfirm.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { Text } from "@shared/@common/ui/components";
import { joinClassNames } from "@shared/@common/utils";
import { InputPassword } from "@shared/auth/ui/components";

interface InputPasswordConfirmProps {
  className?: string;
  inputValue: string;
  isValid: boolean;
  errorMessage?: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputPasswordConfirm = ({
  className,
  inputValue,
  isValid,
  errorMessage,
  handleChange,
}: InputPasswordConfirmProps) => {
  // 언어 설정
  const { label } = useLanguageContent(["settings", "InputPasswordConfirm"]);

  const classNames = joinClassNames([
    styles["input__password__confirm"],
    className,
  ]);

  return (
    <div className={classNames}>
      <InputPassword
        className={styles["input__password__confirm__field"]}
        field={"confirm"}
        label={label}
        inputValue={inputValue}
        isValid={isValid}
        handleChange={handleChange}
      />
      {errorMessage && (
        <div className={styles["input__password__confirm__error"]}>
          <Text status="error" type="expl">
            {errorMessage}
          </Text>
        </div>
      )}
    </div>
  );
};

export default InputPasswordConfirm;
