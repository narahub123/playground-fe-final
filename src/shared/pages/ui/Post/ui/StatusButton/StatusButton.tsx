import styles from "./StatusButton.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { Button } from "@shared/@common/ui/components";
import { joinClassNames } from "@shared/@common/utils";
import { useUserRelationStatus } from "../../hooks";

interface StatusButtonProps {
  className?: string;
  userId: string;
}

const StatusButton = ({ className, userId }: StatusButtonProps) => {
  // 언어 설정
  const { text } = useLanguageContent(["post", "StatusButton"]);

  const { isBlocking, isFollowing } = useUserRelationStatus();

  const classNames = joinClassNames([
    styles["status__button"],
    !isBlocking(userId) && isFollowing(userId) ? styles["following"] : "",
    className,
  ]);

  const handleClick = () => {
    if (isBlocking(userId)) {
      console.log("차단 해제하기");
      return;
    } else if (isFollowing(userId)) {
      console.log("팔로우 해제하기");
      return;
    } else {
      console.log("팔로우 하기");
    }
  };

  return (
    <Button
      isValid
      onClick={handleClick}
      className={classNames}
      rounded="2xl"
      variant={
        isBlocking(userId) ? "solid" : isFollowing(userId) ? "outline" : "solid"
      }
      bgColor={
        isBlocking(userId)
          ? "red"
          : isFollowing(userId)
          ? "transparent"
          : "black"
      }
      onMouseEnter={(e) =>
        (e.currentTarget.innerHTML = isBlocking(userId)
          ? text.unblock
          : isFollowing(userId)
          ? text.unfollow
          : text.follow)
      }
      onMouseOut={(e) =>
        (e.currentTarget.innerHTML = isBlocking(userId)
          ? text.blocking
          : isFollowing(userId)
          ? text.following
          : text.follow)
      }
    >
      {isBlocking(userId)
        ? text.blocking
        : isFollowing(userId)
        ? text.following
        : text.follow}
    </Button>
  );
};

export default StatusButton;
