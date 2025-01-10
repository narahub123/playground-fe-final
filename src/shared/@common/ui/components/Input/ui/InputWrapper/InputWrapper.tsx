import { ReactNode, useEffect, useRef, useState } from "react";
import styles from "./InputWrapper.module.css";
import { InputContextProvider } from "@shared/@common/ui/components/Input/context";
import {
  InputContextType,
  InputErrorKeyType,
  InputErrorType,
} from "@shared/@common/ui/components/Input/types";
import { DropdownItemType } from "@shared/@common/types";
import { joinClassNames } from "@shared/@common/utils";

// 외부에서 전달 받을 값
interface InputWrapperProps {
  label: string; // input 필드의 목적을 설명하는 문자열
  field: string; // slice에서 상태를 식별하기 위한 필드 이름
  inputValue: string; // Input의 value
  setInputValue: (value: any) => { type: string; payload: any }; // inputValue를 업데이트할 reducer
  children: ReactNode;
  isValid?:
    | {
        [key: string]: boolean; // 각 필드에 대한 유효성 상태를 객체 형태로 저장. 필드 이름을 키로 하고, 유효성 상태(boolean)를 값으로 저장합니다.
      }
    | boolean; // 전체 유효성 상태를 나타내는 boolean 값. 모든 입력 필드에 대해 유효성 검사를 한 번에 처리하고자 할 때 사용됩니다.

  setIsValid?: React.Dispatch<
    React.SetStateAction<
      | {
          [key: string]: boolean; // 각 필드에 대한 유효성 상태를 업데이트하는 함수입니다. 필드 이름을 키로 하고, boolean 값을 업데이트합니다.
        }
      | boolean // 전체 유효성 상태를 업데이트하는 함수입니다. 모든 입력 필드에 대한 유효성 상태를 한 번에 업데이트할 수 있습니다.
    >
  >; // `isValid`의 값을 업데이트하는 함수입니다. 객체일 경우, 각 필드의 유효성 상태를 개별적으로 업데이트하거나, boolean 값일 경우 전체 유효성 상태를 한 번에 업데이트할 수 있습니다.
  maxLength?: number; // 사용자가 input 필드에 입력할 수 있는 최대 글자 수를 제한: Constants로 관리할 것
  /**
   * `error`는 선택적인 객체로, `InputErrorKeyType` 타입을 키로 가지며, 각 키에 대해
   * 해당하는 에러 메시지와 선택적으로 정규 표현식을 포함하는 `InputErrorType<K>` 타입의 값을 가집니다.
   * `error` 자체가 `undefined`일 수도 있음을 나타냅니다.
   *
   * - `InputErrorKeyType`은 여러 종류의 에러 키를 정의한 타입으로, 각 에러에 대한 고유한 키 값입니다.
   * - `InputErrorType<K>`은 각 에러 키에 해당하는 에러 메시지와, 필요시 정규 표현식을 포함하는 타입입니다.
   *
   * 예시:
   * - `error: { EMPTY: { errorMessage: "이 필드는 비어 있을 수 없습니다.", regExp: "^.*$" } }`
   * - `error: undefined`일 수도 있습니다. (에러가 없는 경우)
   */
  error?: {
    [K in InputErrorKeyType]?: InputErrorType<K>;
  };
  list?: DropdownItemType[]; // 드롭다운에 들어갈 아이템 배열
  disabled?: boolean; // disabled 모드 적용
  /**
   * 추가적인 클래스명을 지정할 수 있는 프로퍼티. 기존 className에 덧붙여짐
   * @type {string}
   */
  className?: string;
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
  isValid,
  setIsValid,
  children,
  maxLength,
  error,
  list,
  disabled = false, // 값을 적용하지 않으면 false
  className,
}: InputWrapperProps) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  /** @type {boolean} Input의 포커스 상태 */
  const [isFocused, setIsFocused] = useState(false);
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
    // 현재 inputValue의 유효성 여부
    isValid:
      isValid !== undefined
        ? typeof isValid === "object"
          ? isValid[field] ?? false // 객체일 경우, field에 해당하는 값이 없으면 false
          : isValid // 객체가 아니면 그대로 사용
        : true, // isValid가 undefined일 경우 true
    setIsValid, // inputValue의 유효성을 업데이트하는 set 함수
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
          className,
        ])}
        ref={wrapperRef}
      >
        {children}
      </div>
    </InputContextProvider>
  );
};

export default InputWrapper;
