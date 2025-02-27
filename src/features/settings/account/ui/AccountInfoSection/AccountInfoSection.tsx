import { useLanguageContent } from "@shared/@common/models/hooks";
import { Text } from "@shared/@common/ui/components";
import { useSettingsTabs } from "@shared/pages/settings/hooks";
import { SectionLayout } from "@shared/pages/settings/layouts";
import { ISectionTabData } from "@shared/pages/settings/types";
import {
  BackIcon,
  SettingsTab,
  SettingsTabStatic,
} from "@shared/pages/settings/ui";
import { useAccountInfo } from "../../hooks";
const AccountInfoSection = () => {
  // 언어 설정
  const { title } = useLanguageContent(["settings", "AccountInfoSection"]);

  const accountInfo = useAccountInfo();

  const tabs: ISectionTabData[] = useSettingsTabs("AccountInfoSection");

  const combinedTabs = tabs.map((tab, index) => {
    const newTab = {
      ...tab,
      description: accountInfo[index].description,
      extra: accountInfo[index].extra,
    };
    console.log(newTab);
    return newTab;
  });

  console.log(combinedTabs);

  return (
    <SectionLayout>
      <SectionLayout.Header>
        <BackIcon />
        <Text type="heading3">{title}</Text>
      </SectionLayout.Header>
      <SectionLayout.Main>
        {combinedTabs.map((tab) => {
          if (tab.link) {
            return (
              <SettingsTab
                label={tab.label}
                description={tab.description}
                link={tab.link}
                iconName={tab.iconName}
                key={tab.label}
              />
            );
          } else {
            return (
              <SettingsTabStatic
                label={tab.label}
                description={tab.description}
                iconName={tab.iconName}
                extra={tab.extra}
                key={tab.label}
              />
            );
          }
        })}
      </SectionLayout.Main>
    </SectionLayout>
  );
};

export default AccountInfoSection;
