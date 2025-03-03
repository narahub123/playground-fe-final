import { useAppDispatch } from "@app/store";
import { Modal } from "@shared/@common/ui/components";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  onParallelModalClose,
  onParallelModalOpen,
} from "@shared/@common/models/slices/modalSlice";
import { useSelector } from "react-redux";
import { getParalleModal } from "@shared/@common/models/selectors";
import ScreenPassword from "../ScreenPassword/ScreenPassword";
import { PRIMARY_LINK } from "@shared/@common/constants";

const VerifyOwnershipModal = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const isOpen = useSelector(getParalleModal("ownership"));

  const [curPage, setCurPage] = useState(0);

  useEffect(() => {
    if (pathname.includes(PRIMARY_LINK.VERIFY_OWNERSHIP)) {
      dispatch(onParallelModalOpen("ownership"));
    }
  }, []);

  const onClose = () => {
    dispatch(onParallelModalClose("ownership"));
    navigate("/settings/account");
  };

  const screens = [<ScreenPassword setCurPage={setCurPage} />];

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
