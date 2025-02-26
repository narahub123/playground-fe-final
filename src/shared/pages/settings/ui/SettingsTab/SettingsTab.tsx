import { NavLink } from "react-router-dom";
import styles from "./SettingsTab.module.css";
import { joinClassNames } from "@shared/@common/utils";
import { LuChevronRight } from "react-icons/lu";
import { Icon, Icons } from "@shared/@common/ui/icons";
import { Text } from "@shared/@common/ui/components";

interface SettingsTabProps {
  label: string;
  link: string;
  className?: string;
  iconName?: keyof typeof Icons;
  description?: string;
}

const SettingsTab = ({
  className,
  link,
  iconName,
  label,
  description,
}: SettingsTabProps) => {
  return (
    <NavLink
      className={({ isActive }) =>
        joinClassNames([
          styles["settings__tab"],
          isActive ? styles["settings__tab--active"] : "",
          className,
        ])
      }
      to={link}
    >
      {iconName && (
        <span className={styles["tab__leading__icon"]}>
          <Icon
            iconName={iconName}
            bgColor="transparent"
            bgSize="2xl"
            iconSize="xl"
          />
        </span>
      )}
      <div className={styles["tab__text"]}>
        <Text>{label}</Text>
        <Text type="expl">{description}</Text>
      </div>
      <span className={styles["tab__trailing__icon"]}>
        <LuChevronRight fontSize={"1.25rem"} />
      </span>
    </NavLink>
  );
};

export default SettingsTab;
