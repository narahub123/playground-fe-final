import styles from "./InputMain.module.css";
import { ReactNode } from "react";
import { useInputContext } from "../../context";
import { joinClassNames } from "@shared/@common/utils";
import { validateChildren } from "../../utils";
import InputDropdown from "../InputDropdown/InputDropdown";
import InputError from "../InputError/InputError";

interface InputMainProps {
  children: ReactNode; //type 에러 : 유효하지 않은 타입 제거
}

const InputMain = ({ children }: InputMainProps) => {
  // useInputContext 훅에서 상태 가져오기
  const {
    isFocused, // 현재 포커스 상태
    setIsFocused, // 포커스 상태 업데이트
    isValid, // 현재 유효성 여부
    field, // 필드 이름
    list, // 드롭다운 목록
    isDropdownOpen, // 현재 드롭다운 여닫기 상태
    setIsDropdownOpen, // 드롭다운 여닫기 업데이트
  } = useInputContext();

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
      ])}
      htmlFor={field}
      tabIndex={list ? 0 : -1} // 실제 포커스는 input에 생기기 때문에 나중에 수정 예정
      // 마우스다운 이벤트: onFocus와 onBlur와 사용할 때 이벤트 순서로 인한 충돌을 피하기 위해
      onMouseDown={() => {
        console.log("클릭");
        setIsFocused(true);
        // list가 존재하는 경우
        if (list) {
          // 드롭다운 여닫기
          setIsDropdownOpen(!isDropdownOpen);
        }
      }}
      // 포커스
      onFocus={() => {
        console.log("포커스");
        setIsFocused(true);
        // list가 존재하는 경우
        if (list) {
          // 드롭다운 열기
          setIsDropdownOpen(true);
        }
      }}
      // 블러
      onBlur={() => {
        console.log("블러");
        setIsFocused(false);
        // list가 존재하는 경우
        if (list) {
          // 드롭다운 닫기
          setIsDropdownOpen(false);
        }
      }}
    >
      <div className={styles[`input__container`]}>{validChildren}</div>
    </label>
  );
};

export default InputMain;
