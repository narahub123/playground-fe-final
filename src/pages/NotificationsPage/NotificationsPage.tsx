import styles from "./NotificationsPage.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { joinClassNames } from "@shared/@common/utils";

interface NotificationsPageProps {
  className?: string;
  disabled?: boolean;
}

const NotificationsPage = ({
  className,
  disabled = false,
}: NotificationsPageProps) => {
  // 언어 설정
  const {} = useLanguageContent(["pages", "NotificationsPage"]);

  const classNames = joinClassNames([styles["notifications__page"], className]);

  return <div className={classNames}>NotificationsPage</div>;
};

export default NotificationsPage;
