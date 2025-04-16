import styles from "./PostVideoIcon.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { joinClassNames } from "@shared/@common/utils";
import { postVideoIcons } from "../..";

interface PostVideoIconProps {
  className?: string;
  iconName: keyof typeof postVideoIcons;
}

const PostVideoIcon = ({ className, iconName }: PostVideoIconProps) => {
  // 언어 설정
  const {} = useLanguageContent(["post", "PostVideoIcon"]);

  const classNames = joinClassNames([styles["post__video__icon"], className]);

  const Comp = postVideoIcons[iconName];

  return (
    <div className={classNames}>
      <Comp className={styles["icon"]} />
    </div>
  );
};

export default PostVideoIcon;
