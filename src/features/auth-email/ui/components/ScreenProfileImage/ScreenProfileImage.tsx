import { defaultProfileImage } from "@shared/@common/assets";
import styles from "./ScreenProfileImage.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
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

interface ScreenProfileImageProps {
  className?: string;
  disabled?: boolean;
}

const ScreenProfileImage = ({ className }: ScreenProfileImageProps) => {
  const { setScreenValidations } = useModalContext();
  const { moveNext } = useModalPagination();

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
        <ProfileImage src={defaultProfileImage} width="10rem" rounded="full" />
      </Modal.Body>
      <Modal.Footer>
        <Button colorPalette="colorTheme" onClick={moveNext}>
          {button.ignore}
        </Button>
      </Modal.Footer>
    </div>
  );
};

export default ScreenProfileImage;
