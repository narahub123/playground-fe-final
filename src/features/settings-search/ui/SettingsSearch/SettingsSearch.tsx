import styles from "./SettingsSearch.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { Icon } from "@shared/@common/ui/icons";
import { joinClassNames } from "@shared/@common/utils";

interface SettingsSearchProps {
  className?: string;
  disabled?: boolean;
}

const SettingsSearch = ({
  className,
  disabled = false,
}: SettingsSearchProps) => {
  // 언어 설정
  const { placeholder } = useLanguageContent(["components", "SettingsSearch"]);

  const classNames = joinClassNames([styles["settings__search"], className]);

  return (
    <div className={classNames}>
      <div className={styles["settings__search__off__icon"]}>
        <Icon iconName="arrowLeft" onClick={() => {}} />
      </div>
      <div className={styles["settings__search__container"]}>
        <span className={styles["settings__search__leading__icon"]}>
          <Icon iconName="search" bgSize="xs" iconSize="sm" />
        </span>
        <input
          type="text"
          className={styles["settings__search__field"]}
          placeholder={placeholder}
        />
        <span className={styles["settings__search__trailing__icon"]}>
          <Icon
            iconName="close"
            iconColor="white"
            bgColor="black"
            iconSize="xs"
            bgSize="xs"
            onClick={() => {}}
          />
        </span>
      </div>
    </div>
  );
};

export default SettingsSearch;
