import styles from "./PostVideoControls.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { Text } from "@shared/@common/ui/components";
import { joinClassNames } from "@shared/@common/utils";
import {
  formatVideoTime,
  IVideoControls,
  PostVideoIcon,
  Progressbar,
} from "@shared/pages/ui/Post";

interface PostVideoControlsProps {
  className?: string;
  controls: IVideoControls;
  onClick: Record<
    string,
    (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
  >;
}

const PostVideoControls = ({
  className,
  controls,
  onClick,
}: PostVideoControlsProps) => {
  // 언어 설정
  const {} = useLanguageContent(["post", "PostVideoControls"]);

  const classNames = joinClassNames([
    styles["post__video__controls"],
    className,
  ]);

  return (
    <div className={classNames}>
      <Progressbar />
      <div className={styles["btn__wrapper"]}>
        <div className={styles["left"]}>
          <div className={styles["icon__container"]} onClick={onClick["play"]}>
            {controls.isPlaying ? (
              <PostVideoIcon iconName="pause" />
            ) : (
              <PostVideoIcon iconName="play" />
            )}
          </div>
        </div>
        <div className={styles["right"]}>
          <div className={styles["time"]}>
            <Text>{`${formatVideoTime(
              controls.time.currentTime
            )} / ${formatVideoTime(controls.time.duration)}`}</Text>
          </div>
          <div className={styles["icon__container"]} onClick={onClick["mute"]}>
            {controls.isMuting ? (
              <PostVideoIcon iconName="mute" />
            ) : (
              <PostVideoIcon iconName="unmute" />
            )}
          </div>
          <div
            className={styles["icon__container"]}
            onClick={onClick["settings"]}
          >
            <PostVideoIcon iconName="settings" />
          </div>
          <div className={styles["icon__container"]} onClick={onClick["pip"]}>
            <PostVideoIcon iconName="pip" />
          </div>
          <div
            className={styles["icon__container"]}
            onClick={onClick["fullscreen"]}
          >
            {controls.isFullscreen ? (
              <PostVideoIcon iconName="closeFullscreen" />
            ) : (
              <PostVideoIcon iconName="openFullscreen" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostVideoControls;
