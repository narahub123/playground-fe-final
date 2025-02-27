import { ReactNode } from "react";
import styles from "./SettingsTabStatic.module.css";
import { joinClassNames } from "@shared/@common/utils";
import { Icon, Icons } from "@shared/@common/ui/icons";
import { Text } from "@shared/@common/ui/components";

interface SettingsTabStaticProps {
  label: string;
  description: string;
  extra?: ReactNode;
  iconName?: keyof typeof Icons;
  className?: string;
}

const SettingsTabStatic = ({
  label,
  description,
  extra,
  iconName,
  className,
}: SettingsTabStaticProps) => {
  const classNames = joinClassNames([
    styles["settings__tab__static"],
    className,
  ]);

  return (
    <div className={classNames}>
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
        {extra && <Text type="expl">{extra}</Text>}
      </div>
    </div>
  );
};

export default SettingsTabStatic;
