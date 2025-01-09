import styles from "./InputDropdown.module.css";
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { joinClassNames } from "@shared/@common/utils";
import { useInputContext } from "@shared/@common/ui/components/Input/context";
import { Portal } from "@shared/@common/ui/components";
import { useAppDispatch } from "@app/store";

interface InputDropdownProps {
  /**
   * 추가적인 클래스명을 지정할 수 있는 프로퍼티. 기존 className에 덧붙여짐
   * @type {string}
   */
  className?: string;
}

/**
 * `InputDropdown` 컴포넌트
 * - 사용자가 입력 필드와 연동하여 동적으로 드롭다운을 표시합니다.
 * - 드롭다운의 위치, 크기, 동작을 제어하며, Portal을 통해 DOM 외부에 렌더링됩니다.
 * - 드롭다운의 스크롤 이벤트를 처리하기 위해, `.scroll` 클래스를 가진 가장 가까운 요소를 참조합니다.
 * - 스크롤 이벤트를 위해 window가 아닌 특정 요소를 참조하기 위해서는 해당 요소에 .scroll을 추가해야 합니다.
 *
 * @returns {JSX.Element | null} 드롭다운 UI 요소. 목록이 없거나 위치 정보가 없는 경우 null 반환.
 */
const InputDropdown = ({ className }: InputDropdownProps) => {
  const dispatch = useAppDispatch();
  const itemsRef = useRef<(HTMLLIElement | null)[]>([]);

  // InputContext에서 필요한 상태 및 함수 가져오기
  const {
    list, // 드롭다운 목록
    isDropdownOpen, // 드롭다운 여닫기 상태
    mainRef, // mainRef 가져오기
    inputValue, // 선택 항목을 알기 위해서
    setInputValue, // 값 업데이트
    setIsDropdownOpen, // 드롭다운 여닫기 상태 업데이트
    field, // 필드 이름
    scroll, // 스크롤 이벤트를 참조할 요소
    setIsValid, // 유효성 상태 업데이트
  } = useInputContext();

  // InputMain의 위치와 크기를 저장할 상태 정의
  const [mainRect, setMainRect] = useState<{
    top: number;
    left: number;
    width: number;
    // bottom: number | undefined;
    height: number;
  } | null>(null);

  // 드롭다운의 높이를 저장할 상태
  const [dropdownHeight, setDropdownHeight] = useState(0);

  /**
   * InputMain 컴포넌트의 위치와 크기를 업데이트하는 함수입니다.
   * 이 함수는 개발자 도구가 열려 있는지 확인하여, 그에 맞게 위치를 조정합니다.
   * 주로 `resize`와 `scroll` 이벤트에 의해 호출됩니다.
   *
   * @returns {void} 상태 업데이트는 내부적으로 이루어집니다.
   */
  const updateMainPosition = useCallback(() => {
    // mainRef가 가리키는 DOM 노드를 가져옵니다.
    const main = mainRef?.current as HTMLElement;

    // main 요소의 위치와 크기를 계산합니다.
    const mainRect = main.getBoundingClientRect();

    // 개발자 도구가 열려 있는지 확인하는 조건식
    // 개발자 도구가 열려 있으면, 화면 크기 차이가 100px 이상이 됩니다.
    const isDevToolOpen = window.outerHeight - window.innerHeight > 100;

    // 새로운 위치와 크기를 상태에 저장합니다.
    setMainRect((prev) => {
      // 계산된 새로운 위치와 크기 객체
      const newRect = {
        top: isDevToolOpen ? -2 : mainRect.top + mainRect.height + 2, // 화면의 위쪽 기준 위치
        left: mainRect.left, // 화면의 왼쪽 기준 위치
        width: mainRect.width, // 요소의 너비
        height: mainRect.height, // 요소의 높이
      };

      // 이전 상태(prev)와 새로운 상태(newRect)가 같으면 상태 업데이트를 건너뜁니다.
      // 속성 값이 동일한 경우, 이전 상태를 그대로 반환하여 불필요한 리렌더를 방지합니다.
      if (
        prev?.top === newRect.top &&
        prev?.left === newRect.left &&
        prev?.width === newRect.width &&
        prev?.height === newRect.height
      ) {
        return prev; // 값이 동일하면 상태를 변경하지 않습니다.
      }

      // 값이 다르면 새로운 위치와 크기를 설정하여 상태를 업데이트합니다.
      return newRect;
    });
  }, [mainRef]); // mainRef가 변경될 때마다 실행됨

  /**
   * InputMain의 위치와 크기를 업데이트합니다.
   */
  useLayoutEffect(() => {
    // mainRef가 유효하지 않으면 함수 실행 중단
    if (!mainRef || !mainRef.current) return;

    // 브라우저 창 크기 변경 또는 스크롤 이벤트 발생 시 위치와 크기를 업데이트
    window.addEventListener("resize", updateMainPosition); // 브라우저 창 크기 변화 감지
    scroll.addEventListener("scroll", updateMainPosition); // 스크롤 이벤트 감지

    // 초기 위치와 크기를 계산
    updateMainPosition();

    // 컴포넌트 언마운트 시 이벤트 리스너 제거
    return () => {
      window.removeEventListener("resize", updateMainPosition); // resize 이벤트 제거
      scroll.removeEventListener("scroll", updateMainPosition); // scroll 이벤트 제거
    };
  }, [mainRef]); // mainRef가 변경될 때마다 effect 실행

  /**
   * 드롭다운의 높이를 업데이트하는 함수.
   * 개발자 도구가 열려 있는지 여부에 따라 드롭다운의 높이를 다르게 계산합니다.
   * 개발자 도구가 열려 있으면, `main` 요소의 `top` 값으로 높이를 계산하고,
   * 그렇지 않으면 `window.innerHeight`와 `main` 요소의 `bottom` 값을 사용하여 높이를 계산합니다.
   */
  const updateDropdownHeight = useCallback(() => {
    // `mainRef`로 참조된 HTML 요소를 가져옵니다.
    const main = mainRef?.current as HTMLElement;

    // 개발자 도구가 열려있는지 확인하는 조건
    // 개발자 도구가 열리면 `window.outerHeight - window.innerHeight` 값이 일정 이상 차이날 것임
    const isDevToolOpen = window.outerHeight - window.innerHeight > 100;

    // `main` 요소의 위치 정보를 가져옵니다. (위쪽, 아래쪽)
    const { top, bottom } = main.getBoundingClientRect();

    // 개발자 도구가 열려 있는 경우, `top` 값을 높이로 사용하고,
    // 그렇지 않으면 `window.innerHeight - bottom`으로 높이를 계산합니다.
    const height = isDevToolOpen ? top : window.innerHeight - bottom;

    // 이전 높이와 비교하여 값이 다를 경우에만 높이를 업데이트합니다.
    setDropdownHeight((prev) => (prev === height ? prev : height));
  }, [mainRef]); // mainRef가 변경될 때마다 실행

  /**
   * 드롭다운의 최대 높이를 계산합니다.
   */
  useLayoutEffect(() => {
    if (!mainRef || !mainRef.current || !mainRect) return;

    // 브라우저 창 크기 변경 또는 스크롤 이벤트 발생 시 높이 업데이트
    window.addEventListener("resize", updateDropdownHeight); // 브라우저 창 크기 변화 감지
    scroll.addEventListener("scroll", updateDropdownHeight); // 스크롤 이벤트 감지

    updateDropdownHeight();

    return () => {
      window.removeEventListener("resize", updateDropdownHeight); // resize 이벤트 제거
      scroll.removeEventListener("scroll", updateDropdownHeight); // scroll 이벤트 제거
    };
  }, [mainRef, mainRect]); // mainRef와 mainRect이 변경될 때마다 effect 실행

  /**
   * 현재 선택된 항목으로 스크롤합니다.
   */
  useEffect(() => {
    if (!isDropdownOpen) return; // 드롭다운이 열려있을 때만 실행

    const timer = setTimeout(() => {
      const curIndex =
        list?.findIndex((item) => item.value === inputValue) || 0; // 선택 항목의 현재 위치

      const selected = itemsRef.current[curIndex]; // 선택된 항목 가져오기

      if (!selected) return; // 선택된 항목이 없다면 종료

      selected?.scrollIntoView({
        behavior: "smooth", // 부드러운 스크롤 효과
        block: "center", // 항목을 화면 중앙에 위치하도록 스크롤
      });
    }, 0); // 렌더링 직후에 실행되도록 0ms 지연 후 호출

    return () => clearTimeout(timer); // 컴포넌트 언마운트 시 타이머 제거
  }, [inputValue, isDropdownOpen]); // inputValue나 isDropdownOpen이 변경될 때마다 실행

  // 드롭다운에 사용할 리스트가 없거나 mainRect가 유효하지 않으면 표시하지 않음
  if (!list || !mainRect) return null;

  const { top, left, width } = mainRect; // 위치와 크기 정보를 구조 분해 할당

  return (
    // Portal을 통해 드롭다운을 외부 DOM에 렌더링
    <Portal id={`${field}-dropdown`}>
      <div
        className={joinClassNames([
          styles["input__dropdown"], // 기본 드롭다운 스타일
          isDropdownOpen
            ? styles["input__dropdown--open"] // 드롭다운 열림 상태
            : styles["input__dropdown--close"], // 드롭다운 닫힘 상태
          className,
        ])}
        style={{
          top, // 드롭다운의 y 위치 : 개발자도구가 열렸는지 여부에 따라 달라짐
          left, // 드롭다운의 X 위치: InputMain과 동일
          width, // 드롭다운의 너비: InputMain과 동일
        }}
      >
        <ul
          className={styles[`input__list`]}
          style={{
            maxHeight: isDropdownOpen ? dropdownHeight : 0, // 드롭다운이 열릴 때 높이를 적용
          }}
          role="listbox" // 드롭다운이 리스트 박스임을 나타냄
          aria-expanded={isDropdownOpen} // 드롭다운의 열림/ 닫힘 상태를 나타냄
          aria-activedescendant={
            list.find((item) => item.value === inputValue)?.value as string
          } // 현재 활성화된 항목의 id를 지정하여 스크린 리더가 현재 선택된 항목을 읽을 수 있도록 함
        >
          {list?.map((item, index) => {
            const selectedCond = inputValue === item.value;
            return (
              <li
                key={index}
                className={joinClassNames([
                  styles[`input__item`],
                  selectedCond ? styles[`input__item--selected`] : "",
                ])}
                role="option" // 드롭다운의 각 항목이 선택 가능한 옵션임을 나타냄
                aria-selected={selectedCond} // 현재 선택된 항목임을 나타냄
                onMouseDown={(e) => {
                  e.preventDefault(); // 포커스 이동을 위해서는 다른 이벤트 발생 방지

                  dispatch(setInputValue(item.value)); // inputValue 값 업데이트

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

                  setIsDropdownOpen(false); // 드롭다운 닫기

                  // 메인으로 포커스 이동
                  mainRef?.current?.focus();
                }}
                ref={(el) => (itemsRef.current[index] = el)} // 각 항목에 Ref 설정
              >
                {item.text} {/* 리스트 항목 텍스트 표시 */}
              </li>
            );
          })}
        </ul>
      </div>
    </Portal>
  );
};

export default InputDropdown;
