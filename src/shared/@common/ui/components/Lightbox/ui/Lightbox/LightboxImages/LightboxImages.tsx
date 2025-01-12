import styles from "./LightboxImages.module.css";
import { joinClassNames } from "@shared/@common/utils";
import { Image } from "@shared/@common/ui/components";
import { useLightboxContext } from "@shared/@common/ui/components/Lightbox/hooks";

interface LightboxImagesProps {
  className?: string;
}

const LightboxImages = ({ className }: LightboxImagesProps) => {
  const classNames = joinClassNames([
    styles["lightbox__image__wrapper"],
    className,
  ]);

  const { images, curImageIndex } = useLightboxContext();

  return (
    <div className={classNames}>
      <div className={styles["lightbox__image__container"]}>
        <Image
          src={images[curImageIndex]}
          className={styles[`lightbox__image`]}
          fit="contain"
        />
      </div>
    </div>
  );
};

export default LightboxImages;
