import styles from "./ProfilePageReplies.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { joinClassNames } from "@shared/@common/utils";

interface ProfilePageRepliesProps {
  className?: string;
  disabled?: boolean;
}

const ProfilePageReplies = ({
  className,
  disabled = false,
}: ProfilePageRepliesProps) => {
  // 언어 설정
  //   const {} = useLanguageContent(["", "ProfilePageReplies"]);

  const classNames = joinClassNames([styles["profilepagereplies"], className]);

  return <div className={classNames}>ProfilePageReplies</div>;
};

export default ProfilePageReplies;
