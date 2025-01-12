import styles from "./LightboxImages.module.css";
import { joinClassNames } from "@shared/@common/utils";
import { Image } from "@shared/@common/ui/components";

interface LightboxImagesProps {
  curImage: number;
  images: string[];
  className?: string;
}

const LightboxImages = ({
  curImage = 0,
  images,
  className,
}: LightboxImagesProps) => {
  const classNames = joinClassNames([
    styles["lightbox__image__wrapper"],
    className,
  ]);

  return (
    <div className={classNames}>
      <div className={styles["lightbox__image__container"]}>
        <Image
          src={images[curImage]}
          className={styles[`lightbox__image`]}
          fit="contain"
        />
      </div>
    </div>
  );
};

export default LightboxImages;
