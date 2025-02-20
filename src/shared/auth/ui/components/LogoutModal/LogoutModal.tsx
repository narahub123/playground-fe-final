import { getStandAloneModal } from "@shared/@common/models/selectors";
import styles from "./LogoutModal.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { Modal } from "@shared/@common/ui/components";
import { joinClassNames } from "@shared/@common/utils";
import { useSelector } from "react-redux";
import { useAppDispatch } from "@app/store";
import { onStandAlonClose } from "@shared/@common/models/slices/modalSlice";

interface LogoutModalProps {
  className?: string;
  disabled?: boolean;
}

const LogoutModal = ({ className, disabled = false }: LogoutModalProps) => {
  const dispatch = useAppDispatch();

  // 여닫기 구현
  const isOpen = useSelector(getStandAloneModal("logout"));
  const onClose = () => {
    dispatch(onStandAlonClose("logout"));
  };

  // 언어 설정
  const {} = useLanguageContent(["components", "LogoutModal"]);

  const classNames = joinClassNames([styles["logout__modal"], className]);

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      domId="logout-modal"
      className={classNames}
    >
      <Modal.Overlay />
      <Modal.Container>
        <Modal.CloseButton />
        <Modal.Content>
          <Modal.Header>헤더</Modal.Header>
          <Modal.Body>바디</Modal.Body>
          <Modal.Footer>푸터</Modal.Footer>
        </Modal.Content>
      </Modal.Container>
    </Modal>
  );
};

export default LogoutModal;
