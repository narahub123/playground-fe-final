import styles from "./InputMain.module.css";
import { ReactNode, useEffect, useRef, useState } from "react";
import { useInputContext } from "../../context";
import { joinClassNames } from "@shared/@common/utils";
import { validateChildren } from "../../utils";
import InputDropdown from "../InputDropdown/InputDropdown";
import InputError from "../InputError/InputError";
import { useAppDispatch } from "@app/store";

/**
 * InputMainProps 인터페이스
 * @property {ReactNode} children - InputMain 내에서 렌더링할 유효한 자식 컴포넌트
 */
interface InputMainProps {
  children: ReactNode;
}

/**
 * InputMain 컴포넌트
 * - Input의 메인 영역을 담당하며, 상태 관리와 이벤트 핸들링을 포함.
 * - 드롭다운, 에러 메시지 등을 포함한 추가 UI를 제공.
 *
 * @param {InputMainProps} props - 컴포넌트 props
 * @returns {JSX.Element} InputMain 컴포넌트
 */
const InputMain = ({ children }: InputMainProps) => {
  const dispatch = useAppDispatch();
  const mainRef = useRef<HTMLLabelElement>(null);
  const [skipMouseDown, setSkipMouseDown] = useState(false);

  // useInputContext 훅에서 필요한 상태 및 함수 가져오기
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

  /**
   * mainRef를 Context로 업데이트.
   */
  useEffect(() => {
    if (!mainRef || !mainRef.current) return;
    setMainRef(mainRef);
  }, [mainRef]);

  /**
   * 유효하지 않은 자식 컴포넌트 필터링 - InputError와 InputDropdown이 InputMain의 자식 요소로 오지 못하게 제한
   */
  const validChildren = validateChildren(children, [InputError, InputDropdown]);

  /**
   * 마우스다운 핸들러
   * - 드롭다운 열림 상태를 토글
   */
  const handleMouseDown = () => {
    if (skipMouseDown) return;
    setIsFocused(true);
    // list가 존재하는 경우
    if (list) {
      // 드롭다운 여닫기
      setIsDropdownOpen(!isDropdownOpen);
    }
  };

  /**
   * 포커스 핸들러
   * - Input에 포커스가 들어왔을 때 호출
   */
  const handleFocus = () => {
    setSkipMouseDown(true);
    setIsFocused(true);
    // list가 존재하는 경우
    if (list) {
      // 드롭다운 열기
      setIsDropdownOpen(true);
    }
    setTimeout(() => setSkipMouseDown(false), 0); // 다음 이벤트 루프에서 플래그 초기화
  };

  /**
   * 블러 핸들러
   * - Input에서 포커스가 나갔을 때 호출
   */
  const handleBlur = () => {
    setIsFocused(false);
    // list가 존재하는 경우
    if (list) {
      // 드롭다운 닫기
      setIsDropdownOpen(false);
    }
  };

  /**
   * 키다운 핸들러
   * - 키보드 입력에 따라 드롭다운 항목 탐색
   *
   * @param {React.KeyboardEvent<HTMLLabelElement>} e - 키보드 이벤트
   */
  const handleKeyDown = (e: React.KeyboardEvent<HTMLLabelElement>) => {
    if (!list) return;
    const curIndex = list?.findIndex((item) => item.value === inputValue) || 0;
    if (e.key === "ArrowDown") {
      const nextIndex = curIndex + 1 > list.length - 1 ? 0 : curIndex + 1;
      dispatch(setInputValue(list[nextIndex].value));
    } else if (e.key === "ArrowUp") {
      const prevIndex = curIndex - 1 < 0 ? list.length - 1 : curIndex - 1;
      dispatch(setInputValue(list[prevIndex].value));
    } else if (e.key === "Enter") {
      setIsDropdownOpen(!isDropdownOpen);
    } else if (e.key === "Escape") {
      setIsDropdownOpen(false);
    }
  };

  /**
   * 컴포넌트의 클래스 이름을 생성
   * - 포커스 상태 및 유효성 여부에 따라 클래스 이름이 변경됩니다.
   * - disabled 상태에서는 추가적으로 비활성화 스타일을 적용합니다.
   *
   * @type {string} - 최종적으로 적용될 클래스 이름 문자열
   */
  const className = joinClassNames([
    styles["input__main"],
    // 포커스인 상태에서 유효성 여부 표기
    isFocused //포커스 상태 확인
      ? isValid // 유효성 여부 확인
        ? styles["input__main--valid"]
        : styles["input__main--invalid"]
      : "",
    disabled ? styles["input__main--disabled"] : "",
  ]);

  return (
    <label
      className={className}
      htmlFor={field}
      tabIndex={list && !disabled ? 0 : -1} // disabled 모드가 아니고 드롭다운 사용 하는 경우에는 탭 이동 가능
      // 마우스다운 이벤트: onFocus와 onBlur와 사용할 때 이벤트 순서로 인한 충돌을 피하기 위해
      onMouseDown={disabled ? undefined : handleMouseDown}
      // 포커스
      onFocus={disabled ? undefined : handleFocus}
      // 블러
      onBlur={disabled ? undefined : handleBlur}
      onKeyDown={disabled || !list ? undefined : handleKeyDown}
      ref={mainRef}
      aria-expanded={list ? (isDropdownOpen ? "true" : "false") : undefined} // 드롭다운 열림 여부
      aria-controls={list ? `${field}-dropdown` : undefined} // 드롭다운 id
      aria-haspopup={list ? "listbox" : undefined} // 화면 읽기 프로그램에 드롭다운 관련 메뉴가 있다는 정보 제공
      aria-activedescendant={
        list && isDropdownOpen ? `${field}-option-${inputValue}` : undefined
      } // 현재 선택된 항목
      aria-describedby={list ? `${field}-description` : undefined} // 추가 설명 제공
    >
      <div className={styles[`input__container`]}>{validChildren}</div>
    </label>
  );
};

export default InputMain;
