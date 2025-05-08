import Post from "..";
import { usePostContext } from "../../hooks";
import styles from "./PostOriginalPost.module.css";
import { joinClassNames } from "@shared/@common/utils";

interface PostOriginalPostProps {
  className?: string;
}

const PostOriginalPost = ({ className }: PostOriginalPostProps) => {
  const classNames = joinClassNames([styles["post__originalpost"], className]);

  const { type, originalPost } = usePostContext();

  if (!originalPost || type !== "quote") return null;

  return (
    <div className={classNames}>
      <Post post={originalPost} postType="post">
        <Post.Content>
          <Post.Main className={styles["main"]}>
            <Post.Right>
              <div className={styles["upper"]}>
                <Post.Meta isQuote={true} />
              </div>
              <div className={styles["lower"]}>
                <Post.Text className={styles["text"]} />
                <Post.Vote />
              </div>
              <Post.Media className={styles["media"]} />
            </Post.Right>
          </Post.Main>
        </Post.Content>
      </Post>
    </div>
  );
};

export default PostOriginalPost;
