import styles from "./PostVideoControls.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { Text } from "@shared/@common/ui/components";
import { joinClassNames } from "@shared/@common/utils";
import {
  formatVideoTime,
  IRect,
  IVideoControls,
  PostVideoIcon,
  PostVideoSettingsDropdown,
  Progressbar,
  VideoQuality,
  VideoSpeed,
} from "@shared/pages/ui/Post";
import { useLayoutEffect, useRef, useState } from "react";

interface PostVideoControlsProps {
  className?: string;
  controls: IVideoControls;
  onClick: Record<
    string,
    (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
  >;
  onClose: () => void;
  handleSpeed: (speed: VideoSpeed) => void;
  handleQuality: (quality: VideoQuality) => void;
}

const PostVideoControls = ({
  className,
  controls,
  onClick,
  onClose,
  handleQuality,
  handleSpeed,
}: PostVideoControlsProps) => {
  const settingsRef = useRef<HTMLDivElement>(null);
  // 언어 설정
  const {} = useLanguageContent(["post", "PostVideoControls"]);

  //드롭다운 관련 상태
  const [rect, setRect] = useState<IRect>({});

  useLayoutEffect(() => {
    if (!settingsRef.current) return;

    const getTargetPosition = () => {
      if (!settingsRef.current) return;
      const settings = settingsRef.current;
      const { top, right, bottom } = settings?.getBoundingClientRect();

      setRect({
        top: top + window.scrollY,
        right: window.innerWidth - right,
        bottom,
      });
    };

    getTargetPosition();

    window.addEventListener("resize", getTargetPosition);
    window.addEventListener("scroll", getTargetPosition);

    return () => {
      window.removeEventListener("resize", getTargetPosition);
      window.removeEventListener("scroll", getTargetPosition);
    };
  }, []);

  const classNames = joinClassNames([
    styles["post__video__controls"],
    className,
  ]);

  return (
    <div className={classNames}>
      <PostVideoSettingsDropdown
        isOpen={controls.isSettingsOpen}
        onClose={onClose}
        top={rect.top}
        right={rect.right}
        handleQuality={handleQuality}
        handleSpeed={handleSpeed}
        controls={controls}
      />
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
            ref={settingsRef}
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
