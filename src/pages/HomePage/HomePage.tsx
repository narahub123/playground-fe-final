import { HomeTab } from "@features/home/ui";
import styles from "./HomePage.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { joinClassNames } from "@shared/@common/utils";
import { useState } from "react";
import { PostEditor } from "@shared/@common/ui/components";

interface IHomeTab {
  text: string;
  field: string;
}

const HomePage = () => {
  const [tabSelection, setTabSelection] = useState("following");
  // 언어 설정
  const { tabs } = useLanguageContent(["home", "HomePage"]);

  const classNames = joinClassNames([styles["home__page"]]);

  return (
    <div className={classNames}>
      <nav className={styles["home__nav"]}>
        {(tabs as IHomeTab[]).map((tab) => (
          <HomeTab
            text={tab.text}
            field={tab.field}
            tabSelection={tabSelection}
            onClick={() => {
              setTabSelection(tab.field);
            }}
            key={tab.field}
          />
        ))}
      </nav>
      <div className={styles["home__write"]}>
        <div className={styles["home__write__container"]}>
          <PostEditor />
        </div>
      </div>
      <div>광고</div>
      <div>피드</div>
    </div>
  );
};

export default HomePage;
