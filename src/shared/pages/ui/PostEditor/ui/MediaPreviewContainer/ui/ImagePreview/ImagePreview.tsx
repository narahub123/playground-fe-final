import { Image } from "@shared/@common/ui/components";
import styles from "./ImagePreview.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { Icon } from "@shared/@common/ui/icons";
import { joinClassNames } from "@shared/@common/utils";
import PreviewBadge from "../PreviewBadge/PreviewBadge";
import { useAppDispatch } from "@app/store";
import { removePostEditorImage } from "@shared/pages/ui/PostEditor/models/slices/postEditorSlice";

interface ImagePreviewProps {
  image: string;
  className?: string;
  style: React.CSSProperties;
}

const ImagePreview = ({ image, className, style }: ImagePreviewProps) => {
  const dispatch = useAppDispatch();

  // 언어 설정
  const { iconTitle, imgAlt } = useLanguageContent([
    "components",
    "ImagePreview",
  ]);

  const handleDelete = () => {
    dispatch(removePostEditorImage(image));
  };

  return (
    <div
      className={joinClassNames([styles["image__preview"], className])}
      style={style}
    >
      <Icon
        iconName="close"
        className={styles["image__preview__icon"]}
        onClick={handleDelete}
        title={iconTitle}
        bgColor="black"
        iconColor="white"
      />
      <Image
        src={image}
        alt={imgAlt}
        rounded="md"
        className={styles["image"]}
        fit="cover"
        height={"100%"}
      />
      <PreviewBadge url={image} />
    </div>
  );
};

export default ImagePreview;
