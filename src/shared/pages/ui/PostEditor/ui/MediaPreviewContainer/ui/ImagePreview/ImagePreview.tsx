import { Image } from "@shared/@common/ui/components";
import styles from "./ImagePreview.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { Icon } from "@shared/@common/ui/icons";
import { joinClassNames } from "@shared/@common/utils";

interface ImagePreviewProps {
  image: string;
  className?: string;
  style: React.CSSProperties;
}

const ImagePreview = ({ image, className, style }: ImagePreviewProps) => {
  // 언어 설정
  const { iconTitle, imgAlt } = useLanguageContent([
    "components",
    "ImagePreview",
  ]);

  return (
    <div
      className={joinClassNames([styles["image__preview"], className])}
      style={style}
    >
      <Icon
        iconName="close"
        className={styles["image__preview__icon"]}
        onClick={() => {}}
        title={iconTitle}
        bgColor="black"
        iconColor="white"
      />
      <Image src={image} alt={imgAlt} rounded="md" style={{ flexShrink: 0 }} />
    </div>
  );
};

export default ImagePreview;
