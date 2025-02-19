import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import { logo } from "@shared/@common/assets";
import { useLanguageContent } from "@shared/@common/models/hooks";
import NavItem from "../NavItem/NavItem";
import NavMoreButton from "../NavMoreButton/NavMoreButton";
import WriteButton from "../WriteButton/WriteButton";
import AccountButton from "../AccountButton/AccountButton";

const Header = () => {
  // 언어 설정
  const {
    logoAlt,
    homeTitle,
    exploreTitle,
    notificationTitle,
    messageTitle,
    profileTitle,
  } = useLanguageContent(["components", "Header"]);

  const notificationCount = 1;
  const messageCount = 2;

  return (
    <header className={styles["header"]}>
      <div className={styles["header__wrapper"]}>
        <div className={styles[`header__container`]}>
          <div className={styles[`header__logo__container`]}>
            <Link
              to={"/home"}
              className={styles[`header__logo__wrapper`]}
              aria-label={logoAlt}
            >
              <img
                src={logo}
                alt={logoAlt}
                role="img"
                className={styles[`header__logo`]}
              />
            </Link>
          </div>
          <nav className={styles[`header_nav`]}>
            {/* 홈 */}
            <NavItem
              to="/home"
              activeIconName="homeFill"
              inactiveIconName="homeLine"
              title={homeTitle}
            />
            {/* 탐색 */}
            <NavItem
              to="/explore"
              activeIconName="exploreFill"
              inactiveIconName="exploreLine"
              title={exploreTitle}
            />
            {/* 알림 */}
            <NavItem
              to="/notifications"
              activeIconName="notificationFill"
              inactiveIconName="notificationLine"
              title={notificationTitle}
              count={notificationCount}
            />
            {/* 메시지 */}
            <NavItem
              to="/messages"
              activeIconName="envelopFill"
              inactiveIconName="envelopLine"
              title={messageTitle}
              count={messageCount}
            />
            {/* 프로필 */}
            <NavItem
              to={`/${"test1234"}`}
              activeIconName="userFill"
              inactiveIconName="userLine"
              title={profileTitle}
            />
            {/* 더보기 */}
            <NavMoreButton />
          </nav>
          <WriteButton />
        </div>
        <div className={styles[`header__account`]}>
          <AccountButton />
        </div>
      </div>
    </header>
  );
};

export default Header;
