import { useAppDispatch } from "@app/store";
import styles from "./ProfilePage.module.css";
import {
  selectPage,
  selectPosts,
  selectUser,
} from "@shared/@common/models/selectors";
import { Spinner } from "@shared/@common/ui/components";
import { joinClassNames } from "@shared/@common/utils";
import { fetchWithAuth } from "@shared/pages";
import { Post } from "@shared/pages/ui/Post";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Outlet, useLocation } from "react-router-dom";
import { setPosts } from "@shared/@common/models/slices/feedSlice";
import { ProfilePageTab, proflieTabLinks } from "@features/profile-page";

interface ProfilePageProps {
  className?: string;
}

const ProfilePage = ({ className }: ProfilePageProps) => {
  const dispatch = useAppDispatch();

  const { pathname } = useLocation();
  const [isLoading, setIsLoading] = useState(false);

  const { userId: userHandle } = useSelector(selectUser);
  const posts = useSelector(selectPosts);
  const page = useSelector(selectPage);

  const classNames = joinClassNames([styles["profile__page"], className]);

  return (
    <div className={classNames}>
      <div className={styles["tabs"]}>
        {Object.keys(proflieTabLinks).map((key: string) => (
          <ProfilePageTab key={key} link={key} />
        ))}
      </div>
      <div className={styles["feed"]}>
        {isLoading ? (
          <div className={styles["spinner__wrapper"]}>
            <Spinner color="cornflowerblue" size={1.5} />
          </div>
        ) : (
          <Outlet />
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
