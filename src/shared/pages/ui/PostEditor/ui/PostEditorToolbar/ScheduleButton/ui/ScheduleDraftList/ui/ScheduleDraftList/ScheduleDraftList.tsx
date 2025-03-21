import styles from "./ScheduleDraftList.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { joinClassNames } from "@shared/@common/utils";

interface ScheduleDraftListProps {
  className?: string;
  disabled?: boolean;
}

const ScheduleDraftList = ({
  className,
  disabled = false,
}: ScheduleDraftListProps) => {
  // 언어 설정
  //   const {} = useLanguageContent(["", "ScheduleDraftList"]);

  const classNames = joinClassNames([styles["scheduledraftlist"], className]);

  return <div className={classNames}>ScheduleDraftList</div>;
};

export default ScheduleDraftList;
