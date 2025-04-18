import styles from "./PostStats.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { joinClassNames } from "@shared/@common/utils";
import { usePostContext } from "../../hooks";
import { Text } from "@shared/@common/ui/components";
import { convertToLocalTime, formatNumber } from "../../utils";
import { Link } from "react-router-dom";

interface PostStatsProps {
  className?: string;
}

const PostStats = ({ className }: PostStatsProps) => {
  // 언어 설정
  const { views } = useLanguageContent(["post", "PostStats"]);

  const classNames = joinClassNames([styles["post__stats"], className]);

  const { createdAt, actions, author, _id: postId } = usePostContext();
  const { userId } = author;

  return (
    <div className={classNames}>
      <Link to={`/${userId}/status/${postId}`} className={styles["link"]}>
        <Text>{`${convertToLocalTime(createdAt)}`}</Text>
      </Link>
      <Text>
        <span className={styles["dot"]}>·</span>
        <span className={styles["emphasize"]}>
          {formatNumber(actions.views)}
        </span>
        <span>{` ${views}`}</span>
      </Text>
    </div>
  );
};

export default PostStats;
