import { useSettingsTabs } from "@pages/SettingsPage/hooks";
import styles from "./ExploreSection.module.css";
import { SectionLayout } from "@pages/SettingsPage/layouts";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { Text } from "@shared/@common/ui/components";
import { joinClassNames } from "@shared/@common/utils";
import SettingsTab from "../SettingsTab/SettingsTab";

const ExploreSection = () => {
  // 언어 설정
  const { title } = useLanguageContent(["sections", "ExploreSection"]);

  const tabs = useSettingsTabs("ExploreSection");

  const classNames = joinClassNames([styles["explore__section"]]);

  return (
    <SectionLayout className={classNames}>
      <SectionLayout.Header>
        <Text type="heading3">{title}</Text>
      </SectionLayout.Header>
      <SectionLayout.HeaderContent>헤더 컨텐츠</SectionLayout.HeaderContent>
      <SectionLayout.Main>
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
      </SectionLayout.Main>
    </SectionLayout>
  );
};

export default ExploreSection;
