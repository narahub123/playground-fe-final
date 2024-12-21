import { useEffect, useMemo, useRef, useState } from "react";
import styles from "./Input.module.css";
import { joinClassNames } from "@shared/@common/utils";
import { Text, Icon, Dropdown } from "@shared/@common/ui/components";
import { useDispatch } from "react-redux";
import { DropdownItemType, InputErrorType } from "@shared/@common/types";
import { useFocusTrap } from "@shared/@common/models/hooks";

interface InputProps {
  field: string;
  fieldName: string | number;
  value: string | number;
  setValue: (value: any) => { type: string; payload: any };
  maxLength?: number;
  error?: InputErrorType;
  mode?: "default" | "dropdown";
  list?: DropdownItemType[];
}

const Input = ({
  field,
  fieldName,
  value = "",
  setValue,
  maxLength,
  error = {
    regExp: "",
    defaultErrorMsg: "",
  },
  mode,
  list,
}: InputProps) => {
  const dispatch = useDispatch();
  const { regExp, defaultErrorMsg, errorList } = error;
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [isValid, setIsValid] = useState(true); // 처음에는 true 불러오는 경우에도 true만 저장되기 때문에 true
  const [isFocused, setIsFocused] = useState(false);
  const [isShown, setIsShown] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  // containerRef가 포커스가 되면 inputRef로 포커스 이동
  useEffect(() => {
    const container = containerRef.current;
    const input = inputRef.current;
    if (!container || !input) return;

    if (document.activeElement === container) {
      input.focus();
    }
  }, [document.activeElement]);

  // 유효성 검사 정규 표현식
  const defaultErrorRegex = useMemo(() => new RegExp(regExp), [regExp]);
  const errorRegexList = useMemo(
    () => (errorList || []).map((err) => new RegExp(err.regExp)),
    [errorList]
  );

  const {} = useFocusTrap({ containerRef, finalFocusRef: inputRef });

  const validCond = isValid || (value === "" && !errorMessage); // 유효성 조건
  const focusCond = isFocused || value !== ""; // 포커스 조건

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!setValue) return;
    const typing = e.target.value;

    // 최대 길이 값이 있는 경우 값이 최대 길이 보다 긴 경우 중지
    if (maxLength && typing.length > maxLength) {
      setErrorMessage(`${fieldName}은 최대 ${maxLength} 자까지 가능합니다.`);
      return;
    }

    dispatch(setValue(typing));

    if (typing === "" && error.empty) {
      setErrorMessage(error.empty);
      setIsValid(false);
      return;
    }

    // 유효성 검사
    for (const regex of errorRegexList) {
      if (!error.errorList) return;
      if (!regex.test(typing)) {
        setErrorMessage(
          error.errorList.find((err) => err.regExp === regex.source)
            ?.errorMsg || ""
        );
        setIsValid(false);
        return;
      }
    }

    if (!defaultErrorRegex) {
      setErrorMessage(defaultErrorMsg);
      setIsValid(false);
    } else {
      setErrorMessage("");
      setIsValid(true);
    }
  };

  return (
    <div
      className={joinClassNames([styles[`input`]])}
      tabIndex={isFocused ? -1 : 0} // containerRef가 포커스이면 포커스 사라짐
      ref={containerRef}
      onFocus={() => {
        setIsFocused(true);
        if (mode === "dropdown") setIsOpen(true);
      }}
      onBlur={() => {
        setIsFocused(false);
        if (mode === "dropdown") setIsOpen(false);
      }}
    >
      <div
        className={joinClassNames([
          styles[`input__container`],
          validCond
            ? styles[`input__container--valid`]
            : styles[`input__container--invalid`],
        ])}
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
              <Text
                text={fieldName}
                status={!focusCond || validCond ? "default" : "error"}
              />
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
                value={
                  mode === "dropdown"
                    ? list?.find((item) => item.value === value)?.text
                    : value
                }
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
        {mode === "dropdown" && (
          <Icon
            iconName="up"
            subClassName={joinClassNames([
              styles[`input__dropdown`],
              isFocused
                ? styles[`input__dropdown--open`]
                : styles[`input__dropdown--close`],
            ])}
          />
        )}
      </div>
      {error && (
        <div className={styles[`input__error`]}>
          <Text text={errorMessage} type="expl" status="error" />
        </div>
      )}
      {list && (
        <Dropdown
          list={list}
          selection={value as string}
          setSelection={setValue}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      )}
    </div>
  );
};

export default Input;
