import styles from "./InputMain.module.css";
import { ReactNode, useCallback, useEffect, useRef, useState } from "react";
import { useInputContext } from "@shared/@common/ui/components/Input/context";
import { joinClassNames } from "@shared/@common/utils";
import { useAppDispatch } from "@app/store";
import InputDropdown from "../InputDropdown/InputDropdown";
import InputError from "../InputError/InputError";
import { useValidateChildren } from "@shared/@common/models/hooks";

/**
 * InputMainProps 인터페이스
 * @property {ReactNode} children - InputMain 내에서 렌더링할 유효한 자식 컴포넌트
 */
interface InputMainProps {
  children: ReactNode;
  /**
   * 추가적인 클래스명을 지정할 수 있는 프로퍼티. 기존 className에 덧붙여짐
   * @type {string}
   */
  className?: string;
}

/**
 * InputMain 컴포넌트
 * - Input의 메인 영역을 담당하며, 상태 관리와 이벤트 핸들링을 포함.
 * - 드롭다운, 에러 메시지 등을 포함한 추가 UI를 제공.
 *
 * @param {InputMainProps} props - 컴포넌트 props
 * @returns {JSX.Element} InputMain 컴포넌트
 */
const InputMain = ({ children, className }: InputMainProps) => {
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
    scroll, // .scroll을 가진 부모 요소 없다면 window
    setIsValid, // 유효성 업데이트
  } = useInputContext();

  /**
   * `isVisible` 상태 변수
   * - 요소가 화면에 보이는지 여부를 추적합니다.
   */
  const [isVisible, setIsVisible] = useState(false);

  /**
   * mainRef를 Context로 업데이트.
   */
  useEffect(() => {
    if (!mainRef || !mainRef.current) return;
    setMainRef(mainRef);
  }, [mainRef]);

  /**
   * Input이 스크롤 요소 안에서 보이는지 여부를 확인하고,
   * 드롭다운 열기/닫기 상태를 제어하는 효과
   */
  useEffect(() => {
    // mainRef가 설정되지 않았거나, scroll이 HTMLElement가 아니면 종료
    if (!mainRef.current || !(scroll instanceof HTMLElement)) return;

    // IntersectionObserver를 설정하여 요소의 가시성 여부를 감지
    const observer = new IntersectionObserver(
      ([entry]) => {
        const isVisible = entry.isIntersecting; // 요소가 뷰포트에 보이는지 여부

        setIsVisible(isVisible); // 가시성 상태 업데이트

        // 목록이 있는 경우(드롭다운 설정이 되어 있는 경우)에만 드롭다운을 여닫음
        if (list) {
          // 요소가 보이지 않으면 드롭다운을 닫음
          if (!isVisible) {
            setIsDropdownOpen(false);
          }
          // 요소가 보이고 포커스가 맞으면 드롭다운을 열음
          else if (isVisible && isFocused) {
            setIsDropdownOpen(true);
          }
        }
      },
      {
        root: scroll, // 스크롤 컨테이너
        rootMargin: "0px", // root margin 설정
        threshold: 0, // 요소가 뷰포트에 들어왔을 때 바로 트리거
      }
    );

    // mainRef 요소를 관찰하기 시작
    observer.observe(mainRef.current);

    // cleanup 함수: 컴포넌트가 언마운트될 때 observer를 disconnect
    return () => {
      observer.disconnect();
    };
  }, [scroll, isFocused]); // scroll과 isFocused 변경 시 효과 실행

  /**
   * 스크롤 이동 핸들러
   * - input 클릭 시 해당 요소가 뷰포트 내에서 부드럽게 중앙으로 스크롤되도록 처리
   */
  const handleScroll = useCallback(() => {
    // mainRef가 존재하지 않으면 종료
    if (!mainRef.current) return;

    // 스크롤을 부드럽게 중앙으로 이동
    mainRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  }, []); // 빈 배열로 최적화하여 최초 한번만 생성

  /**
   * input 클릭 시 스크롤 이동 이벤트 핸들러 등록
   * - isVisible이 true일 때만 click 이벤트를 추가하여 스크롤 이동 실행
   */
  useEffect(() => {
    // mainRef나 isVisible이 없으면 이벤트를 추가하지 않음
    if (!mainRef.current || !isVisible) return;

    const main = mainRef.current;

    // 클릭 시 handleScroll 함수 실행
    main.addEventListener("click", handleScroll);

    // cleanup 함수: 클릭 이벤트 리스너 제거
    return () => {
      main.removeEventListener("click", handleScroll);
    };
  }, [isVisible, handleScroll]); // isVisible과 handleScroll 변경 시 효과 실행

  /**
   * 현재 컴포넌트에서 자식 컴포넌트로 유효하지 않는 컴포넌트 배열
   */
  const invalidComponents = [InputError, InputDropdown];

  /**
   * 유효하지 않은 자식 컴포넌트 필터링 - InputError와 InputDropdown이 InputMain의 자식 요소로 오지 못하게 제한
   */
  const filteredChildren = useValidateChildren({ children, invalidComponents });

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
      e.preventDefault(); // 스크롤 이동 방지를 위함
      const nextIndex = curIndex + 1 > list.length - 1 ? 0 : curIndex + 1;
      dispatch(setInputValue(list[nextIndex].value));
      // 유효성 업데이트 : 드롭다운의 값을 적용하면 무조건 true
      setIsValid &&
        setIsValid((prev) => {
          // typeof null도 "object"로 나오기 때문에, null을 체크하는 조건을 추가하여 예기치 않은 상황을 방지
          if (typeof prev === "object" && prev !== null) {
            // 기존 값과 동일한지 확인 후 값이 다르면 업데이트
            if (prev[field] !== true) {
              return { ...prev, [field]: true };
            }
            return prev; // 값이 같으면 기존 객체 그대로 반환
          }
          // 객체가 아니면 true로 설정
          return true;
        });
    } else if (e.key === "ArrowUp") {
      e.preventDefault(); // 스크롤 이동 방지를 위함
      const prevIndex = curIndex - 1 < 0 ? list.length - 1 : curIndex - 1;
      dispatch(setInputValue(list[prevIndex].value));
      // 유효성 업데이트 : 드롭다운의 값을 적용하면 무조건 true
      setIsValid &&
        setIsValid((prev) => {
          // typeof null도 "object"로 나오기 때문에, null을 체크하는 조건을 추가하여 예기치 않은 상황을 방지
          if (typeof prev === "object" && prev !== null) {
            // 기존 값과 동일한지 확인 후 값이 다르면 업데이트
            if (prev[field] !== true) {
              return { ...prev, [field]: true };
            }
            return prev; // 값이 같으면 기존 객체 그대로 반환
          }
          // 객체가 아니면 true로 설정
          return true;
        });
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
  const classNames = joinClassNames([
    styles["input__main"],
    // 포커스인 상태에서 유효성 여부 표기
    isFocused //포커스 상태 확인
      ? isValid || inputValue === "" // 유효성 여부 확인
        ? styles["input__main--valid"]
        : styles["input__main--invalid"]
      : "",
    disabled ? styles["input__main--disabled"] : "",
    className,
  ]);

  return (
    <label
      className={classNames}
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
      <div className={styles[`input__container`]}>{filteredChildren}</div>
    </label>
  );
};

export default InputMain;
