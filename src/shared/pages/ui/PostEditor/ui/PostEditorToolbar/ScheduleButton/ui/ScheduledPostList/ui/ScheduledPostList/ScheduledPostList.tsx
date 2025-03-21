import styles from "./ScheduledPostList.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { joinClassNames } from "@shared/@common/utils";

interface ScheduledPostListProps {
  className?: string;
  disabled?: boolean;
}

const ScheduledPostList = ({
  className,
  disabled = false,
}: ScheduledPostListProps) => {
  // 언어 설정
  //   const {} = useLanguageContent(["", "ScheduledPostList"]);

  const classNames = joinClassNames([styles["scheduledlist"], className]);

  return <div className={classNames}>ScheduledPostList</div>;
};

export default ScheduledPostList;
