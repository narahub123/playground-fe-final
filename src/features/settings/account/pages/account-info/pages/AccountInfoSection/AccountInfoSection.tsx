import { useLanguageContent } from "@shared/@common/models/hooks";
import { Text } from "@shared/@common/ui/components";
import { VerifyPassword } from "@features/auth/verify-password/ui";
import { useState } from "react";
import { useAccountInfo } from "../../hooks";
import { useSettingsTabs } from "@features/settings/common/hooks";
import { ISectionTabData } from "@features/settings/common/types";
import { SectionLayout } from "@features/settings/common/layouts";
import {
  BackIcon,
  SettingsTab,
  SettingsTabStatic,
} from "@features/settings/common/ui";

const AccountInfoSection = () => {
  const [isAuthorized, setIsAuthorized] = useState(false);

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
    return newTab;
  });

  return (
    <SectionLayout>
      <SectionLayout.Header>
        <BackIcon />
        <Text type="heading3">{title}</Text>
      </SectionLayout.Header>
      <SectionLayout.Main>
        {isAuthorized ? (
          combinedTabs.map((tab) => {
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
          })
        ) : (
          <VerifyPassword setIsAuthorized={setIsAuthorized} />
        )}
      </SectionLayout.Main>
    </SectionLayout>
  );
};

export default AccountInfoSection;
