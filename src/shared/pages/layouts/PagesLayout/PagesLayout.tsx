import { useEffect } from "react";
import styles from "./PagesLayout.module.css";
import { Outlet } from "react-router";
import { getCurrentUserAPI } from "@shared/pages/apis";
import { useAppDispatch } from "@app/store";
import { setUser } from "@shared/@common/models/slices/userSlice";
import { setDisplay } from "@shared/@common/models/slices/displaySlice";
import { setSecurity } from "@shared/@common/models/slices/securitySlice";
import { setPrivacy } from "@shared/@common/models/slices/privacySlice";
import { setNotification } from "@shared/@common/models/slices/notificationSlice";
import { getAccessToken } from "@shared/pages/utils";
import { Header } from "@shared/pages/ui";

const PagesLayout = () => {
  const dispatch = useAppDispatch();

  const login = getAccessToken();

  useEffect(() => {
    if (!login) return;

    const fetchData = async () => {
      const result = await getCurrentUserAPI();

      console.log(result);

      const { user, display, security, privacy, notification } = result.data;

      dispatch(setUser(user));
      dispatch(setDisplay(display));
      dispatch(setSecurity(security));
      dispatch(setPrivacy(privacy));
      dispatch(setNotification(notification));
    };

    fetchData();
  }, [login]);
  return (
    <div className={styles[`pages__layout`]}>
      <Header />
      <main role="main" className={styles["pages__layout__main"]}>
        <div className={styles[`pages__layout__page`]}>
          <Outlet />
        </div>
        <aside className={styles[`pages__layout__sidebar`]}>기타</aside>
      </main>
    </div>
  );
};

export default PagesLayout;
