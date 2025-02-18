import styles from "./Header.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";

const Header = () => {
  // 언어 설정
  const {} = useLanguageContent(["components", "Header"]);

  return (
    <header className={styles["header"]}>
      <div className={styles["header__wrapper"]}>
        <div className={styles[`header__container`]}>
          <div className={styles[`header__logo__wrapper`]}>
            <div className={styles[`header__logo`]}>로고</div>
          </div>
          <nav className={styles[`header_nav`]}>
            <ul className={styles[`header__nav__list`]}>
              <li className={styles[`header__nav__item`]}>아이콘</li>
              <li className={styles[`header__nav__item`]}>아이콘</li>
              <li className={styles[`header__nav__item`]}>아이콘</li>
              <li className={styles[`header__nav__item`]}>아이콘</li>
              <li className={styles[`header__nav__item`]}>아이콘</li>
            </ul>
          </nav>
          <div className={styles[`header__write`]}>쓰기</div>
        </div>
        <div className={styles[`header__account`]}>계정</div>
      </div>
    </header>
  );
};

export default Header;
