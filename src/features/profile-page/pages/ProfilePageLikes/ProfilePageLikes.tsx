import styles from "./ProfilePageLikes.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { joinClassNames } from "@shared/@common/utils";

interface ProfilePageLikesProps {
  className?: string;
  disabled?: boolean;
}

const ProfilePageLikes = ({
  className,
  disabled = false,
}: ProfilePageLikesProps) => {
  // 언어 설정
  //   const {} = useLanguageContent(["", "ProfilePageLikes"]);

  const classNames = joinClassNames([styles["profilepagelikes"], className]);

  return <div className={classNames}>ProfilePageLikes</div>;
};

export default ProfilePageLikes;
