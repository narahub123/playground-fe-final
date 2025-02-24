import styles from "./PagesLayout.module.css";
import { useEffect } from "react";
import { Outlet } from "react-router";
import { useAppDispatch } from "@app/store";
import { setUser } from "@shared/@common/models/slices/userSlice";
import { setDisplay } from "@shared/@common/models/slices/displaySlice";
import { setSecurity } from "@shared/@common/models/slices/securitySlice";
import { setPrivacy } from "@shared/@common/models/slices/privacySlice";
import { setNotification } from "@shared/@common/models/slices/notificationSlice";
import { fetchWithAuth } from "@shared/pages/utils";
import { Header } from "@shared/pages/ui";
import { useLocation } from "react-router";
import { useDisplaySetup } from "@shared/@common/models/hooks";
import { AlertContextProvider } from "@shared/@common/ui/components/Alert/context";
import { ToastContextProvider } from "@shared/@common/ui/components/Toast/context";
import { TextHeader } from "@test/ui/components";
import { checkLogin } from "@shared/@common/utils";

const PagesLayout = () => {
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();

  const isLogout = pathname.includes("logout");

  const isLogin = checkLogin();

  useDisplaySetup();

  useEffect(() => {
    if (!isLogin) return;

    const fetchData = async () => {
      const result = await fetchWithAuth("/users/me");

      console.log(result);

      const { user, display, security, privacy, notification } = result.data;

      dispatch(setUser(user));
      dispatch(setDisplay(display));
      dispatch(setSecurity(security));
      dispatch(setPrivacy(privacy));
      dispatch(setNotification(notification));
    };

    fetchData();
  }, [isLogin]);
  return (
    <ToastContextProvider>
      <AlertContextProvider>
        <TextHeader />
        <div className={styles[`pages__layout`]}>
          {!isLogout && <Header />}
          <main role="main" className={styles["pages__layout__main"]}>
            <div className={styles[`pages__layout__page`]}>
              <Outlet />
            </div>
            {!isLogout && !pathname.includes("settings") && (
              <aside className={styles[`pages__layout__sidebar`]}>기타</aside>
            )}
          </main>
        </div>
      </AlertContextProvider>
    </ToastContextProvider>
  );
};

export default PagesLayout;
