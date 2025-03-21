import { useAppDispatch } from "@app/store";
import { PRIMARY_LINK } from "@shared/@common/constants";
import {
  useEscKeyClose,
  useKeepParallelModalOpen,
} from "@shared/@common/models/hooks";
import { getWritePostModal } from "@shared/@common/models/selectors";
import { onParallelModalClose } from "@shared/@common/models/slices/modalSlice";
import { Modal } from "@shared/@common/ui/components";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";

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

  useKeepParallelModalOpen(PRIMARY_LINK.COMPOSE_POST, "write");

  return (
    <Modal isOpen={isOpen} onClose={onClose} domId="write-modal">
      <Modal.Overlay />
      <Outlet />
    </Modal>
  );
};

export default WritePostModal;
