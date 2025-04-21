import styles from "./PostAction.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { Text } from "@shared/@common/ui/components";
import { joinClassNames } from "@shared/@common/utils";
import {
  formatNumber,
  PostActionIcon,
  postActionIcons,
  PostActionType,
  RepostDropdown,
  ShareDropdown,
} from "@shared/pages/ui/Post";

interface PostActionProps {
  className?: string;
  action: PostActionType;
}

const PostAction = ({ action }: PostActionProps) => {
  const { title } = useLanguageContent(["post", "PostAction"]);
  const iconName: keyof typeof postActionIcons =
    action === "comments"
      ? "commentOutline"
      : action === "reposts"
      ? "repost"
      : action === "likes"
      ? "likeOutline"
      : "view";

  const className =
    action === "reposts"
      ? styles["green"]
      : action === "likes"
      ? styles["red"]
      : styles["cornflower"];

  const handleClick: Record<
    Exclude<PostActionType, "extra"> | "bookmarks" | "share",
    (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
  > = {
    comments: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      e.preventDefault();
      e.stopPropagation();
      console.log("답글");
    },
    reposts: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      e.preventDefault();
      e.stopPropagation();
      console.log("재게시");
    },
    likes: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      e.preventDefault();
      e.stopPropagation();
      console.log("좋아요");
    },
    views: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      e.preventDefault();
      e.stopPropagation();
      console.log("보기");
    },
    bookmarks: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      e.preventDefault();
      e.stopPropagation();
      console.log("북마크");
    },
    share: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      e.preventDefault();
      e.stopPropagation();
      console.log("공유");
    },
  };
  return (
    <div className={styles["post__action"]}>
      {action === "extra" ? (
        <span className={styles["extra"]}>
          <span
            className={joinClassNames([styles["action__wrapper"], className])}
          >
            <PostActionIcon
              iconName={"bookmarkOutline"}
              left={"-0.5rem"}
              className={styles["icon"]}
              iconTitle={title["bookmarks"]}
              onClick={handleClick["bookmarks"]}
            />
          </span>
          <span
            className={joinClassNames([styles["action__wrapper"], className])}
          >
            {<ShareDropdown />}
            <PostActionIcon
              iconName={"share"}
              right={"-0.5rem"}
              className={styles["icon"]}
              iconTitle={title["share"]}
              onClick={handleClick["share"]}
            />
          </span>
        </span>
      ) : (
        <span
          className={joinClassNames([styles["action__wrapper"], className])}
        >
          {action === "reposts" && <RepostDropdown />}
          <PostActionIcon
            iconName={iconName}
            left={"-0.5rem"}
            className={styles["icon"]}
            iconTitle={title[action]}
            onClick={handleClick[action]}
          />
          <Text className={styles["stat"]}>{formatNumber(1000)}</Text>
        </span>
      )}
    </div>
  );
};

export default PostAction;
