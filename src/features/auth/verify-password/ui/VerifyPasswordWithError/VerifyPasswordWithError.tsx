import styles from "./VerifyPasswordWithError.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { Text } from "@shared/@common/ui/components";
import { joinClassNames } from "@shared/@common/utils";
import {
  InputPassword,
  PasswordRecoveryButton,
} from "@shared/auth/ui/components";

interface VerifyPasswordWithErrorProps {
  className?: string;
  inputValue: string;
  isValid: boolean;
  errorMessage?: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const VerifyPasswordWithError = ({
  className,
  inputValue,
  isValid,
  errorMessage,
  handleChange,
}: VerifyPasswordWithErrorProps) => {
  // 언어 설정
  const { label, recovery } = useLanguageContent([
    "auths",
    "VerifyPasswordWithError",
  ]);

  const classNames = joinClassNames([
    styles["verify__password__with__error"],
    className,
  ]);

  return (
    <div className={classNames}>
      <InputPassword
        className={styles["verify__password__field"]}
        field={"password"}
        label={label}
        inputValue={inputValue}
        isValid={isValid}
        handleChange={handleChange}
      />
      {errorMessage && (
        <div className={styles["verify__password__error"]}>
          <Text status="error" type="expl">
            {errorMessage}
          </Text>
        </div>
      )}
      <div className={styles["verify__password__recovery"]}>
        <PasswordRecoveryButton handleClick={() => {}}>
          {recovery}
        </PasswordRecoveryButton>
      </div>
    </div>
  );
};

export default VerifyPasswordWithError;
