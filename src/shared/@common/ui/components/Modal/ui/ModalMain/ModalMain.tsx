import { ReactNode } from "react";
import Portal from "../../../Portal/Portal";
import { ModalContextProvider } from "../../context";
import styles from "./ModalMain.module.css";
import { ModalContextType } from "../../types";

interface ModalMainProps {
  children: ReactNode; // 자식 요소
  isOpen: boolean; // 모달 상태
  onClose?: () => void; // 닫기 함수
  lengthOfList?: number; // 여러 페이지가 있는 경우
  curPage?: number; // 현재 페이지
  setCurPage?: React.Dispatch<React.SetStateAction<number>>; // 현재 페이지 지정
  width?: number;
  unit?: "px" | "%" | "rem";
}

/**
 * 모달의 메인 컴포넌트입니다. 모달의 열림/닫힘 상태를 관리하고,
 * 모달 관련 상태를 제공하는 context를 제공합니다.
 *
 * @param children 자식 요소들로, 모달의 내용이나 구성 요소들이 포함됩니다.
 * @param isOpen 모달이 열려 있는지 여부를 결정하는 상태입니다. `true`이면 모달이 열리고, `false`이면 모달이 닫힙니다.
 * @param onClose 모달을 닫는 함수입니다. 모달이 닫힐 때 호출됩니다.
 * @param lengthOfList 여러 페이지가 있을 경우, 페이지 수를 나타내는 값입니다.
 * @param curPage 현재 페이지를 나타내는 값입니다.
 * @param setCurPage 현재 페이지를 설정하는 함수입니다.
 * @param width 모달의 너비를 설정하는 값입니다.
 * @param unit 모달의 너비 단위를 설정합니다. 기본값은 `rem`이며, `px` 또는 `%`도 사용 가능합니다.
 *
 * @returns 모달이 열리면 모달의 내용이 렌더링되고, 닫히면 아무 것도 렌더링하지 않습니다.
 *
 */
const ModalMain = ({
  children,
  isOpen,
  onClose,
  lengthOfList,
  curPage,
  setCurPage,
  width,
  unit = "rem",
}: ModalMainProps) => {
  // 모달 창 열기 상태가 false이면 반환
  if (!isOpen) return null;

  // 배경 스크롤 방지
  if (isOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  const value: ModalContextType = {
    onClose,
    lengthOfList,
    curPage,
    setCurPage,
    width,
    unit,
  };

  return (
    <Portal id="modal">
      <ModalContextProvider value={value}>
        <div className={styles["modal"]}>{children}</div>
      </ModalContextProvider>
    </Portal>
  );
};

export default ModalMain;
