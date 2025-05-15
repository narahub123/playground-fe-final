import { Text } from "@shared/@common/ui/components";
import styles from "./ProfilePageTab.module.css";
import { joinClassNames } from "@shared/@common/utils";
import { Link, useLocation } from "react-router-dom";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { proflieTabLinks } from "@features/profile-page/data";

interface ProfilePageTabProps {
  className?: string;
  link: string;
}

const ProfilePageTab = ({ className, link }: ProfilePageTabProps) => {
  const { pathname } = useLocation();
  const { tabs } = useLanguageContent(["profilepage", "ProfilePageTab"]);
  const classNames = joinClassNames([styles["profile__page__tab"], className]);

  console.log(pathname.split("/")[2] || "");

  return (
    <Link
      className={classNames}
      to={proflieTabLinks[link as keyof typeof proflieTabLinks]}
    >
      <div
        className={joinClassNames([
          styles["wrapper"],
          (pathname.split("/")[2] || "") ===
          proflieTabLinks[link as keyof typeof proflieTabLinks]
            ? styles["selected"]
            : "",
        ])}
      >
        <Text className={styles["text"]}>{tabs[link]}</Text>
      </div>
    </Link>
  );
};

export default ProfilePageTab;
