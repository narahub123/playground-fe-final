import styles from "./WritePostModal.module.css";
import { useAppDispatch } from "@app/store";
import {
  useEscKeyClose,
  useKeepParallelModalOpen,
  useLanguageContent,
} from "@shared/@common/models/hooks";
import { getWritePostModal } from "@shared/@common/models/selectors";
import { onParallelModalClose } from "@shared/@common/models/slices/modalSlice";
import { Button, Modal } from "@shared/@common/ui/components";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

interface WritePostModalProps {}

const WritePostModal = ({}: WritePostModalProps) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const isOpen = useSelector(getWritePostModal);
  const onClose = () => {
    dispatch(onParallelModalClose("write"));
    navigate(-1);
  };

  useEscKeyClose(onClose);

  useKeepParallelModalOpen("/compose/post", "write");

  // 언어 설정
  const {} = useLanguageContent(["components", "WritePostModal"]);

  return (
    <Modal isOpen={isOpen} onClose={onClose} domId="write-modal">
      <Modal.Overlay />
      <Modal.Container>
        <Modal.CloseButton location="left" />
        <Modal.Content>
          <Modal.Header className={styles[`write__post__modal__header`]}>
            <Button
              onClick={() => {
                navigate("unsent/drafts");
              }}
              type="button"
              variant="plain"
              fontColor="green"
              style={{ fontWeight: "bold" }}
            >
              초안
            </Button>
          </Modal.Header>
          <Modal.Body>바디</Modal.Body>
          <Modal.Footer>푸터</Modal.Footer>
        </Modal.Content>
      </Modal.Container>
    </Modal>
  );
};

export default WritePostModal;
