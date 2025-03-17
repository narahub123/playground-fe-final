import styles from "./MediaPreviewContainer.module.css";
import { useSelector } from "react-redux";
import { selectPostEditor } from "@shared/pages/ui/PostEditor/models/selectors";
import { Slider } from "@shared/pages/ui/PostEditor/ui/MediaPreviewContainer";
import { Icon } from "@shared/@common/ui/icons";
import { joinClassNames } from "@shared/@common/utils";
import { useState } from "react";

interface MediaPreviewContainerProps {}

const MediaPreviewContainer = ({}: MediaPreviewContainerProps) => {
  const { media } = useSelector(selectPostEditor);

  const [curStart, setCurStart] = useState(0);

  const moveRight = () => {
    setCurStart(curStart + 1);
  };

  const moveLeft = () => {
    setCurStart(curStart - 1);
  };

  return (
    <div className={styles["media__preview__container"]}>
      <Slider media={media} curStart={curStart} />
      <Icon
        iconName="arrowLeft"
        bgColor="black"
        iconColor="white"
        className={joinClassNames([
          styles["leading__icon"],
          curStart > 0
            ? styles["leading__icon--visible"]
            : styles["leading__icon--invisible"],
        ])}
        onClick={moveLeft}
      />
      <Icon
        iconName="arrowRight"
        bgColor="black"
        iconColor="white"
        className={joinClassNames([
          styles["trailing__icon"],
          media.length > 2 && curStart < media.length - 2
            ? styles["trailing__icon--visible"]
            : styles["trailing__icon--invisible"],
        ])}
        onClick={moveRight}
      />
    </div>
  );
};

export default MediaPreviewContainer;
