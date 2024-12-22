import styles from "./Input.module.css";
import { useEffect, useMemo, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { Text, Icon, Dropdown } from "@shared/@common/ui/components";
import { joinClassNames } from "@shared/@common/utils";
import { DropdownItemType, InputErrorType } from "@shared/@common/types";
import { useFocusTrap, useLanguageContent } from "@shared/@common/models/hooks";

interface InputProps {
  field: string;
  fieldName: string | number;
  inputValue: string | number;
  setInputValue: (value: any) => { type: string; payload: any };
  maxLength?: number;
  error?: InputErrorType;
  mode?: "default" | "dropdown" | "search" | "disabled";
  list?: DropdownItemType[];
  moveFocusToDropdown?: boolean; // focus가 드롭다운으로 이동 가능
}

const Input = ({
  field,
  fieldName,
  inputValue = "",
  setInputValue,
  maxLength,
  error = {
    regExp: "",
    defaultErrorMsg: "",
  },
  mode,
  list = [],
  moveFocusToDropdown = false,
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
  const [search, setSearch] = useState(""); // 검색 기능 사용시

  const { iconTitle } = useLanguageContent(["components", "Input"]);

  useFocusTrap({
    containerRef: containerRef,
    finalFocusRef: inputRef,
    isOn: moveFocusToDropdown,
  });

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

  const validCond = isValid || (inputValue === "" && !errorMessage); // 유효성 조건
  const focusCond = isFocused || inputValue !== ""; // 포커스 조건

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!setInputValue) return;
    const typing = e.target.value;

    // 최대 길이 값이 있는 경우 값이 최대 길이 보다 긴 경우 중지
    if (maxLength && typing.length > maxLength) {
      setErrorMessage(`${fieldName}은 최대 ${maxLength} 자까지 가능합니다.`);
      return;
    }

    dispatch(setInputValue(typing));
    if (mode === "search") {
      setSearch(typing as string);
      if (!isOpen) {
        setIsOpen(true);
      }
    }

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

  const selectedValue =
    mode === "dropdown" || mode === "search"
      ? list?.find((item) => item.value === inputValue)?.text || inputValue
      : inputValue;

  const filteredList = list.filter((el) =>
    el.text.includes((search as string).trim())
  );

  return (
    <div
      className={joinClassNames([
        styles[`input`],
        mode === "disabled" ? styles[`input--disabled`] : "",
      ])}
      tabIndex={isFocused || mode === "disabled" ? -1 : 0} // containerRef가 포커스이면 포커스 사라짐
      ref={containerRef}
      onFocus={
        mode !== "disabled"
          ? () => {
              if (!isFocused) {
                console.log("Input이 포커스됨");
                setIsFocused(true);
                if (mode === "dropdown" || mode === "search") setIsOpen(true);
              }
            }
          : undefined
      }
      onBlur={
        mode !== "disabled"
          ? (e) => {
              // 컨테이너 또는 자식 요소에 포커스가 남아 있는 경우 블러 처리하지 않음
              if (containerRef.current?.contains(e.relatedTarget)) return;

              console.log("Input이 블러됨");
              setIsFocused(false);
              if (mode === "dropdown" || mode === "search") setIsOpen(false);
            }
          : undefined
      }
    >
      <div
        className={joinClassNames([
          styles[`input__container`],
          isFocused
            ? validCond
              ? styles[`input__container--valid`]
              : styles[`input__container--invalid`]
            : "",
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
            {maxLength && mode !== "disabled" && (
              <div
                className={joinClassNames([
                  styles[`input__counter`],
                  focusCond
                    ? styles[`input__counter--focused`]
                    : styles[`input__counter--unfocused`],
                ])}
              >
                <Text
                  text={`${(selectedValue as string).length} / ${maxLength}`}
                />
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
                value={selectedValue}
                onChange={(e) => onChange(e)}
                disabled={mode === "dropdown" || mode === "disabled"}
                onKeyDown={
                  !moveFocusToDropdown && mode === "dropdown"
                    ? (e) => {
                        const curIndex = list?.findIndex(
                          (el) => el.value === inputValue
                        );
                        console.log("현재 index", curIndex);

                        if (e.key === "ArrowDown") {
                          const nextIndex =
                            curIndex === undefined
                              ? 0
                              : curIndex === list.length - 1
                              ? 0
                              : curIndex + 1;
                          dispatch(setInputValue(list?.[nextIndex].value));
                        } else if (e.key === "ArrowUp") {
                          const prevIndex =
                            curIndex === undefined
                              ? 0
                              : curIndex === 0
                              ? list.length - 1
                              : curIndex - 1;
                          dispatch(setInputValue(list?.[prevIndex].value));
                        } else if (e.key === "Enter") {
                          setIsOpen(!isOpen);
                        }
                      }
                    : undefined
                }
              />
              {field === "password" ? (
                isShown ? (
                  <Icon
                    iconName="eyeoff"
                    iconTitle={iconTitle.password.eyeoff}
                    onClick={() => {
                      setIsShown(false);
                    }}
                  />
                ) : (
                  <Icon
                    iconName="eye"
                    iconTitle={iconTitle.password.eye}
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
      {(mode === "dropdown" || mode === "search") && (
        <Dropdown
          list={filteredList}
          selection={inputValue as string}
          setSelection={setInputValue}
          setSearch={setSearch}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          isFocusTrapOn={mode === "search" ? true : moveFocusToDropdown}
        />
      )}
    </div>
  );
};

export default Input;
