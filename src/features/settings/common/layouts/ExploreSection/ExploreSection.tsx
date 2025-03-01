import styles from "./ExploreSection.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { Text } from "@shared/@common/ui/components";
import { joinClassNames } from "@shared/@common/utils";
import { useEffect, useState } from "react";
import {
  useSectionDataArray,
  useSettingsTabs,
} from "@features/settings/common/hooks";
import { ISectionTabData } from "@features/settings/common/types";
import { SectionLayout } from "@features/settings/common/layouts";
import { SettingsSearch, SettingsTab } from "@features/settings/common/ui";

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

  // explore section의 기본 탭의 label만 가져오기
  const primaryTabLabels = initialTabs.map((tab) => tab.label);

  useEffect(() => {
    if (!isSearching) {
      setTabs(initialTabs);
      return;
    }

    if (isSearching && keyword.length === 0) {
      setTabs([]);
      return;
    }

    let results: ISectionTabData[] = [];

    // 검색 범위를 첫번째 내부 페이지까지로 제한
    for (let i = 0; i < 6; i++) {
      const section = sectionData[i];
      const sectionTabs = Object.values(section);

      let matchingItems = sectionTabs.filter((item) =>
        item.label.includes(keyword)
      );

      // 검색이 primary 섹션이 아니고 검색 결과가 있는 경우
      if (i > 0 && matchingItems.length > 0) {
        // primary section 배열
        const primarySection = Object.values(sectionData[0]);

        // 부모 탭 가져오기
        const parentTab = primarySection[i - 1];

        console.log(parentTab);

        // 부모탭에 검색어가 포함된 경우 해당 요소를 삭제함
        if (parentTab.label.includes(keyword)) {
          results = results.filter((item) => item.label !== parentTab.label);
        }

        // 부모를 포함한 matching item 생성
        matchingItems = [parentTab, ...matchingItems];
      }

      // matching된 아이템들을 결과에 추가
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
                key={tab.link}
                className={
                  isSearching && primaryTabLabels.includes(tab.label)
                    ? styles["tab__primary"]
                    : undefined
                }
              />
            ))}
          </nav>
        )}
      </SectionLayout.Main>
    </SectionLayout>
  );
};

export default ExploreSection;
