import styles from "./PostStats.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { joinClassNames } from "@shared/@common/utils";

interface PostStatsProps {
  className?: string;
}

const PostStats = ({ className }: PostStatsProps) => {
  // 언어 설정
  //   const {} = useLanguageContent(["", "PostStats"]);

  const classNames = joinClassNames([styles["post__stats"], className]);

  return <div className={classNames}>PostStats</div>;
};

export default PostStats;
