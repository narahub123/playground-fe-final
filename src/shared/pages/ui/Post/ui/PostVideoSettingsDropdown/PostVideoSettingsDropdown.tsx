import styles from "./PostVideoSettingsDropdown.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { Dropdown, Text } from "@shared/@common/ui/components";
import { joinClassNames } from "@shared/@common/utils";
import { useState } from "react";
import {
  IVideoControls,
  PostVideoIcon,
  postVideoIcons,
  VideoQuality,
  videoQualityOptions,
  VideoSpeed,
  videoSpeedOptions,
} from "@shared/pages/ui/Post";

interface PostVideoSettingsDropdownProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
  top?: number;
  right?: number;
  handleSpeed: (speed: VideoSpeed) => void;
  handleQuality: (quality: VideoQuality) => void;
  controls: IVideoControls;
}

const PostVideoSettingsDropdown = ({
  className,
  onClose,
  isOpen,
  top,
  right,
  handleQuality,
  handleSpeed,
  controls,
}: PostVideoSettingsDropdownProps) => {
  // 언어 설정
  const { settings } = useLanguageContent([
    "post",
    "PostVideoSettingsDropdown",
  ]);

  const [page, setPage] = useState(0);

  const classNames = joinClassNames([
    styles["post__video__settings__dropdown"],
    className,
  ]);

  const handleOption = (page: number) => {
    setPage(page);
  };

  const list =
    page === 0
      ? Object.keys(settings)
      : page === 1
      ? videoSpeedOptions
      : videoQualityOptions;

  return (
    <Dropdown
      name="video-settings"
      isOpen={isOpen}
      onClose={onClose}
      top={top}
      right={right}
      className={classNames}
    >
      <div className={styles["wrapper"]}>
        {page !== 0 && (
          <div className={styles["header__wrapper"]}>
            <button
              className={styles["header"]}
              onClick={() => handleOption(0)}
            >
              <PostVideoIcon iconName="backward" />
              <Text className={styles["header__text"]}>
                {settings["speed"]}
              </Text>
            </button>
          </div>
        )}
        {list.map((option) => (
          <button
            key={option}
            className={page === 0 ? styles["page"] : styles["option"]}
            onClick={
              page === 0
                ? () => handleOption(option === "speed" ? 1 : 2)
                : page === 1
                ? () => handleSpeed(option as VideoSpeed)
                : () => handleQuality(option as VideoQuality)
            }
          >
            {page === 0 && (
              <PostVideoIcon iconName={option as keyof typeof postVideoIcons} />
            )}

            {page === 0 ? (
              <div className={styles["text__wrapper"]}>
                <Text className={styles["title"]}>{settings[option]}</Text>
                <Text>·</Text>
                <Text className={styles["value"]}>{`${
                  controls[option as keyof IVideoControls]
                }`}</Text>
              </div>
            ) : (
              <Text>{option}</Text>
            )}

            {page === 1 &&
              (option === controls.speed ? (
                <PostVideoIcon iconName="select" className={styles["select"]} />
              ) : (
                <PostVideoIcon iconName="unselect" />
              ))}
            {page === 2 &&
              (option === controls.quality ? (
                <PostVideoIcon iconName="select" className={styles["select"]} />
              ) : (
                <PostVideoIcon iconName="unselect" />
              ))}
          </button>
        ))}
      </div>
    </Dropdown>
  );
};

export default PostVideoSettingsDropdown;
