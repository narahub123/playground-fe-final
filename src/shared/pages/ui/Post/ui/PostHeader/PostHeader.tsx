import styles from "./PostHeader.module.css";
import { joinClassNames } from "@shared/@common/utils";
import { RepostInfo } from "@shared/pages/ui/Post";

interface PostHeaderProps {
  className?: string;
}

const PostHeader = ({ className }: PostHeaderProps) => {
  const classNames = joinClassNames([styles["post__header"], className]);

  return (
    <header className={classNames}>
      {/* 비어 있거나 , repost 아이콘 혹은 connector가 올 수 있음 */}
      <span></span>
      {/* 비어 있거나 혹은 repost info가 올 수 있음 */}
      <span></span>
    </header>
  );
};

export default PostHeader;
