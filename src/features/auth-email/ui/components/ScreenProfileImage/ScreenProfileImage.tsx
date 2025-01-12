import { defaultProfileImage, google } from "@shared/@common/assets";
import styles from "./ScreenProfileImage.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { Button, Lightbox, Modal, Text } from "@shared/@common/ui/components";
import {
  useModalContext,
  useModalPagination,
} from "@shared/@common/ui/components/Modal/hooks";
import { joinClassNames } from "@shared/@common/utils";
import {
  useLightboxDisclosure,
  useLightboxPagination,
  useLightboxPostDisclosure,
} from "@shared/@common/ui/components/Lightbox/hooks";

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

  /**
   * `joinClassNames` 함수는 `styles["ScreenProfileImage]"`와 `className`을 결합하여
   * 최종적인 클래스 이름을 반환합니다. 이를 통해 여러 CSS 클래스를 결합하고,
   * 최종적으로 하나의 `className` 값으로 전달됩니다.
   *
   * @param {string[]} classNames - 결합할 클래스 이름들의 배열.
   * @returns {string} - 결합된 클래스 이름.
   */
  const classNames = joinClassNames([
    styles["screen__profile__image"],
    className,
  ]);

  const { isLightboxOpen, onCloseLightbox } = useLightboxDisclosure();

  const { isLightboxPostOpen, onOpenLightboxPost, onCloseLightboxPost } =
    useLightboxPostDisclosure();

  console.log(isLightboxPostOpen);

  return (
    <div className={classNames}>
      <Lightbox
        images={[defaultProfileImage, google]}
        isLightboxOpen={isLightboxOpen}
        onClose={onCloseLightbox}
        isLightboxPostOpen={isLightboxPostOpen}
        onOpenLightboxPost={onOpenLightboxPost}
        onCloseLightboxPost={onCloseLightboxPost}
      >
        <Lightbox.Main>
          <Lightbox.Top>
            <Lightbox.CloseButton />
            <Lightbox.PrevButton />
            <Lightbox.Images />
            <Lightbox.DisplayButton />
            <Lightbox.NextButton />
          </Lightbox.Top>
          <Lightbox.Bottom>하이</Lightbox.Bottom>
        </Lightbox.Main>
        <Lightbox.Side>옆</Lightbox.Side>
      </Lightbox>
      <Modal.Body className={styles[`screen__profile__image__body`]}>
        <div className={styles[`screen__prifile__image__body__header`]}>
          <Text text={title} type="heading2" />
          <Text text={expl} type="expl" />
        </div>
        djdkj
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
