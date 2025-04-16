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
}

const PostVideoControls = ({ className, controls }: PostVideoControlsProps) => {
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
          <div className={styles["icon__container"]}>
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
          <div className={styles["icon__container"]}>
            {controls.isMuting ? (
              <PostVideoIcon iconName="unmute" />
            ) : (
              <PostVideoIcon iconName="mute" />
            )}
          </div>
          <div className={styles["icon__container"]}>
            <PostVideoIcon iconName="settings" />
          </div>
          <div className={styles["icon__container"]}>
            <PostVideoIcon iconName="pip" />
          </div>
          <div className={styles["icon__container"]}>
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
