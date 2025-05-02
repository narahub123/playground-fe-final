import styles from "./MoreThread.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { joinClassNames } from "@shared/@common/utils";
import { usePostContext } from "../../hooks";
import { Text } from "@shared/@common/ui/components";
import { POST_THREAD_MAX } from "@shared/@common/constants";
import { useNavigate } from "react-router-dom";

interface MoreThreadProps {
  className?: string;
}

const MoreThread = ({ className }: MoreThreadProps) => {
  const navigate = useNavigate();
  // 언어 설정
  const { text } = useLanguageContent(["post", "MoreThread"]);

  const classNames = joinClassNames([styles["more__thread"], className]);

  const { thread } = usePostContext();

  if (!thread || thread.length <= POST_THREAD_MAX) return null;

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();

    const last = thread[thread.length - 1];
    const { author, _id: postId } = last;
    
    navigate(`/${author.userId}/status/${postId}`);
  };

  return (
    <div className={classNames} onClick={handleClick}>
      <div className={styles["left"]}>
        <div className={styles["dash"]}>
          {Array.from({ length: 3 }).map((_, index) => (
            <div className={styles["line"]} key={index} />
          ))}
        </div>
      </div>
      <div className={styles["right"]}>
        <Text className={styles["text"]}>{text}</Text>
      </div>
    </div>
  );
};

export default MoreThread;
