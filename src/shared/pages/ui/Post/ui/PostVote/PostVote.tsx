import styles from "./PostVote.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { joinClassNames } from "@shared/@common/utils";

interface PostVoteProps {
  className?: string;
}

const PostVote = ({ className }: PostVoteProps) => {
  // 언어 설정
  //   const {} = useLanguageContent(["", "PostVote"]);

  const classNames = joinClassNames([styles["post__vote"], className]);

  return <div className={classNames}>PostVote</div>;
};

export default PostVote;
