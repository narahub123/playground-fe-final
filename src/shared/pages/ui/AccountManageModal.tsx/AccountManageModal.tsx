import { getParalleModal } from "@shared/@common/models/selectors";
import styles from "./AccountManageModal.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { Modal } from "@shared/@common/ui/components";
import { joinClassNames } from "@shared/@common/utils";
import { useSelector } from "react-redux";
import { useAppDispatch } from "@app/store";
import { useNavigate } from "react-router-dom";
import { onParallelModalClose } from "@shared/@common/models/slices/modalSlice";

interface AccountManageModalProps {
  className?: string;
  disabled?: boolean;
}

const AccountManageModal = ({
  className,
  disabled = false,
}: AccountManageModalProps) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const isOpen = useSelector(getParalleModal("account"));
  const onClose = () => {
    dispatch(onParallelModalClose("account"));
    navigate(-1);
  };

  // 언어 설정
  const {} = useLanguageContent(["components", "AccountManageModal"]);

  const classNames = joinClassNames([
    styles["account__manage__modal"],
    className,
  ]);

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      domId="write-modal"
      className={classNames}
    >
      <Modal.Overlay />
      <Modal.Container>
        <Modal.CloseButton location="left" />
        <Modal.Content>
          <Modal.Header className={styles[`write__post__modal__header`]}>
            초안
          </Modal.Header>
          <Modal.Body>바디</Modal.Body>
          <Modal.Footer>푸터</Modal.Footer>
        </Modal.Content>
      </Modal.Container>
    </Modal>
  );
};

export default AccountManageModal;
