import styles from "./RepostInfo.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { joinClassNames } from "@shared/@common/utils";

interface RepostInfoProps {
  className?: string;
}

const RepostInfo = ({ className }: RepostInfoProps) => {
  // 언어 설정
  //   const {} = useLanguageContent(["", "RepostInfo"]);

  const classNames = joinClassNames([styles["repost__info"], className]);

  return <div className={classNames}>RepostInfo</div>;
};

export default RepostInfo;
