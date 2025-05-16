import styles from "./ProfilePage.module.css";
import { selectIsFeedLoading } from "@shared/@common/models/selectors";
import { Spinner } from "@shared/@common/ui/components";
import { joinClassNames } from "@shared/@common/utils";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { ProfilePageTab, proflieTabLinks } from "@features/profile-page";

interface ProfilePageProps {
  className?: string;
}

const ProfilePage = ({ className }: ProfilePageProps) => {
  const isLoading = useSelector(selectIsFeedLoading);

  console.log(isLoading);

  const classNames = joinClassNames([styles["profile__page"], className]);

  return (
    <div className={classNames}>
      <div className={styles["tabs"]}>
        {Object.keys(proflieTabLinks).map((key: string) => (
          <ProfilePageTab key={key} link={key} />
        ))}
      </div>
      <div className={styles["feed"]}>
        {isLoading && (
          <div className={styles["spinner__wrapper"]}>
            <Spinner color="cornflowerblue" size={1.5} />
          </div>
        )}
        <Outlet />
      </div>
    </div>
  );
};

export default ProfilePage;
