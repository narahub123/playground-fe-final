import styles from "./SettingsPage.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { joinClassNames } from "@shared/@common/utils";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import {
  PRIMARY_LINK,
  SETTINGS_LAYOUT_BREAKPOINT,
  SETTINGS_LINKS,
} from "@shared/@common/constants";
import { ExploreSection } from "@features/settings/common/layouts";
import { onParallelModalOpen } from "@shared/@common/models/slices/modalSlice";
import { useAppDispatch } from "@app/store";

const SettingsPage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname.includes(SETTINGS_LINKS.DOWNLOAD_DATA)) {
      dispatch(onParallelModalOpen("ownership"));
      navigate(PRIMARY_LINK.VERIFY_OWNERSHIP);
    }
  }, [pathname]);

  const moveToAccount = () => {
    if (
      pathname === PRIMARY_LINK.SETTINGS &&
      window.innerWidth > SETTINGS_LAYOUT_BREAKPOINT
    ) {
      navigate("account");
    }
  };

  useEffect(() => {
    window.addEventListener("resize", moveToAccount);

    return () => window.removeEventListener("resize", moveToAccount);
  }, []);

  // 언어 설정
  const {} = useLanguageContent(["pages", "SettingsPage"]);

  const classNames = joinClassNames([styles["settings__page"]]);

  return (
    <div className={classNames}>
      <section
        className={
          pathname === PRIMARY_LINK.SETTINGS
            ? styles[`settings___explore__section--index`]
            : styles[`settings___explore__section`]
        }
      >
        <ExploreSection />
      </section>
      <section
        className={
          pathname === PRIMARY_LINK.SETTINGS
            ? styles[`settings___details__section--index`]
            : styles[`settings___details__section`]
        }
      >
        <Outlet />
      </section>
    </div>
  );
};

export default SettingsPage;
