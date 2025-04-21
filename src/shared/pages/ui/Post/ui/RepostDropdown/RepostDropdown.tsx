import styles from "./RepostDropdown.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { Text } from "@shared/@common/ui/components";
import { joinClassNames } from "@shared/@common/utils";
import PostActionIcon from "../PostActionIcon/PostActionIcon";
import { postActionIcons } from "../..";

interface RepostDropdownProps {
  className?: string;
}

interface OptionProps {
  text: string;
  option: string;
}

const Option = ({ text, option }: OptionProps) => {
  return (
    <div className={styles["option"]}>
      <PostActionIcon
        iconName={option as keyof typeof postActionIcons}
        iconTitle=""
        onClick={() => {}}
      />
      <Text className={styles["text"]}>{text}</Text>
    </div>
  );
};

const RepostDropdown = ({ className }: RepostDropdownProps) => {
  // 언어 설정
  const { options } = useLanguageContent(["post", "RepostDropdown"]);

  const classNames = joinClassNames([styles["repost__dropdown"], className]);

  return (
    <div className={classNames}>
      {Object.keys(options).map((key) => (
        <Option key={key} option={key} text={options[key](false)} />
      ))}
    </div>
  );
};

export default RepostDropdown;
