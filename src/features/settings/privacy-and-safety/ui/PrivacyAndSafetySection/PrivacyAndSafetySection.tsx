import { useLanguageContent } from "@shared/@common/models/hooks";
import { Text } from "@shared/@common/ui/components";
import { useSettingsTabs } from "@shared/pages/settings/hooks";
import { SectionLayout } from "@shared/pages/settings/layouts";
import { BackIcon, SettingsTab } from "@shared/pages/settings/ui";

const PrivacyAndSafetySection = () => {
  // 언어 설정
  const { title, description } = useLanguageContent([
    "settings",
    "PrivacyAndSafetySection",
  ]);

  const tabs = useSettingsTabs("PrivacyAndSafetySection");

  return (
    <SectionLayout>
      <SectionLayout.Header>
        <BackIcon />
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

export default PrivacyAndSafetySection;
