import styles from "./InputPasswordSignup.module.css";
import { useAppDispatch } from "@app/store";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { Input, Text } from "@shared/@common/ui/components";
import { useInput } from "@shared/@common/ui/components/Input";
import { Icon } from "@shared/@common/ui/icons";
import { joinClassNames } from "@shared/@common/utils";
import { getPasswordInSignup } from "@shared/auth/models/selectors";
import { setPasswordInSignup } from "@shared/auth/models/slices/signupSlice";
import { useState } from "react";
import { useSelector } from "react-redux";

interface InputPasswordSignupProps {
  isValid:
    | {
        [key: string]: boolean; // 각 필드에 대한 유효성 상태를 업데이트하는 함수입니다. 필드 이름을 키로 하고, boolean 값을 업데이트합니다.
      }
    | boolean; // 전체 유효성 상태를 업데이트하는 함수입니다. 모든 입력 필드에 대한 유효성 상태를 한 번에 업데이트할 수 있습니다.;
  setIsValid: React.Dispatch<
    React.SetStateAction<
      | {
          [key: string]: boolean; // 각 필드에 대한 유효성 상태를 업데이트하는 함수입니다. 필드 이름을 키로 하고, boolean 값을 업데이트합니다.
        }
      | boolean // 전체 유효성 상태를 업데이트하는 함수입니다. 모든 입력 필드에 대한 유효성 상태를 한 번에 업데이트할 수 있습니다.
    >
  >; // `isValid`의 값을 업데이트하는 함수입니다. 객체일 경우, 각 필드의 유효성 상태를 개별적으로 업데이트하거나, boolean 값일 경우 전체 유효성 상태를 한 번에 업데이트할 수 있습니다.
  className?: string;
  disabled?: boolean;
}

const InputPasswordSignup = ({
  isValid,
  setIsValid,
  className,
  disabled = false,
}: InputPasswordSignupProps) => {
  const dispatch = useAppDispatch();

  const [isShown, setIsShown] = useState(false);

  // 언어 설정
  const { label, error } = useLanguageContent([
    "components",
    "InputPasswordSignup",
  ]);

  const field = "password";

  const inputValue = useSelector(getPasswordInSignup);

  const setInputValue = setPasswordInSignup;

  const { errorMessage, validateBasicRules, clearErrorAndValidation } =
    useInput({
      setIsValid,
      field,
      error,
    });

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    dispatch(setInputValue(value));

    // 기본 에러 확인
    if (!validateBasicRules(value)) return;

    // 모든 유효성 검사를 통과한 경우
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
            <Input.Field isShown={isShown} />
            <Icon
              iconName={isShown ? "eyeoff" : "eye"}
              onMouseDown={(e) => {
                e.preventDefault();
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
        <Text type="expl" status="error">
          {errorMessage}
        </Text>
      </Input.Extra>
    </Input>
  );
};

export default InputPasswordSignup;
