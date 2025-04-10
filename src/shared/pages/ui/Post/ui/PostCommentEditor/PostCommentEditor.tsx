import styles from "./PostCommentEditor.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { joinClassNames } from "@shared/@common/utils";

interface PostCommentEditorProps {
  className?: string;
}

const PostCommentEditor = ({ className }: PostCommentEditorProps) => {
  // 언어 설정
  //   const {} = useLanguageContent(["", "PostCommentEditor"]);

  const classNames = joinClassNames([
    styles["post__comment__editor"],
    className,
  ]);

  return <div className={classNames}>PostCommentEditor</div>;
};

export default PostCommentEditor;
