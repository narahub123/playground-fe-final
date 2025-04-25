import styles from "./PostMeta.module.css";
import { joinClassNames } from "@shared/@common/utils";
import { Link } from "react-router-dom";
import { ProfileImage, Text } from "@shared/@common/ui/components";
import {
  convertToLocalTime,
  MoreMenu,
  ProfileDropdown,
  useHoverDropdown,
  usePostContext,
  useRelativeTime,
} from "@shared/pages/ui/Post";
import { useRef } from "react";
import { defaultProfileImage } from "@shared/@common/assets";

interface PostMetaProps {
  className?: string;
  isPostPage?: boolean;
}

const PostMeta = ({ className, isPostPage = false }: PostMetaProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const usernameRef = useRef<HTMLAnchorElement>(null);
  const userIdRef = useRef<HTMLAnchorElement>(null);
  const classNames = joinClassNames([styles["post__meta"], className]);

  const { _id, author, createdAt } = usePostContext();
  const { username, userId, profileImage } = author;

  const convertToRelativeTime = useRelativeTime();

  const {
    rect,
    isOpen,
    handleMouseEnter,
    handleMouseLeave,
    onClose,
    profileInfo,
    isLoading,
  } = useHoverDropdown();

  return (
    <div className={classNames} ref={containerRef}>
      <ProfileDropdown
        isOpen={isOpen}
        isLoading={isLoading}
        onMouseEnter={() => handleMouseEnter()}
        onMouseLeave={() => handleMouseLeave()}
        top={rect.top}
        left={rect.left}
        onClose={onClose}
        profileInfo={profileInfo}
      />
      <div className={styles["container"]}>
        <div className={styles["wrapper"]}>
          {isPostPage && (
            <div className={styles["image"]}>
              <Link to={`/${userId}`}>
                <ProfileImage
                  width={"40px"}
                  rounded="full"
                  src={profileImage || defaultProfileImage}
                  className={styles["profile_image"]}
                  onMouseEnter={() => handleMouseEnter(containerRef, userId)}
                  onMouseLeave={() => handleMouseLeave()}
                />
              </Link>
            </div>
          )}
          <div
            className={isPostPage ? styles["info--postpage"] : styles["info"]}
          >
            <Link
              to={`/${userId}`}
              className={styles["username__wrapper"]}
              onMouseEnter={() => handleMouseEnter(usernameRef, author.userId)}
              onMouseLeave={() => handleMouseLeave()}
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
                onMouseLeave={() => handleMouseLeave()}
                ref={userIdRef}
              >
                <Text>{`@${userId}`}</Text>
              </Link>
              {!isPostPage && <Text>·</Text>}
              {!isPostPage && (
                <Link
                  to={`/${userId}/status/${_id}`}
                  data-title={convertToLocalTime(createdAt)}
                  className={styles["time"]}
                >
                  <Text>{convertToRelativeTime(createdAt)}</Text>
                </Link>
              )}
            </div>
          </div>
        </div>
        <div
          className={styles["button"]}
          style={{ top: `${isPostPage ? "6px" : "-5px"}` }}
        >
          <MoreMenu />
        </div>
      </div>
    </div>
  );
};

export default PostMeta;
