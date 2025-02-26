import { SectionLayout } from "@pages/SettingsPage/layouts";
import styles from "./AccountSection.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { joinClassNames } from "@shared/@common/utils";
import { Text } from "@shared/@common/ui/components";
import { useSettingsTabs } from "@pages/SettingsPage/hooks";
import { SettingsTab } from "@pages/SettingsPage/ui";
import { Icon } from "@shared/@common/ui/icons";

const AccountSection = () => {
  // 언어 설정
  const { title, description } = useLanguageContent([
    "sections",
    "AccountSection",
  ]);

  const tabs = useSettingsTabs("AccountSection");

  const classNames = joinClassNames([styles["accountsection"]]);

  return (
    <SectionLayout className={classNames}>
      <SectionLayout.Header>
        <Icon iconName="arrowLeft" onClick={() => {}} />
        <Text type="heading3">{title}</Text>
      </SectionLayout.Header>
      <SectionLayout.HeaderContent>
        <Text type="expl">{description}</Text>
      </SectionLayout.HeaderContent>
      <SectionLayout.Main>
        {tabs.map((tab) => (
          <SettingsTab
            label={tab.label}
            description={tab.description}
            link={tab.link}
            iconName={tab.iconName}
            key={tab.link}
          />
        ))}
      </SectionLayout.Main>
    </SectionLayout>
  );
};

export default AccountSection;
