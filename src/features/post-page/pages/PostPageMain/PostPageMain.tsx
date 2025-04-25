import styles from "./PostPageMain.module.css";
import { joinClassNames } from "@shared/@common/utils";

interface PostPageMainProps {
  className?: string;
}

const PostPageMain = ({ className }: PostPageMainProps) => {
  const classNames = joinClassNames([styles["post__page__main"], className]);

  return (
    <div className={classNames}>
      <div className={styles["post"]}>포스트</div>
      <div className={styles["comment__editor"]}>댓글 쓰기</div>
      <div className={styles["comment__list"]}>
        <div className={styles["comment__wrapper"]}>
          <div className={styles["comment"]}>댓글</div>
        </div>
        <div className={styles["comment__wrapper"]}>
          <div className={styles["comment"]}>댓글</div>
        </div>
        <div className={styles["comment__wrapper"]}>
          <div className={styles["comment"]}>댓글</div>
        </div>
        <div className={styles["comment__wrapper"]}>
          <div className={styles["comment"]}>댓글</div>
        </div>
      </div>
    </div>
  );
};

export default PostPageMain;
