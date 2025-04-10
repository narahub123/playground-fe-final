import styles from "./ProfileConnector.module.css";
import { joinClassNames } from "@shared/@common/utils";

interface ProfileConnectorProps {
  className?: string;
}

const ProfileConnector = ({ className }: ProfileConnectorProps) => {
  const classNames = joinClassNames([styles["profile__connector"], className]);

  return (
    <div className={classNames}>
      <div className={styles["line"]} />
    </div>
  );
};

export default ProfileConnector;
