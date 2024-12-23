import styles from "./Modal.module.css";
import { ReactNode, useContext, useRef } from "react";
import { ModalProvider } from "@shared/@common/models/providers";
import { ModalContext } from "@shared/@common/models/contexts";
import Icon from "../Icon/Icon";
import { useFocusTrap } from "@shared/@common/models/hooks";

// 모달
const ModalMain = ({
  children,
  isOpen,
  onClose,
  lengthOfList,
  curPage,
  setCurPage,
  width,
  unit = "px",
}: {
  children: ReactNode; // 자식 요소
  isOpen: boolean; // 모달 상태
  onClose?: () => void; // 닫기 함수
  lengthOfList?: number; // 여러 페이지가 있는 경우
  curPage?: number; // 현재 페이지
  setCurPage?: React.Dispatch<React.SetStateAction<number>>; // 현재 페이지 지정
  width?: number;
  unit?: "px" | "%" | "rem";
}) => {
  if (!isOpen) return null;

  // 배경 스크롤 방지
  if (isOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  return (
    <div className={styles.modal}>
      <ModalProvider
        value={{ onClose, lengthOfList, curPage, setCurPage, width, unit }}
      >
        {children}
      </ModalProvider>
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
        if (target.includes("overlay") && onClose) {
          onClose();
        }
      }}
    />
  );
};

// 흰 바탕
const ModalContainer = ({ children }: { children: ReactNode }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { width, unit } = useContext(ModalContext);
  useFocusTrap({ containerRef });
  return (
    <div
      className={styles.container}
      style={{ width: `${width}${unit}` }}
      ref={containerRef}
    >
      {children}
    </div>
  );
};

// 닫기 버튼
const ModalCloseButton = () => {
  const { onClose } = useContext(ModalContext);

  return (
    <Icon
      iconName="close"
      iconTitle="닫기"
      onClick={onClose}
      subClassName={styles.close}
    />
  );
};

// 페이지 표시
const ModalIndicator = () => {
  const { lengthOfList, curPage, setCurPage } = useContext(ModalContext);

  if (!lengthOfList || !setCurPage) return;

  return (
    <ul className={styles.indicator}>
      {Array.from({ length: lengthOfList }).map((_, idx) => (
        <li
          key={idx}
          className={`${styles.item} ${
            curPage !== undefined && curPage >= idx ? styles.selected : ""
          }`}
          onClick={setCurPage ? () => setCurPage(idx) : undefined}
        />
      ))}
    </ul>
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
  Indicator: ModalIndicator,
  Content: ModalContent,
  Header: ModalHeader,
  Body: ModalBody,
  Footer: ModalFooter,
});

export default Modal;
