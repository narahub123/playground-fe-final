import { getParalleModal } from "@shared/@common/models/selectors";
import { Modal } from "@shared/@common/ui/components";
import { useSelector } from "react-redux";
import { useAppDispatch } from "@app/store";
import { useLocation, useNavigate } from "react-router-dom";
import {
  onParallelModalClose,
  onParallelModalOpen,
} from "@shared/@common/models/slices/modalSlice";
import { useEffect } from "react";
import { ProfileSettingsContent } from "@features/profile-page";

interface ProfileSettingsModalProps {
  className?: string;
}

const ProfileSettingsModal = ({ className }: ProfileSettingsModalProps) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const isOpen = useSelector(getParalleModal("profile"));

  useEffect(() => {
    if (pathname === "/settings/profile") {
      dispatch(onParallelModalOpen("profile"));
    } else {
      dispatch(onParallelModalClose("profile"));
    }
  }, [pathname]);

  const onClose = () => {
    dispatch(onParallelModalClose("profile"));
    navigate(-1);
  };

  return (
    <Modal isOpen={true} onClose={onClose} domId="profile">
      <Modal.Overlay />
      <Modal.Container>
        <ProfileSettingsContent />
      </Modal.Container>
    </Modal>
  );
};

export default ProfileSettingsModal;
