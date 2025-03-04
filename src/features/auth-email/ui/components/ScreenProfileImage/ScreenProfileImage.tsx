import styles from "./ScreenProfileImage.module.css";
import {
  useLanguageContent,
  useValidationChecker,
} from "@shared/@common/models/hooks";
import {
  Button,
  Modal,
  ProfileImageUploader,
  Text,
} from "@shared/@common/ui/components";
import {
  useModalContext,
  useModalPagination,
} from "@shared/@common/ui/components/Modal/hooks";
import { joinClassNames } from "@shared/@common/utils";
import { useSelector } from "react-redux";
import { getUserInSignup } from "@shared/auth/models/selectors";
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
          <Text type="heading2">{title}</Text>
          <Text type="expl">{expl}</Text>
        </div>
        <ProfileImageUploader width="10rem" rounded="full" isSignup />
      </Modal.Body>
      <Modal.Footer>
        <Button
          onClick={moveNext}
          isValid={validationResult}
          width="100%"
          bgColor="colorTheme"
          rounded="2xl"
        >
          {user.profileImage ? button.next : button.skip}
        </Button>
      </Modal.Footer>
    </div>
  );
};

export default ScreenProfileImage;
