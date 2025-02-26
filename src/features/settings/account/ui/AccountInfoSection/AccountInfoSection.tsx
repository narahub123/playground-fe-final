import { useLanguageContent } from "@shared/@common/models/hooks";
import { Text } from "@shared/@common/ui/components";
import { useSettingsTabs } from "@shared/pages/settings/hooks";
import { SectionLayout } from "@shared/pages/settings/layouts";
import { ISectionTabData } from "@shared/pages/settings/types";
import { BackIcon, SettingsTab } from "@shared/pages/settings/ui";

const AccountInfoSection = () => {
  // 언어 설정
  const { title } = useLanguageContent(["settings", "AccountInfoSection"]);

  const tabs: ISectionTabData[] = []; //useSettingsTabs("AccountInfoSection");

  return (
    <SectionLayout>
      <SectionLayout.Header>
        <BackIcon />
        <Text type="heading3">{title}</Text>
      </SectionLayout.Header>
      <SectionLayout.Main>
        {tabs.map((tab) => (
          <SettingsTab
            label={tab.label}
            description={tab.description}
            link={tab.link}
            iconName={tab.iconName}
            key={tab.label}
          />
        ))}
      </SectionLayout.Main>
    </SectionLayout>
  );
};

export default AccountInfoSection;
