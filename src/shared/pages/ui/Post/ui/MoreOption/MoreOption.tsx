import styles from "./MoreOption.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { Text } from "@shared/@common/ui/components";
import { joinClassNames } from "@shared/@common/utils";
import {
  MoreOptionIcon,
  MoreOptionType,
  usePostContext,
  useUserRelationStatus,
} from "@shared/pages/ui/Post";

interface MoreOptionProps {
  className?: string;
  disabled?: boolean;
  option: MoreOptionType;
}

const MoreOption = ({
  className,
  disabled = false,
  option,
}: MoreOptionProps) => {
  // 언어 설정
  const { text } = useLanguageContent(["post", "MoreOption"]);
  const classNames = joinClassNames([styles["more__option"], className]);

  const { author } = usePostContext();
  const { userId } = author;

  const { isFollowing, isMuting, isBlocking } = useUserRelationStatus();

  const toggle =
    option === "following"
      ? isFollowing(userId)
      : option === "mute"
      ? isMuting(userId)
      : option === "block"
      ? isBlocking(userId)
      : undefined;

  return (
    <button className={classNames} type="button" disabled={disabled}>
      <MoreOptionIcon option={option} toggle={toggle} />
      <Text>{text(option, userId, toggle)}</Text>
    </button>
  );
};

export default MoreOption;
