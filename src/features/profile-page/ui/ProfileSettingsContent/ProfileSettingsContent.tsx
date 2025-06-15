import { defaultProfileImage } from "@shared/@common/assets";
import styles from "./ProfileSettingsContent.module.css";
import {
  useLanguageContent,
  useValidationChecker,
} from "@shared/@common/models/hooks";
import {
  Button,
  ImageUploader,
  Modal,
  ProfileImage,
  Text,
} from "@shared/@common/ui/components";
import { Icon } from "@shared/@common/ui/icons";
import {
  setProfileCoverImage,
  setProfileImage,
} from "@shared/@common/models/slices/userSlice";
import {
  BirthConfirm,
  BirthTab,
  BirthWrapper,
  InputIntro,
  InputPlace,
  InputUsername,
  InputWebsite,
} from "@features/profile-page";
import { useSelector } from "react-redux";
import { useModalContext } from "@shared/@common/ui/components/Modal/hooks";
import { selectUser } from "@shared/@common/models/selectors";
import { onStandAlonOpen } from "@shared/@common/models/slices/modalSlice";
import { useAppDispatch } from "@app/store";
import { useState } from "react";

interface ProfileSettingsContentProps {}

const ProfileSettingsContent = ({}: ProfileSettingsContentProps) => {
  const dispatch = useAppDispatch();
  // 언어 설정
  const { title, save } = useLanguageContent([
    "profilepage",
    "ProfileSettingsContent",
  ]);

  const [canModify, setCanModify] = useState(false);

  const user = useSelector(selectUser);
  const { setScreenValidations } = useModalContext();

  const { isValid, setIsValid, validationResult } = useValidationChecker({
    fields: ["username", "intro", "place", "website"],
    sliceState: user,
    setScreenValidations,
    screenName: "ScreenPersonalInfo",
  });

  return (
    <Modal.Content>
      <BirthConfirm setCanModify={setCanModify} />
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
        <div className={styles["input__wrapper"]}>
          <InputUsername isValid={isValid} setIsValid={setIsValid} />
        </div>
        <div className={styles["input__wrapper"]}>
          <InputIntro isValid={isValid} setIsValid={setIsValid} />
        </div>
        <div className={styles["input__wrapper"]}>
          <InputPlace isValid={isValid} setIsValid={setIsValid} />
        </div>
        <div className={styles["input__wrapper"]}>
          <InputWebsite isValid={isValid} setIsValid={setIsValid} />
        </div>
        {true ? (
          <BirthWrapper />
        ) : (
          <BirthTab
            onClick={() => {
              dispatch(onStandAlonOpen("confirm"));
            }}
          />
        )}
      </Modal.Body>
    </Modal.Content>
  );
};

export default ProfileSettingsContent;
