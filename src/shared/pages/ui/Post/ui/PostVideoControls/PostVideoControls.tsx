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
  DialDropdown,
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
  onDialClose: () => void;
  onDialOpen: () => void;
  handleSpeed: (speed: VideoSpeed) => void;
  handleQuality: (quality: VideoQuality) => void;
  handleCurrentTime: (newCurrentTime: number) => void;
  handleCurrentVolume: (newVolume: number) => void;
}

const PostVideoControls = ({
  className,
  controls,
  onClick,
  onClose,
  handleQuality,
  handleSpeed,
  handleCurrentTime,
  handleCurrentVolume,
  onDialClose,
  onDialOpen,
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
    <div
      className={classNames}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
      }}
    >
      <PostVideoSettingsDropdown
        isOpen={controls.isSettingsOpen}
        onClose={onClose}
        top={rect.top}
        right={rect.right}
        handleQuality={handleQuality}
        handleSpeed={handleSpeed}
        controls={controls}
      />
      <Progressbar
        time={controls.time}
        handleTime={onClick["time"]}
        handleCurrentTime={handleCurrentTime}
      />
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
          <div
            className={styles["volume"]}
            onMouseEnter={onDialOpen}
            onMouseLeave={onDialClose}
          >
            <div className={styles["dial"]}></div>
            <DialDropdown
              volume={controls.volume}
              handleVolume={onClick["volume"]}
              handleCurrentVolume={handleCurrentVolume}
              isOpen={controls.isDialOpen}
            />
            <div
              className={styles["icon__container"]}
              onClick={onClick["mute"]}
            >
              {controls.isMuting ? (
                <PostVideoIcon iconName="mute" />
              ) : controls.volume === 0 ? (
                <PostVideoIcon iconName="off" />
              ) : 0 < controls.volume && controls.volume < 0.33 ? (
                <PostVideoIcon iconName="low" />
              ) : 0.33 <= controls.volume && controls.volume < 0.75 ? (
                <PostVideoIcon iconName="medium" />
              ) : (
                <PostVideoIcon iconName="high" />
              )}
            </div>
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
