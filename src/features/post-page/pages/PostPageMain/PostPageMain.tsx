import styles from "./PostPageMain.module.css";
import { joinClassNames } from "@shared/@common/utils";
import { Post } from "@shared/pages/ui/Post";
import { useSelector } from "react-redux";
import { selectIsCommentType, selectPost } from "@features/post-page/models";

interface PostPageMainProps {
  className?: string;
}

const PostPageMain = ({ className }: PostPageMainProps) => {
  const classNames = joinClassNames([styles["post__page__main"], className]);
  const post = useSelector(selectPost);
  const isCommentType = useSelector(selectIsCommentType);

  if (!post) return null;

  return (
    <div className={classNames}>
      <div className={styles["post"]}>
        <Post post={post}>
          <Post.Content>
            <Post.Header />
            <Post.Main>
              {isCommentType && (
                <Post.Left isShowingConnector={isCommentType} />
              )}
              <Post.Right>
                <Post.Meta isPostPage={!isCommentType} />
                <Post.Text className={styles["margin"]} />
                <Post.Media className={styles["margin"]} />
                <Post.Vote className={styles["margin"]} />
                <Post.Stats />
                <Post.Actions
                  className={styles["actions"]}
                  isPostPage={!isCommentType}
                />
                {!isCommentType && <Post.CommentEditor isCommentType={false} />}
              </Post.Right>
            </Post.Main>

            <Post.Footer>
              <Post.Thread isCommentType={isCommentType} />
              {isCommentType && (
                <Post.CommentEditor
                  className={styles["commentEditor"]}
                  isCommentType={true}
                />
              )}
              <Post.Comments />
            </Post.Footer>
          </Post.Content>
        </Post>
      </div>
    </div>
  );
};

export default PostPageMain;
