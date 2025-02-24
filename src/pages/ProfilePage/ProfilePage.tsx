import styles from "./ProfilePage.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { joinClassNames } from "@shared/@common/utils";

interface ProfilePageProps {
  className?: string;
  disabled?: boolean;
}

const ProfilePage = ({ className, disabled = false }: ProfilePageProps) => {
  // 언어 설정
  const {} = useLanguageContent(["pages", "ProfilePage"]);

  const classNames = joinClassNames([styles["profile__page"], className]);

  return <div className={classNames}>ProfilePage</div>;
};

export default ProfilePage;
