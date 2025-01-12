import styles from "./ScreenProfileImage.module.css";
import {
  useLanguageContent,
  useValidationChecker,
} from "@shared/@common/models/hooks";
import {
  Button,
  Modal,
  ProfileImage,
  Text,
} from "@shared/@common/ui/components";
import {
  useModalContext,
  useModalPagination,
} from "@shared/@common/ui/components/Modal/hooks";
import { joinClassNames } from "@shared/@common/utils";
import { useSelector } from "react-redux";
import { getUserInSignup } from "@features/auth-setting/models/selectors";
import { useEffect } from "react";

interface ScreenProfileImageProps {
  className?: string;
  disabled?: boolean;
}

const ScreenProfileImage = ({ className }: ScreenProfileImageProps) => {
  const user = useSelector(getUserInSignup);
  const { setScreenValidations } = useModalContext();
  const { moveNext } = useModalPagination();

  const { setIsValid, validationResult } = useValidationChecker({
    fields: ["profileImage"],
    sliceState: user,
    setScreenValidations,
    screenName: "ScreenProfileImage",
  });

  useEffect(() => {
    setIsValid(true);
  }, []);

  // 언어 설정
  const { button, title, expl } = useLanguageContent([
    "components",
    "ScreenProfileImage",
  ]);

  const classNames = joinClassNames([
    styles["screen__profile__image"],
    className,
  ]);

  return (
    <div className={classNames}>
      <Modal.Body className={styles[`screen__profile__image__body`]}>
        <div className={styles[`screen__prifile__image__body__header`]}>
          <Text text={title} type="heading2" />
          <Text text={expl} type="expl" />
        </div>
        <ProfileImage width="10rem" rounded="full" isSignup />
      </Modal.Body>
      <Modal.Footer>
        <Button
          colorPalette="colorTheme"
          onClick={moveNext}
          isValid={validationResult}
        >
          {button.ignore}
        </Button>
      </Modal.Footer>
    </div>
  );
};

export default ScreenProfileImage;
