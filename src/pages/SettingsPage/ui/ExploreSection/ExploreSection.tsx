import { useSettingsTabs } from "@pages/SettingsPage/hooks";
import styles from "./ExploreSection.module.css";
import { SectionLayout } from "@pages/SettingsPage/layouts";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { Text } from "@shared/@common/ui/components";
import { joinClassNames } from "@shared/@common/utils";
import SettingsTab from "../SettingsTab/SettingsTab";
import { SettingsSearch } from "@features/settings-search/ui";
import { useEffect, useState } from "react";
import { ISectionTabData } from "@pages/SettingsPage/types";
import { useSectionDataArray } from "@features/settings-search/hooks";

const ExploreSection = () => {
  const initialTabs = useSettingsTabs("ExploreSection");

  const [tabs, setTabs] = useState<ISectionTabData[]>(initialTabs);
  const [keyword, setKeyword] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  // 언어 설정
  const { title } = useLanguageContent(["settings", "ExploreSection"]);

  const classNames = joinClassNames([styles["explore__section"]]);

  // 설정 섹션 탭 목록 가져오기
  const sectionData = useSectionDataArray();

  useEffect(() => {
    if (!isSearching) {
      setTabs(initialTabs);
      return;
    }

    if (isSearching && keyword.length === 0) {
      setTabs([]);
      return;
    }

    const results: ISectionTabData[] = [];

    for (const section of sectionData) {
      const sectionTabs = Object.values(section);

      const matchingItems = sectionTabs.filter((item) =>
        item.label.includes(keyword)
      );

      results.push(...matchingItems);
    }

    setTabs(results);
  }, [keyword, isSearching]);

  return (
    <SectionLayout className={classNames}>
      <SectionLayout.Header>
        <Text type="heading3">{title}</Text>
      </SectionLayout.Header>
      <SectionLayout.HeaderContent>
        <SettingsSearch
          keyword={keyword}
          setKeyword={setKeyword}
          isSearching={isSearching}
          setIsSearching={setIsSearching}
        />
      </SectionLayout.HeaderContent>
      <SectionLayout.Main>
        {isSearching && keyword === "" ? (
          <div className={styles[`explore__section__text__container`]}>
            <Text className={styles[`explore__section__no__keyword`]}>
              알림과 개인정보 보호 등에 대해 검색해 보세요.
            </Text>
          </div>
        ) : isSearching && tabs.length === 0 ? (
          <div className={styles[`explore__section__text__container`]}>
            <div className={styles[`explore__section__no__result`]}>
              <Text
                className={styles[`explore__section__no__result--title`]}
                type="heading1"
              >
                {`${keyword}에 대한 검색 결과가 없습니다.`}
              </Text>
              <Text
                className={styles[`explore__section__no__result--description`]}
              >
                입력하신 단어에 대한 검색 결과가 없습니다. 다른 검색어를
                사용해보세요.
              </Text>
            </div>
          </div>
        ) : (
          <nav role="tablist">
            {tabs.map((tab) => (
              <SettingsTab
                label={tab.label}
                link={tab.link}
                description={tab.description}
                iconName={tab.iconName}
                key={tab.link}
              />
            ))}
          </nav>
        )}
      </SectionLayout.Main>
    </SectionLayout>
  );
};

export default ExploreSection;
