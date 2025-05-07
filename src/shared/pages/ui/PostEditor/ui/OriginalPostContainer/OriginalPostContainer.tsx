import { useSelector } from "react-redux";
import styles from "./OriginalPostContainer.module.css";
import { joinClassNames } from "@shared/@common/utils";
import { selectOriginalPost } from "../../models/selectors";
import Post from "@shared/pages/ui/Post/ui";

interface OriginalPostContainerProps {
  className?: string;
}

const OriginalPostContainer = ({ className }: OriginalPostContainerProps) => {
  const classNames = joinClassNames([
    styles["original__post__container"],
    className,
  ]);

  const originalPost = useSelector(selectOriginalPost);

  if (!originalPost) return null;

  return (
    <div className={classNames}>
      <Post post={originalPost} linkDisabled>
        <div className={styles["upper"]}>
          <Post.Meta isQuote />
        </div>
        <div
          className={joinClassNames([
            styles["lower"],
            originalPost.media && originalPost.media.length > 0
              ? styles["lower__with__image"]
              : "",
          ])}
        >
          <Post.Text className={styles["text"]} />

          {originalPost.vote && (
            <div className={styles["vote"]}>{"이 투표 표시하기"}</div>
          )}
        </div>
        <Post.Media className={styles["media"]} />
      </Post>
    </div>
  );
};

export default OriginalPostContainer;
