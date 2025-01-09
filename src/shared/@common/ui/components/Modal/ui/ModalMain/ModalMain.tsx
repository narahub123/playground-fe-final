import styles from "./ModalMain.module.css";
import { ReactNode, useEffect } from "react";
import { joinClassNames } from "@shared/@common/utils";
import { Portal } from "@shared/@common/ui/components";
import { ModalContextProvider } from "@shared/@common/ui/components/Modal/context";
import {
  ModalContextType,
  ScreenValidationType,
} from "@shared/@common/ui/components/Modal/types";

/**
 * ModalMainProps는 ModalMain 컴포넌트에 전달되는 속성들을 정의합니다.
 */
interface ModalMainProps {
  /**
   * 자식 요소들로, 모달의 내용이나 구성 요소들이 포함됩니다.
   * @type {ReactNode}
   */
  children: ReactNode;

  /**
   * 모달이 열려 있는지 여부를 결정하는 상태입니다. `true`이면 모달이 열리고, `false`이면 모달이 닫힙니다.
   * @type {boolean}
   */
  isOpen: boolean;

  /**
   * 모달이 생성될 DOM의 id를 나타내는 값입니다. 기본값은 "modal"입니다.
   * @type {string}
   * @default "modal"
   */
  domId?: string;

  /**
   * 모달을 닫는 함수입니다. 모달이 닫힐 때 호출됩니다.
   * @type {() => void}
   */
  onClose?: () => void;

  /**
   * 화면 유효성 상태를 나타내는 선택적 필드.
   * 각 화면 이름을 키로 하여 유효성 상태를 저장합니다.
   *
   * @property {ScreenValidationType} [screenValidations] - 화면별 유효성 상태 객체 (선택적).
   */
  screenValidations?: ScreenValidationType;

  /**
   * 화면 유효성 상태를 업데이트하는 선택적 상태 디스패치 함수.
   * `screenValidations` 상태를 업데이트하는 데 사용됩니다.
   *
   * @property {React.Dispatch<React.SetStateAction<ScreenValidationType>>} [setScreenValidations] - 유효성 상태를 업데이트하는 디스패치 함수 (선택적).
   */
  setScreenValidations?: React.Dispatch<
    React.SetStateAction<ScreenValidationType>
  >;

  /**
   * 현재 페이지를 나타내는 값입니다.
   * @type {number}
   */
  curPage?: number;

  /**
   * 현재 페이지를 설정하는 함수입니다.
   * @type {React.Dispatch<React.SetStateAction<number>>}
   */
  setCurPage?: React.Dispatch<React.SetStateAction<number>>;

  /**
   * 추가적인 클래스명을 지정할 수 있는 프로퍼티. 기존 className에 덧붙여짐
   * @type {string}
   */
  className?: string;

  /**
   * 모달을 열었을 때 포커스가 될 요소의 인덱스
   */
  firstFocusIndex?: number;
}

/**
 * 모달의 메인 컴포넌트입니다. 모달의 열림/닫힘 상태를 관리하고,
 * 모달 관련 상태를 제공하는 context를 제공합니다.
 *
 * @param {ModalMainProps} props - ModalMain 컴포넌트에 전달되는 속성들입니다.
 * @returns {JSX.Element | null} 모달이 열리면 모달의 내용이 렌더링되고, 닫히면 아무 것도 렌더링하지 않습니다.
 */
const ModalMain = ({
  children,
  isOpen,
  onClose,
  curPage,
  setCurPage,
  screenValidations,
  setScreenValidations,
  domId = "modal",
  className,
  firstFocusIndex,
}: ModalMainProps) => {
  // 배경 스크롤 방지
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const value: ModalContextType = {
    onClose,
    screenValidations,
    setScreenValidations,
    curPage,
    setCurPage,
    firstFocusIndex,
  };

  // 모달 창 열기 상태가 false이면 반환
  if (!isOpen) return null;

  return (
    <Portal id={domId}>
      <ModalContextProvider value={value}>
        <div
          className={joinClassNames([styles[`modal`], className])}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title" // 요소에 이름을 제공하기 위해 사용 : 다른 요소의 id 값을 참조함
          aria-describedby="modal-description" // 요소에 추가 설명을 제공하기 위해 사용 : 다른 요소의 id 값 참조함
        >
          {children}
        </div>
      </ModalContextProvider>
    </Portal>
  );
};

export default ModalMain;
