import styles from "./Modal.module.css";
import { ReactNode, useContext, useEffect, useRef } from "react";
import { ModalProvider } from "@shared/@common/models/providers";
import { ModalContext } from "@shared/@common/models/contexts";

// 모달
const ModalMain = ({
  children,
  isOpen,
  onClose,
}: {
  children: ReactNode;
  isOpen: boolean;
  onClose?: () => void;
}) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modal}>
      <ModalProvider value={{ onClose }}>{children}</ModalProvider>
    </div>
  );
};

// 검은 바탕: 누르면 닫혀야 함
const ModalOverlay = () => {
  const overlayRef = useRef<HTMLDivElement>(null);
  const { onClose } = useContext(ModalContext);
  return (
    <div
      className={styles.overlay}
      ref={overlayRef}
      onClick={(e) => {
        const target = e.currentTarget.className;

        console.log(target);
        if (target.includes("overlay") && onClose) {
          onClose();
        }
      }}
    />
  );
};

// 흰 바탕
const ModalContainer = ({ children }: { children: ReactNode }) => {
  return <div className={styles.container}>{children}</div>;
};

// 닫기 버튼
const ModalCloseButton = () => {
  const { onClose } = useContext(ModalContext);

  return (
    <button className={styles.close} onClick={onClose}>
      삭제
    </button>
  );
};

// 내용
const ModalContent = ({ children }: { children: ReactNode }) => {
  return <div className={styles.content}>{children}</div>;
};

// 헤더
const ModalHeader = ({ children }: { children: ReactNode }) => {
  return <div className={styles.header}>{children}</div>;
};

// 바디
const ModalBody = ({ children }: { children: ReactNode }) => {
  return <div className={styles.body}>{children}</div>;
};

// 푸터
const ModalFooter = ({ children }: { children: ReactNode }) => {
  return <div className={styles.footer}>{children}</div>;
};

const Modal = Object.assign(ModalMain, {
  Overlay: ModalOverlay,
  Container: ModalContainer,
  CloseButton: ModalCloseButton,
  Content: ModalContent,
  Header: ModalHeader,
  Body: ModalBody,
  Footer: ModalFooter,
});

export default Modal;
