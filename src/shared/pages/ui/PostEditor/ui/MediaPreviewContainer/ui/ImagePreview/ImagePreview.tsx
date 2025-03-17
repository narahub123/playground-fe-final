import { Image } from "@shared/@common/ui/components";
import styles from "./ImagePreview.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { Icon } from "@shared/@common/ui/icons";

interface ImagePreviewProps {
  image: string;
}

const ImagePreview = ({ image }: ImagePreviewProps) => {
  // 언어 설정
  const { iconTitle, imgAlt } = useLanguageContent([
    "components",
    "ImagePreview",
  ]);

  return (
    <div className={styles["image__preview"]}>
      <Icon
        iconName="close"
        className={styles["image__preview__icon"]}
        onClick={() => {}}
        title={iconTitle}
        bgColor="black"
        iconColor="white"
      />
      <Image src={image} alt={imgAlt} rounded="md" />
    </div>
  );
};

export default ImagePreview;
