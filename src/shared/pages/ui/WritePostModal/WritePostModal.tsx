import { useAppDispatch } from "@app/store";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { getWritePostModal } from "@shared/@common/models/selectors";
import { onParallelModalClose } from "@shared/@common/models/slices/modalSlice";
import { Modal } from "@shared/@common/ui/components";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

interface WritePostModalProps {}

const WritePostModal = ({}: WritePostModalProps) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  // 언어 설정
  const {} = useLanguageContent(["components", "WritePostModal"]);

  const isOpen = useSelector(getWritePostModal);

  const onClose = () => {
    dispatch(onParallelModalClose("write"));
    navigate(-1);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} domId="write-modal">
      <Modal.Overlay />
      <Modal.Container>
        <Modal.CloseButton />
        <Modal.Content>하이</Modal.Content>
      </Modal.Container>
    </Modal>
  );
};

export default WritePostModal;
