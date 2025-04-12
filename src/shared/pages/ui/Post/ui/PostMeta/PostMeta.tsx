import styles from "./PostMeta.module.css";
import { joinClassNames } from "@shared/@common/utils";
import { Link } from "react-router-dom";
import { Text } from "@shared/@common/ui/components";
import {
  convertToLocalTime,
  MoreMenu,
  usePostContext,
  useRelativeTime,
} from "@shared/pages/ui/Post";

interface PostMetaProps {
  className?: string;
}

const PostMeta = ({ className }: PostMetaProps) => {
  const classNames = joinClassNames([styles["post__meta"], className]);

  const { _id, author, createdAt } = usePostContext();
  const { username, userId } = author;

  const convertToRelativeTime = useRelativeTime();
  return (
    <div className={classNames}>
      <div className={styles["wrapper"]}>
        <div className={styles["info"]}>
          <Link to={`/${userId}`} className={styles["username__wrapper"]}>
            <Text className={styles["username"]}>{username}</Text>
            <div className={styles["badge"]}>배지</div>
          </Link>
          <div className={styles["rest__wrapper"]}>
            <Link to={`/${userId}`} className={styles["userId"]}>
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
