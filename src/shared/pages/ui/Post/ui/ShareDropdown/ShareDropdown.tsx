import styles from "./ShareDropdown.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { joinClassNames } from "@shared/@common/utils";
import PostActionIcon from "../PostActionIcon/PostActionIcon";
import { postActionIcons } from "../..";
import { Text } from "@shared/@common/ui/components";

interface ShareDropdownProps {
  className?: string;
}

interface ShareOptionProps {
  option: keyof typeof postActionIcons;
}

const ShareOption = ({ option }: ShareOptionProps) => {
  // 언어 설정
  const { options } = useLanguageContent(["post", "ShareDropdown"]);
  return (
    <div className={styles["option"]}>
      <PostActionIcon iconName={option} iconTitle="" onClick={() => {}} />
      <Text className={styles["text"]}>{options[option]}</Text>
    </div>
  );
};

const ShareDropdown = ({ className }: ShareDropdownProps) => {
  // 언어 설정
  const { options } = useLanguageContent(["post", "ShareDropdown"]);

  const classNames = joinClassNames([styles["share__dropdown"], className]);

  return (
    <div className={classNames}>
      {Object.keys(options).map((option) => (
        <ShareOption
          option={option as keyof typeof postActionIcons}
          key={option}
        />
      ))}
    </div>
  );
};

export default ShareDropdown;
