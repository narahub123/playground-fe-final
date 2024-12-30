import styles from "./InputMain.module.css";
import { ReactNode, useEffect, useRef, useState } from "react";
import { useInputContext } from "../../context";
import { joinClassNames } from "@shared/@common/utils";
import { validateChildren } from "../../utils";
import InputDropdown from "../InputDropdown/InputDropdown";
import InputError from "../InputError/InputError";
import { useAppDispatch } from "@app/store";

interface InputMainProps {
  children: ReactNode; //type 에러 : 유효하지 않은 타입 제거
}

const InputMain = ({ children }: InputMainProps) => {
  const dispatch = useAppDispatch();
  const mainRef = useRef<HTMLLabelElement>(null);
  const [skipMouseDown, setSkipMouseDown] = useState(false);

  // useInputContext 훅에서 상태 가져오기
  const {
    isFocused, // 현재 포커스 상태
    setIsFocused, // 포커스 상태 업데이트
    isValid, // 현재 유효성 여부
    field, // 필드 이름
    list, // 드롭다운 목록
    isDropdownOpen, // 현재 드롭다운 여닫기 상태
    setIsDropdownOpen, // 드롭다운 여닫기 업데이트
    setMainRef, // mainRef 업데이트
    inputValue, // input 값
    setInputValue, // inputValue 값 업데이트
    disabled,
  } = useInputContext();

  // mainRef 업데이트
  useEffect(() => {
    if (!mainRef || !mainRef.current) return;
    setMainRef(mainRef);
  }, [mainRef]);

  // InputError와 InputDropdown이 InputMain의 자식 요소로 오지 못하게 제한
  const validChildren = validateChildren(children, [InputError, InputDropdown]);

  return (
    <label
      className={joinClassNames([
        styles["input__main"],
        // 포커스인 상태에서 유효성 여부 표기
        isFocused //포커스 상태 확인
          ? isValid // 유효성 여부 확인
            ? styles["input__main--valid"]
            : styles["input__main--invalid"]
          : "",
        disabled ? styles["input__main--disabled"] : "",
      ])}
      htmlFor={field}
      tabIndex={list && !disabled ? 0 : -1} // disabled 모드가 아니고 드롭다운 사용 하는 경우에는 탭 이동 가능
      // 마우스다운 이벤트: onFocus와 onBlur와 사용할 때 이벤트 순서로 인한 충돌을 피하기 위해
      onMouseDown={
        disabled
          ? undefined
          : () => {
              if (skipMouseDown) return;
              console.log("클릭");
              setIsFocused(true);
              // list가 존재하는 경우
              if (list) {
                // 드롭다운 여닫기
                setIsDropdownOpen(!isDropdownOpen);
              }
            }
      }
      // 포커스
      onFocus={
        disabled
          ? undefined
          : () => {
              console.log("포커스");
              setSkipMouseDown(true);
              setIsFocused(true);
              // list가 존재하는 경우
              if (list) {
                // 드롭다운 열기
                setIsDropdownOpen(true);
              }
              setTimeout(() => setSkipMouseDown(false), 0); // 다음 이벤트 루프에서 플래그 초기화
            }
      }
      // 블러
      onBlur={
        disabled
          ? undefined
          : () => {
              console.log("블러");
              setIsFocused(false);
              // list가 존재하는 경우
              if (list) {
                // 드롭다운 닫기
                setIsDropdownOpen(false);
              }
            }
      }
      onKeyDown={
        disabled
          ? undefined
          : list
          ? (e) => {
              const curIndex =
                list?.findIndex((item) => item.value === inputValue) || 0;
              if (e.key === "ArrowDown") {
                const nextIndex =
                  curIndex + 1 > list.length - 1 ? 0 : curIndex + 1;
                dispatch(setInputValue(list[nextIndex].value));
              } else if (e.key === "ArrowUp") {
                const prevIndex =
                  curIndex - 1 < 0 ? list.length - 1 : curIndex - 1;
                dispatch(setInputValue(list[prevIndex].value));
              } else if (e.key === "Enter") {
                setIsDropdownOpen(!isDropdownOpen);
              }
            }
          : undefined
      }
      ref={mainRef}
    >
      <div className={styles[`input__container`]}>{validChildren}</div>
    </label>
  );
};

export default InputMain;
