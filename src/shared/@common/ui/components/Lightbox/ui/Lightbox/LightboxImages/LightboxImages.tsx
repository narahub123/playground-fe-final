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
  const classNames = joinClassNames([styles["lightbox__images"], className]);

  return (
    <div className={classNames}>
      <Image src={images[curImage]} />
    </div>
  );
};

export default LightboxImages;
