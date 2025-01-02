import { ReactNode, useEffect } from "react";
import Portal from "../../../Portal/Portal";
import { ModalContextProvider } from "../../context";
import styles from "./ModalMain.module.css";
import { ModalContextType } from "../../types";

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
   * 여러 페이지가 있을 경우, 페이지 수를 나타내는 값입니다.
   * @type {number}
   */
  lengthOfList?: number;

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
  lengthOfList,
  curPage,
  setCurPage,
  domId = "modal",
}: ModalMainProps) => {
  // 모달 창 열기 상태가 false이면 반환
  if (!isOpen) return null;

  // 배경 스크롤 방지
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const value: ModalContextType = {
    onClose,
    lengthOfList,
    curPage,
    setCurPage,
  };

  return (
    <Portal id={domId}>
      <ModalContextProvider value={value}>
        <div
          className={styles["modal"]}
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
