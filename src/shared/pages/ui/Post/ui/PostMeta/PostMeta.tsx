import styles from "./PostMeta.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { joinClassNames } from "@shared/@common/utils";

interface PostMetaProps {
  className?: string;
}

const PostMeta = ({ className }: PostMetaProps) => {
  // 언어 설정
  //   const {} = useLanguageContent(["", "PostMeta"]);

  const classNames = joinClassNames([styles["post__meta"], className]);

  return <div className={classNames}>PostMeta</div>;
};

export default PostMeta;
