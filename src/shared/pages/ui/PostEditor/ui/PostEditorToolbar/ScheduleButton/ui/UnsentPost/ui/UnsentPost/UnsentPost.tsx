import styles from "./UnsentPost.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { joinClassNames } from "@shared/@common/utils";

interface UnsentPostProps {
  className?: string;
  disabled?: boolean;
}

const UnsentPost = ({ className, disabled = false }: UnsentPostProps) => {
  // 언어 설정
  //   const {} = useLanguageContent(["", "UnsentPost"]);

  const classNames = joinClassNames([styles["scheduleunsent"], className]);

  return <div className={classNames}>UnsentPost</div>;
};

export default UnsentPost;
