import styles from "./PostMeta.module.css";
import { joinClassNames } from "@shared/@common/utils";
import { Link } from "react-router-dom";
import { Text } from "@shared/@common/ui/components";
import {
  convertToLocalTime,
  MoreMenu,
  ProfileDropdown,
  useHoverDropdown,
  usePostContext,
  useRelativeTime,
} from "@shared/pages/ui/Post";
import { useRef } from "react";

interface PostMetaProps {
  className?: string;
}

const PostMeta = ({ className }: PostMetaProps) => {
  const usernameRef = useRef<HTMLAnchorElement>(null);
  const userIdRef = useRef<HTMLAnchorElement>(null);
  const classNames = joinClassNames([styles["post__meta"], className]);

  const { _id, author, createdAt } = usePostContext();
  const { username, userId } = author;

  const convertToRelativeTime = useRelativeTime();

  const {
    rect,
    isOpen,
    handleMouseEnter,
    handleMouseLeave,
    onClose,
    profileInfo,
  } = useHoverDropdown();

  return (
    <div className={classNames}>
      <ProfileDropdown
        isOpen={isOpen}
        onMouseEnter={() => handleMouseEnter()}
        onMouseLeave={() => handleMouseLeave()}
        top={rect.top}
        left={rect.left}
        onClose={onClose}
        profileInfo={profileInfo}
      />
      <div className={styles["wrapper"]}>
        <div className={styles["info"]}>
          <Link
            to={`/${userId}`}
            className={styles["username__wrapper"]}
            onMouseEnter={() => handleMouseEnter(usernameRef, author.userId)}
            onMouseLeave={handleMouseLeave}
            ref={usernameRef}
          >
            <Text className={styles["username"]}>{username}</Text>
            <div className={styles["badge"]}>배지</div>
          </Link>
          <div className={styles["rest__wrapper"]}>
            <Link
              to={`/${userId}`}
              className={styles["userId"]}
              onMouseEnter={() => handleMouseEnter(userIdRef, author.userId)}
              onMouseLeave={handleMouseLeave}
              ref={userIdRef}
            >
              <Text>{`@${userId}`}</Text>
            </Link>
            <Text>·</Text>
            <Link
              to={`/${userId}/status/${_id}`}
              data-title={convertToLocalTime(createdAt)}
              className={styles["time"]}
            >
              <Text>{convertToRelativeTime(createdAt)}</Text>
            </Link>
          </div>
        </div>
        <div className={styles["button"]}>
          <MoreMenu />
        </div>
      </div>
    </div>
  );
};

export default PostMeta;
