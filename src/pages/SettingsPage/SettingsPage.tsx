import styles from "./SettingsPage.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { Text } from "@shared/@common/ui/components";
import { joinClassNames } from "@shared/@common/utils";
import { LuChevronRight } from "react-icons/lu";
import { NavLink } from "react-router-dom";

interface SettingsPageProps {
  className?: string;
  disabled?: boolean;
}

const SettingsPage = ({ className, disabled = false }: SettingsPageProps) => {
  // 언어 설정
  const {} = useLanguageContent(["pages", "SettingsPage"]);

  const classNames = joinClassNames([styles["settings__page"], className]);

  return (
    <div className={classNames}>
      <section className={styles[`settings___explore__section`]}>
        <header className={styles["section__header"]}>
          <Text type="heading3">설정</Text>
        </header>
        <div className={styles["section__header__content"]}>헤더 컨텐츠</div>
        <main className={styles["section__main"]}>
          <div role="tablist" className={styles[`section__tab__list`]}>
            <NavLink
              to="account"
              role="tabpanel"
              className={({ isActive }) =>
                joinClassNames([
                  styles[`section__tab`],
                  isActive ? styles[`section__tab--active`] : "",
                ])
              }
            >
              <Text>계정</Text>
              <LuChevronRight />
            </NavLink>
          </div>
        </main>
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
