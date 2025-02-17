import styles from "./HomePage.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { joinClassNames } from "@shared/@common/utils";

const HomePage = () => {
  // 언어 설정
  const {} = useLanguageContent(["pages", "HomePage"]);

  const classNames = joinClassNames([styles["home__page"]]);

  return (
    <div className={classNames}>
      <nav>탭</nav>
      <div>글쓰기</div>
      <div>광고</div>
      <div>피드</div>
    </div>
  );
};

export default HomePage;
