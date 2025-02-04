import styles from "./InputUserIdSignup.module.css";
import { useAppDispatch } from "@app/store";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { Input, Text } from "@shared/@common/ui/components";
import { useInput } from "@shared/@common/ui/components/Input";
import { Icon } from "@shared/@common/ui/icons";
import { joinClassNames } from "@shared/@common/utils";
import { checkUserIdDuplicateInSignupAPI } from "@shared/auth/apis";
import { getUserIdInSignup } from "@shared/auth/models/selectors";
import { setUserIdInSignup } from "@shared/auth/models/slices/signupSlice";
import { useSelector } from "react-redux";

interface InputUserIdSignupProps {
  isValid:
    | {
        [key: string]: boolean;
      }
    | boolean;
  setIsValid: React.Dispatch<
    React.SetStateAction<
      | {
          [key: string]: boolean;
        }
      | boolean
    >
  >;
  className?: string;
  disabled?: boolean;
}

const InputUserIdSignup = ({
  isValid,
  setIsValid,
  className,
  disabled = false,
}: InputUserIdSignupProps) => {
  const dispatch = useAppDispatch();

  // 언어 설정
  const { label, error } = useLanguageContent([
    "components",
    "InputUserIdSignup",
  ]);

  const field = "username";

  const inputValue = useSelector(getUserIdInSignup);

  const setInputValue = setUserIdInSignup;

  const {
    errorMessage,
    validateBasicRules,
    clearErrorAndValidation,
    validateDupulicateAsync,
  } = useInput({
    setIsValid,
    field,
    error,
  });

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    dispatch(setInputValue(value));

    // 기본 에러 확인
    if (!validateBasicRules(value)) return;

    if (
      !(await validateDupulicateAsync(checkUserIdDuplicateInSignupAPI, value))
    )
      return;

    // 모든9 유효성 검사를 통과한 경우
    clearErrorAndValidation();
  };

  return (
    <Input
      className={className}
      label={label}
      field={field}
      inputValue={inputValue}
      handleChange={handleChange}
      isValid={typeof isValid === "object" ? isValid[field] ?? false : isValid}
      disabled={disabled}
    >
      <Input.Main>
        <Input.Bottom>
          <div className={styles[`input__bottom__wrapper`]}>
            <Input.Field />
            <Icon
              iconName={isValid ? "valid" : "invalid"}
              className={joinClassNames([
                styles[`input__icon`],
                isValid
                  ? styles[`input__icon--valid`]
                  : styles[`input__icon--invalid`],
              ])}
              bgSize="xs"
            />
          </div>
        </Input.Bottom>
      </Input.Main>
      <Input.Extra>
        <Text type="expl" status="error">
          {errorMessage}
        </Text>
      </Input.Extra>
    </Input>
  );
};

export default InputUserIdSignup;
