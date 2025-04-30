import styles from "./MoreThread.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { joinClassNames } from "@shared/@common/utils";
import { usePostContext } from "../../hooks";
import { Text } from "@shared/@common/ui/components";
import { POST_THREAD_MAX } from "@shared/@common/constants";

interface MoreThreadProps {
  className?: string;
}

const MoreThread = ({ className }: MoreThreadProps) => {
  // 언어 설정
  const { text } = useLanguageContent(["post", "MoreThread"]);

  const classNames = joinClassNames([styles["more__thread"], className]);

  const { thread } = usePostContext();

  if (!thread || thread.length <= POST_THREAD_MAX) return null;

  return (
    <div className={classNames}>
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
