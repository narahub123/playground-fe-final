import { useAppDispatch } from "@app/store";
import { Modal } from "@shared/@common/ui/components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { onParallelModalClose } from "@shared/@common/models/slices/modalSlice";
import { useSelector } from "react-redux";
import { getParalleModal } from "@shared/@common/models/selectors";

const VerifyOwnershipModal = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const isOpen = useSelector(getParalleModal("ownership"));

  const [curPage, setCurPage] = useState(0);

  const onClose = () => {
    dispatch(onParallelModalClose("ownership"));
    navigate("/settings/account");
  };

  const screens = [<></>];

  return (
    <Modal
      curPage={curPage}
      setCurPage={setCurPage}
      isOpen={isOpen}
      onClose={onClose}
      domId="ownership-modal"
    >
      <Modal.Overlay />
      <Modal.Container>
        <Modal.CloseButton />
        <Modal.Content>
          <Modal.Header>
            <Modal.Pagination />
          </Modal.Header>
          {screens[curPage]}
        </Modal.Content>
      </Modal.Container>
    </Modal>
  );
};

export default VerifyOwnershipModal;
