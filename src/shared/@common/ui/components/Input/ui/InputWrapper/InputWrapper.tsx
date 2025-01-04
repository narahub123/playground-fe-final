import { ReactNode, useEffect, useRef, useState } from "react";
import styles from "./InputWrapper.module.css";
import {
  InputContextProvider,
  InputContextType,
  InputErrorKeyType,
  InputErrorType,
} from "@shared/@common/ui/components/Input/context";
import { DropdownItemType } from "@shared/@common/types";
import { joinClassNames } from "@shared/@common/utils";

// 외부에서 전달 받을 값
interface InputWrapperProps {
  label: string; // input 필드의 목적을 설명하는 문자열
  field: string; // slice에서 상태를 식별하기 위한 필드 이름
  inputValue: string; // Input의 value
  setInputValue: (value: any) => { type: string; payload: any }; // inputValue를 업데이트할 reducer
  children: ReactNode;
  maxLength?: number; // 사용자가 input 필드에 입력할 수 있는 최대 글자 수를 제한: Constants로 관리할 것
  error?: Partial<Record<InputErrorKeyType, InputErrorType>>;
  list?: DropdownItemType[]; // 드롭다운에 들어갈 아이템 배열
  disabled?: boolean; // disabled 모드 적용
}

/**
 * InputWrapper 컴포넌트
 * - Input 필드와 관련된 데이터를 컨텍스트로 제공
 * - 상태 관리 및 스타일링을 적용
 * - 드롭다운을 사용하는 경우 드롭다운의 스크롤 이벤트를 처리하기 위해, `.scroll` 클래스를 가진 가장 가까운 요소를 참조합니다.
 * - window가 아닌 특정 요소의 스크롤 이벤트를 참조하기 위해서는 참조하기 원하는 요소에 .scroll을 추가해야 합니다.
 *
 * @param {InputWrapperProps} props - 컴포넌트에 전달되는 props
 * @returns {JSX.Element} InputWrapper 컴포넌트
 */
const InputWrapper = ({
  label,
  field,
  inputValue,
  setInputValue,
  children,
  maxLength,
  error,
  list,
  disabled = false, // 값을 적용하지 않으면 false
}: InputWrapperProps) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  /** @type {boolean} Input의 포커스 상태 */
  const [isFocused, setIsFocused] = useState(false);
  /** @type {boolean} inputValue의 유효성 상태 */
  const [isValid, setIsValid] = useState(true);
  /**
   * @type {React.RefObject<HTMLInputElement> | undefined}
   * input 요소의 참조 상태
   */
  const [inputRef, setInputRef] = useState<React.RefObject<HTMLInputElement>>();
  /** @type {boolean} 비밀번호 표시 상태 */
  const [showPassword, setShowPassword] = useState(false);
  /** @type {string} 에러 메시지 상태 */
  const [errorMessage, setErrorMessage] = useState("");
  /** @type {boolean} 드롭다운 여닫기 상태 */
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  /**
   * @type {React.RefObject<HTMLLabelElement> | undefined}
   * InputMain 요소의 참조 상태
   */
  const [mainRef, setMainRef] = useState<React.RefObject<HTMLLabelElement>>();

  /**
   * 드롭다운에서 `.scroll` 클래스를 가진 가장 가까운 요소를 추적하는 상태입니다.
   *
   * 초기 값으로 `window` 객체를 사용하여, `scroll` 클래스를 가진 DOM 요소가 없을 경우
   * 브라우저의 `window` 객체에서 스크롤 이벤트를 감지합니다.
   *
   * - `HTMLElement`일 경우, `scroll` 클래스를 가진 DOM 요소입니다.
   * - `Window`일 경우, 브라우저의 `window` 객체입니다.
   *
   * @type {HTMLElement | Window}
   */
  const [scroll, setScroll] = useState<HTMLElement | Window>(window);

  useEffect(() => {
    if (!wrapperRef.current) return;

    const scroll = wrapperRef.current.closest(".scroll") as HTMLElement;

    setScroll(scroll);
  }, [wrapperRef.current]);

  // context 값
  const value: InputContextType = {
    // 외부에서 전달 받을 값 : Props
    label, // input 필드의 목적을 설명하는 문자열
    field, // slice에서 상태를 식별하기 위한 필드 이름
    inputValue, // Input의 value
    setInputValue, // inputValue를 업데이트할 reducer
    maxLength, // 사용자가 input 필드에 입력할 수 있는 최대 글자 수를 제한: Constants로 관리할 것
    list, // 드롭다운에 들어갈 아이템 배열
    error, // 에러 객체 : 정규 표현식과 에러 메시지를 가지고 있음
    disabled, // disabled 모드 추가
    // 내부에서 생성할 값
    isFocused, // 현재 Input 컴포넌트의 포커스 여부
    setIsFocused, // Input 컴포넌트의 포커스 상태 업데이트하는 set 함수
    focusCond: isFocused || inputValue !== "", // focus 표시 조건: focuse 상태거나 inputValue에 값이 있는 경우
    isValid, // 현재 inputValue의 유효성 여부: 지금은 내부에서 생성하는데 다른 컴포넌트과 유효성을 통합해서 상태 확인할 때는 외부에서 가져와야 할 수도 있음
    setIsValid, // inputValue의 유효성을 업데이트 하는 set 함수
    inputRef, // input 요소를 참조하는 상태: 포커스 이동에 사용, 포커스 시 커서 위치 지정에 사용
    setInputRef, // inputRef를 업데이트하는 set 함수
    showPassword, // 현재 비밀번호 표시 여부
    setShowPassword, // 비밀번호 표시 여부 업데이트하는 set 함수
    errorMessage, // 현재 에러 메시지 상태
    setErrorMessage, // 에러 메시지 업데이트하는 set 함수
    isDropdownOpen, // 현재 드롭다운 열여 있는지 여부
    setIsDropdownOpen, // 드롭다운 여닫기 업데이트하는 set 함수
    mainRef, // 현재 InputMain 참조하는 상태: 드롭다운의 위치, 크기에 영향
    setMainRef, // mainRef를 업데이트 하는 set 함수
    scroll, // 드롭다운의 위치와 높이를 조정하기 위해서 스크롤 이벤트를 참조할 요소
  };

  return (
    // Input 관련 데이터를 하위 컴포넌트에 전달하기 위한 Context Provider
    <InputContextProvider value={value}>
      <div
        className={joinClassNames([
          styles[`input__wrapper`],
          disabled ? styles[`input__wrapper--disabled`] : "",
        ])}
        ref={wrapperRef}
      >
        {children}
      </div>
    </InputContextProvider>
  );
};

export default InputWrapper;
