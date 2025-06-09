import { getParalleModal, selectUser } from "@shared/@common/models/selectors";
import styles from "./ProfileSettingsModal.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import {
  Button,
  ImageUploader,
  Modal,
  ProfileImage,
  ProfileImageUploader,
  Text,
} from "@shared/@common/ui/components";
import { joinClassNames } from "@shared/@common/utils";
import { useSelector } from "react-redux";
import { useAppDispatch } from "@app/store";
import { useLocation, useNavigate } from "react-router-dom";
import {
  onParallelModalClose,
  onParallelModalOpen,
} from "@shared/@common/models/slices/modalSlice";
import { useEffect } from "react";
import { Icon } from "@shared/@common/ui/icons";
import {
  setProfileCoverImage,
  setProfileImage,
} from "@shared/@common/models/slices/userSlice";
import { defaultProfileImage } from "@shared/@common/assets";

interface ProfileSettingsModalProps {
  className?: string;
}

const ProfileSettingsModal = ({ className }: ProfileSettingsModalProps) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  // 언어 설정
  const { title, save } = useLanguageContent([
    "profilepage",
    "ProfileSettingsModal",
  ]);

  useEffect(() => {
    if (pathname === "/settings/profile") {
      dispatch(onParallelModalOpen("profile"));
    } else {
      dispatch(onParallelModalClose("profile"));
    }
  }, [pathname]);

  const user = useSelector(selectUser);
  const isOpen = useSelector(getParalleModal("profile"));

  const onClose = () => {
    dispatch(onParallelModalClose("profile"));
    navigate(-1);
  };

  return (
    <Modal isOpen={true} onClose={onClose} domId="profile">
      <Modal.Overlay />
      <Modal.Container>
        <Modal.Content>
          <Modal.Header className={styles["header"]}>
            <div className={styles["left"]}>
              <div className={styles["icon__wrapper"]}>
                <Icon
                  iconName="close"
                  onClick={() => {}}
                  className={styles["icon"]}
                  iconSize="xl"
                />
              </div>
              <Text type="heading3">{title}</Text>
            </div>
            <Button
              isValid
              onClick={() => {}}
              className={styles["button"]}
              rounded="2xl"
            >
              {save}
            </Button>
          </Modal.Header>
          <Modal.Body className={styles["body"]}>
            <div className={styles["cover__wrapper"]}>
              {user.profileCoverImage && <img src={user.profileCoverImage} />}
              <ImageUploader setImages={setProfileCoverImage} />
            </div>
            <div className={styles["image__bar"]}>
              <div className={styles["image__container"]}>
                <div className={styles["image__wrapper"]}>
                  <ProfileImage
                    rounded="full"
                    src={user.profileImage || defaultProfileImage}
                  />
                  <ImageUploader setImages={setProfileImage} />
                </div>
              </div>
            </div>
            <div>이름</div>
            <div>자기 소개</div>
            <div>위치</div>
            <div>웹사이트</div>
            <div>생년월일</div>
          </Modal.Body>
          <Modal.Footer>푸터</Modal.Footer>
        </Modal.Content>
      </Modal.Container>
    </Modal>
  );
};

export default ProfileSettingsModal;
