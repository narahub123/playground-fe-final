import { useSettingsTabs } from "@features/settings/common/hooks";
import { SectionLayout } from "@features/settings/common/layouts";
import { BackIcon, SettingsTab } from "@features/settings/common/ui";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { Text } from "@shared/@common/ui/components";

const SecurityAndAccountAccessSection = () => {
  // 언어 설정
  const { title, description } = useLanguageContent([
    "settings",
    "SecurityAndAccountAccessSection",
  ]);

  const tabs = useSettingsTabs("SecurityAndAccountAccessSection");

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

export default SecurityAndAccountAccessSection;
