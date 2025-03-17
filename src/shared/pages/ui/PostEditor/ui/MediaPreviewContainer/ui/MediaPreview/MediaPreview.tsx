import { Icon } from "@shared/@common/ui/icons";
import styles from "./MediaPreview.module.css";
import { joinClassNames } from "@shared/@common/utils";
import PreviewBadge from "../PreviewBadge/PreviewBadge";
import { Image } from "@shared/@common/ui/components";
import { useLanguageContent } from "@shared/@common/models/hooks";

interface MediaPreviewProps {
  medium: string;
  style: React.CSSProperties;
  handleDelete: () => void;
  className?: string;
}

const MediaPreview = ({
  className,
  medium,
  handleDelete,
  style,
}: MediaPreviewProps) => {
  const classNames = joinClassNames([styles["media__preview"], className]);

  const { iconTitle, imgAlt } = useLanguageContent([
    "components",
    "MediaPreview",
  ]);

  return (
    <div className={classNames} style={style}>
      <Icon
        iconName="close"
        className={styles["media__preview__icon"]}
        onClick={handleDelete}
        title={iconTitle}
        bgColor="black"
        iconColor="white"
      />
      {medium.includes("image/") ? (
        <Image
          src={medium}
          alt={imgAlt}
          rounded="md"
          className={styles["image"]}
          fit="cover"
          height={"100%"}
        />
      ) : (
        <></>
      )}

      <PreviewBadge url={medium} />
    </div>
  );
};

export default MediaPreview;
