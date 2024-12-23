import { joinClassNames } from "@shared/@common/utils";
import styles from "./Input.module.css";
import { forwardRef, useEffect, useMemo, useRef, useState } from "react";
import Text from "../Text/Text";
import Icon from "../Icon/Icon";
import { DropdownItemType, InputErrorType } from "@shared/@common/types";
import { useAppDispatch } from "@app/store";
import { useLanguageContent } from "@shared/@common/models/hooks";

interface InputProps {
  field: string;
  fieldName: string;
  inputValue: string;
  setInputValue: (value: any) => { type: string; payload: any };
  maxLength?: number;
  error?: InputErrorType;
  disabled?: boolean;
  mode?: "default" | "dropdown"; // 모드
  list?: DropdownItemType[];
  isOpen?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      field,
      fieldName,
      maxLength,
      inputValue,
      setInputValue,
      error = {
        regExp: "",
        defaultErrorMsg: "",
      },
      disabled = false,
      mode = "default",
      list,
      isOpen,
    },
    ref
  ) => {
    const dispatch = useAppDispatch();
    const containerRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const { regExp, defaultErrorMsg, errorList, empty } = error;
    const [isFocused, setIsFocused] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [isValid, setIsValid] = useState(true);
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
      if (!containerRef.current && !inputRef.current) return;

      if (document.activeElement === containerRef.current) {
        inputRef.current?.focus();
      }
    }, [isFocused]);

    const { iconTitle } = useLanguageContent(["components", "Input"]);

    // 유효성 검사 정규 표현식
    const defaultErrorRegex = useMemo(() => new RegExp(regExp), [regExp]);
    const errorRegexList = useMemo(
      () => (errorList || []).map((err) => new RegExp(err.regExp)),
      [errorList]
    );

    const focusCond = isFocused || inputValue !== "";
    const validCond = isValid || inputValue === "";

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;

      // 최대 길이보다 긴 경우
      if (maxLength && value.length > maxLength) {
        setErrorMessage(`${fieldName}은 최대 ${maxLength}자까지 가능합니다.`);
        return;
      }

      dispatch(setInputValue(value));

      // 필드가 빈문자열이 된 경우
      if (value === "" && empty) {
        setErrorMessage(empty);
        setIsValid(false);
        return;
      }

      // 유효성 검사
      for (const regex of errorRegexList) {
        if (!errorList) return;
        if (!regex.test(value)) {
          setErrorMessage(
            errorList.find((err) => err.regExp === regex.source)?.errorMsg || ""
          );
          setIsValid(false);
          return;
        }
      }

      // 유효성 검사
      if (!defaultErrorRegex.test(value)) {
        setErrorMessage(defaultErrorMsg);
        setIsValid(false);
      } else {
        setErrorMessage("");
        setIsValid(true);
      }
    };

    return (
      <div className={styles[`input`]}>
        <div
          className={joinClassNames([
            styles[`input__wrapper`],
            focusCond && !disabled && mode !== "dropdown"
              ? validCond
                ? styles[`input__wrapper--valid`]
                : styles[`input__wrapper--invalid`]
              : "",
          ])}
          onFocus={() => {
            setIsFocused(true);
          }}
          onBlur={() => {
            setIsFocused(false);
          }}
          tabIndex={isFocused || mode === "dropdown" ? -1 : 0}
          ref={containerRef}
        >
          <div className={joinClassNames([styles[`input__container`]])}>
            <div
              className={joinClassNames([
                styles[`input__header`],
                focusCond
                  ? styles[`input__header--focused`]
                  : styles[`input__header--unfocused`],
              ])}
            >
              <Text
                text={fieldName}
                subClassName={joinClassNames([
                  styles[`input__label`],
                  focusCond
                    ? styles[`input__label--focused`]
                    : styles[`input__label--unfocused`],
                  disabled ? styles[`input__label--disabled`] : "",
                ])}
              />
              {maxLength && !disabled && (
                <Text
                  text={`${inputValue.length} / ${maxLength}`}
                  subClassName={joinClassNames([
                    styles[`input__counter`],
                    focusCond
                      ? styles[`input__counter--focused`]
                      : styles[`input__counter--unfocused`],
                  ])}
                />
              )}
            </div>
            <div
              className={joinClassNames([
                styles[`input__body`],
                focusCond
                  ? styles[`input__body--focused`]
                  : styles[`input__body--unfocused`],
                disabled ? styles[`input__body--disabled`] : "",
              ])}
            >
              {mode === "dropdown" ? (
                <p>
                  {list?.find((item) => item.value === inputValue)?.text ||
                    inputValue}
                </p>
              ) : (
                <input
                  type={
                    field === "password" && !showPassword ? "password" : "text"
                  }
                  className={joinClassNames([
                    styles[`input__field`],
                    disabled ? styles[`input__field--disabled`] : "",
                  ])}
                  value={inputValue}
                  onChange={(e) => onChange(e)}
                  ref={ref || inputRef} // 외부에서 ref가 전달된 경우 ref 전달 안된 경우 inputRef 적용
                  disabled={disabled}
                />
              )}

              {field === "password" ? (
                showPassword ? (
                  <Icon
                    iconName="eyeoff"
                    iconTitle={iconTitle.password.eyeoff}
                    onClick={
                      disabled ? undefined : () => setShowPassword(false)
                    }
                  />
                ) : (
                  <Icon
                    iconName="eye"
                    iconTitle={iconTitle.password.eye}
                    onClick={disabled ? undefined : () => setShowPassword(true)}
                  />
                )
              ) : undefined}
            </div>
          </div>
          {/* 드롭다운 아이콘 */}
          {mode === "dropdown" ? (
            <Icon
              iconName="up"
              subClassName={joinClassNames([
                styles[`input__icon`],
                isOpen
                  ? styles[`input__icon--open`]
                  : styles[`input__icon--close`],
                disabled ? styles[`input__label--disabled`] : "",
              ])}
            />
          ) : undefined}
        </div>
        {error && (
          <div className={styles[`input__error`]}>
            <Text text={errorMessage} type="expl" status="error" />
          </div>
        )}
      </div>
    );
  }
);

export default Input;
