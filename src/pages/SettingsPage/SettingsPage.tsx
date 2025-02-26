import styles from "./SettingsPage.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { Text } from "@shared/@common/ui/components";
import { joinClassNames } from "@shared/@common/utils";
import { ExploreSection } from "./ui";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { SETTINGS_LAYOUT_BREAKPOINT } from "@shared/@common/constants";

const SettingsPage = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const moveToAccount = () => {
    if (
      pathname === "/settings" &&
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
      <section className={styles[`settings___explore__section`]}>
        <ExploreSection />
      </section>
      <section className={styles[`settings___details__section`]}>
        <header className={styles["section__header"]}>
          <Text type="heading3">설정</Text>
        </header>
        <div className={styles["section__header__content"]}>헤더 컨텐츠</div>
        <main className={styles["section__main"]}>메인</main>
      </section>
    </div>
  );
};

export default SettingsPage;
