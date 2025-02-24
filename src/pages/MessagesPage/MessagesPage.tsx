import styles from "./MessagesPage.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { joinClassNames } from "@shared/@common/utils";

interface MessagesPageProps {
  className?: string;
  disabled?: boolean;
}

const MessagesPage = ({ className, disabled = false }: MessagesPageProps) => {
  // 언어 설정
  const {} = useLanguageContent(["pages", "MessagesPage"]);

  const classNames = joinClassNames([styles["messagespage"], className]);

  return <div className={classNames}>MessagesPage</div>;
};

export default MessagesPage;
