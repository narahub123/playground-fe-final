import styles from "./SettingsPage.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { joinClassNames } from "@shared/@common/utils";

interface SettingsPageProps {
  className?: string;
  disabled?: boolean;
}

const SettingsPage = ({ className, disabled = false }: SettingsPageProps) => {
  // 언어 설정
  const {} = useLanguageContent(["pages", "SettingsPage"]);

  const classNames = joinClassNames([styles["settings__page"], className]);

  return <div className={classNames}>SettingsPage</div>;
};

export default SettingsPage;
