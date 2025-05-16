import styles from "./ProfilePageMedia.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { joinClassNames } from "@shared/@common/utils";

interface ProfilePageMediaProps {
  className?: string;
  disabled?: boolean;
}

const ProfilePageMedia = ({
  className,
  disabled = false,
}: ProfilePageMediaProps) => {
  // 언어 설정
  //   const {} = useLanguageContent(["", "ProfilePageMedia"]);

  const classNames = joinClassNames([styles["profilepagemedia"], className]);

  return <div className={classNames}>ProfilePageMedia</div>;
};

export default ProfilePageMedia;
