import { Text } from "@shared/@common/ui/components";
import styles from "./PostMeta.module.css";
import { joinClassNames } from "@shared/@common/utils";
import { usePostContext } from "@shared/pages/ui/Post";
import { IoIosMore } from "react-icons/io";
import { Link } from "react-router-dom";

interface PostMetaProps {
  className?: string;
}

const PostMeta = ({ className }: PostMetaProps) => {
  const classNames = joinClassNames([styles["post__meta"], className]);

  const { author, createdAt } = usePostContext();

  const { username, userId } = author;

  return (
    <div className={classNames}>
      <div className={styles["wrapper"]}>
        <div className={styles["info"]}>
          <Link to={`/${userId}`} className={styles["username__wrapper"]}>
            <Text className={styles["username"]}>{username}</Text>
            <div className={styles["badge"]}>배지</div>
          </Link>
          <div className={styles["rest__wrapper"]}>
            <Text>{`@${userId}`}</Text>
            <p>·</p>
            <Text>{createdAt}</Text>
          </div>
        </div>
        <div className={styles["button"]}>
          <IoIosMore />
        </div>
      </div>
    </div>
  );
};

export default PostMeta;
