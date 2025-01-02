import styles from "./AuthModal.module.css";
import { Modal } from "@shared/@common/ui/components";

/**
 * AuthModalPros는 AuthModal 컴포넌트에 전달되는 속성들을 정의함
 */
interface AuthModalProps {
  /**
   * 모달이 열려 있는지 여부를 결정하는 상태입니다. `true`이면 모달이 열리고, `false`이면 모달이 닫힙니다.
   * @type {boolean}
   */
  isOpen: boolean;
  /**
   * 모달을 닫는 함수입니다. 모달이 닫힐 때 호출됩니다.
   * @type {function}
   */
  onClose?: () => void;
  /**
   * 현재 페이지를 나타내는 값입니다.
   * @type {number}
   */
  curPage?: number;
  /**
   * 현재 페이지를 설정하는 함수입니다.
   * @type {function}
   */
  setCurPage?: React.Dispatch<React.SetStateAction<number>>;
}

/**
 * AuthModal 컴포넌트
 * 사용자 인증과 관련된 모달 컴포넌트로, 여러 페이지를 관리할 수 있습니다.
 *
 * @param {AuthModalProps} props - AuthModal 컴포넌트에 전달되는 속성들.
 * @returns {JSX.Element} AuthModal 컴포넌트 렌더링 결과.
 */
const AuthModal = ({
  isOpen,
  onClose,
  curPage,
  setCurPage,
}: AuthModalProps) => {
  const pages = [];
  return (
    <Modal
      isOpen={isOpen}
      curPage={curPage}
      setCurPage={setCurPage}
      onClose={onClose}
      lengthOfList={pages.length}
      domId="auth-modal"
    >
      <Modal.Overlay />
      <Modal.Container>
        <Modal.CloseButton />
        <Modal.Content>
          <Modal.Header>
            <Modal.PageIndicator />
          </Modal.Header>
          <Modal.Body>바디</Modal.Body>
          <Modal.Footer>푸터</Modal.Footer>
        </Modal.Content>
      </Modal.Container>
    </Modal>
  );
};

export default AuthModal;
