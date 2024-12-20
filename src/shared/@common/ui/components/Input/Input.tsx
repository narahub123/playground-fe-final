import { useEffect, useRef, useState } from "react";
import styles from "./Input.module.css";
import { joinClassNames } from "@shared/@common/utils";
import { Text, Icon } from "@shared/@common/ui/components";
import { useDispatch } from "react-redux";

interface InputProps {
  field: string;
  fieldName: string | number;
  value: string | number;
  setValue: (value: any) => { type: string; payload: any };
  maxLength?: number;
  regExp?: RegExp;
}

const Input = ({
  field,
  fieldName,
  value = "",
  setValue,
  maxLength,
  regExp,
}: InputProps) => {
  const dispatch = useDispatch();
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [isValid, setIsValid] = useState(regExp?.test(value as string));
  const [isFocused, setIsFocused] = useState(false);
  const [isShown, setIsShown] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // containerRef가 포커스가 되면 inputRef로 포커스 이동
  useEffect(() => {
    const container = containerRef.current;
    const input = inputRef.current;
    if (!container || !input) return;

    if (document.activeElement === container) {
      input.focus();
    }
  }, [document.activeElement]);

  const validCond = isValid || value === ""; // 유효성 조건
  const focusCond = isFocused || value !== ""; // 포커스 조건

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!setValue) return;
    const value = e.target.value;

    // 최대 길이 값이 있는 경우 값이 최대 길이 보다 긴 경우 중지
    if (maxLength && value.length > maxLength) {
      setErrorMessage(`${fieldName}은 최대 ${maxLength} 자까지 가능합니다.`);
      return;
    }

    dispatch(setValue(value));

    // 유효성 검사
    if (typeof value === "string" && regExp) {
      setIsValid(regExp.test(value));
    }
  };

  return (
    <div className={joinClassNames([styles[`input`]])}>
      <div
        className={joinClassNames([
          styles[`input__container`],
          isFocused
            ? validCond
              ? styles[`input__container--valid`]
              : styles[`input__container--invalid`]
            : undefined,
        ])}
        tabIndex={isFocused ? -1 : 0} // containerRef가 포커스이면 포커스 사라짐
        ref={containerRef}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      >
        <div className={joinClassNames([styles[`input__wrapper`]])}>
          <div className={joinClassNames([styles[`input__header`]])}>
            <div
              className={joinClassNames([
                styles[`input__label`],
                focusCond
                  ? styles[`input__label--focused`]
                  : styles[`input__label--unfocused`],
              ])}
            >
              <Text text={fieldName} />
            </div>
            {maxLength && (
              <div
                className={joinClassNames([
                  styles[`input__counter`],
                  focusCond
                    ? styles[`input__counter--focused`]
                    : styles[`input__counter--unfocused`],
                ])}
              >
                <Text text={`${(value as string).length} / ${maxLength}`} />
              </div>
            )}
          </div>
          <div
            className={joinClassNames([
              styles[`input__body`],
              focusCond
                ? styles[`input__body--focused`]
                : styles[`input__body--unfocused`],
            ])}
          >
            <div className={joinClassNames([styles[`input__body__container`]])}>
              <input
                type={field === "password" && !isShown ? "password" : "text"}
                className={joinClassNames([styles[`input__field`]])}
                ref={inputRef}
                value={value}
                onChange={(e) => onChange(e)}
              />
              {field === "password" ? (
                isShown ? (
                  <Icon
                    iconName="eyeoff"
                    iconTitle="비밀번호 숨기기"
                    onClick={() => {
                      setIsShown(false);
                    }}
                  />
                ) : (
                  <Icon
                    iconName="eye"
                    iconTitle="비밀번호 보이기"
                    onClick={() => {
                      setIsShown(true);
                    }}
                  />
                )
              ) : undefined}
            </div>
          </div>
        </div>
      </div>
      <div className={styles[`input__error`]}>
        <Text text={errorMessage} type="expl" />
      </div>
    </div>
  );
};

export default Input;
