import { useSelector } from "react-redux";
import styles from "./PostProgressbar.module.css";
import { joinClassNames } from "@shared/@common/utils";
import { selectIsPostEditorLoading } from "@shared/pages/ui/PostEditor/models/selectors";
import { useEffect, useState, useRef } from "react";

interface PostProgressbarProps {
  className?: string;
}

const PostProgressbar = ({ className }: PostProgressbarProps) => {
  const classNames = joinClassNames([styles["post__progressbar"], className]);
  const [completed, setCompleted] = useState(0);
  const isLoading = useSelector(selectIsPostEditorLoading);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    if (isLoading) {
      setCompleted(0);
      timerRef.current = setInterval(() => {
        setCompleted((prev) => Math.min(prev + 20, 90)); // 최대 90%까지만 진행
      }, 200);
    } else {
      clearInterval(timerRef.current!);
      setCompleted(100); // 로딩 완료 시 100%
      const timeout = setTimeout(() => setCompleted(0), 500); // 잠깐 보여주고 초기화
      return () => clearTimeout(timeout);
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isLoading]);

  return (
    <div className={classNames}>
      {isLoading || completed > 0 ? (
        <div
          className={styles["progress"]}
          style={{ width: `${completed}%` }}
        />
      ) : null}
    </div>
  );
};

export default PostProgressbar;
