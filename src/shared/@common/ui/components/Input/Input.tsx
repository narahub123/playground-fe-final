import { useEffect, useRef, useState } from "react";
import styles from "./Input.module.css";
import { joinClassNames } from "@shared/@common/utils";
import { Text, Icon } from "@shared/@common/ui/components";

const Input = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

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
  const focusCond = isFocused; // 포커스 조건

  return (
    <div
      className={joinClassNames([styles[`input`]])}
      tabIndex={isFocused ? -1 : 0} // containerRef가 포커스이면 포커스 사라짐
      ref={containerRef}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
    >
      <div
        className={joinClassNames([
          styles[`input__container`],
          isFocused
            ? validCond
              ? styles[`input__container--valid`]
              : styles[`input__container--invalid`]
            : undefined,
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
              <Text text="필드" />
            </div>
            <div
              className={joinClassNames([
                styles[`input__counter`],
                focusCond
                  ? styles[`input__counter--focused`]
                  : styles[`input__counter--unfocused`],
              ])}
            >
              <Text text="글자수" />
            </div>
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
                type="text"
                className={joinClassNames([styles[`input__field`]])}
                ref={inputRef}
              />
              <Icon iconName="eye" />
            </div>
          </div>
        </div>
      </div>
      {/* <div
        className={joinClassNames([
          styles[`input__wrapper`],
          isFocused // 포커스가 걸린 상태
            ? validCond // 유효성 검사
              ? styles[`input__wrapper--valid`] // 유효한 경우
              : styles[`input__wrapper--invalid`] // 유효하지 않은 경우
            : undefined,
        ])}
      >
        <div
          className={joinClassNames([
            styles[`input__header`],
            focusCond
              ? styles[`input__header--focused`]
              : styles[`input__header--unfocused`],
          ])}
        >
          <span
            className={joinClassNames([
              styles[`input__label`],
              focusCond
                ? styles[`input__label--focused`]
                : styles[`input__label--unfocused`],
            ])}
          >
            필드 이름
          </span>
          <span
            className={joinClassNames([
              styles[`input__counter`],
              focusCond
                ? styles[`input__counter--focused`]
                : styles[`input__counter--unfocused`],
            ])}
          >
            글자수
          </span>
        </div>
        <div
          className={joinClassNames([
            styles[`input__body`],
            focusCond
              ? styles[`input__body--focused`]
              : styles[`input__body--unfocused`],
          ])}
        >
          <input
            type="text"
            className={joinClassNames([
              styles[`input__field`],
              focusCond
                ? styles[`input__field--focused`]
                : styles[`input__field--unfocused`],
            ])}
            ref={inputRef}
          />
          <Icon
            iconName="eye"
            subClassName={joinClassNames([
              styles[`input__icon--right`],
              focusCond
                ? styles[`input__icon--right--focused`]
                : styles[`input__icon--right--unfocused`],
            ])}
          />
        </div>
      </div> */}
      <div className={styles[`input__error`]}>error</div>
    </div>
  );
};

export default Input;
