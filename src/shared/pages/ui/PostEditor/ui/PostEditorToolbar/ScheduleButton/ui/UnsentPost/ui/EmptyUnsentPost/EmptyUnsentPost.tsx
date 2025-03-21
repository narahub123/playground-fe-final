import styles from "./EmptyUnsentPost.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { Text } from "@shared/@common/ui/components";
import { joinClassNames } from "@shared/@common/utils";

interface EmptyUnsentPostProps {
  className?: string;
  disabled?: boolean;
}

const EmptyUnsentPost = ({
  className,
  disabled = false,
}: EmptyUnsentPostProps) => {
  // 언어 설정
  const { empty } = useLanguageContent(["components", "EmptyUnsentPost"]);

  const classNames = joinClassNames([styles["empty__unsent__post"], className]);

  return (
    <div className={classNames}>
      <div className={styles["empty__wrapper"]}>
        <Text type="heading1">{empty.heading}</Text>
        <Text type="expl">{empty.description}</Text>
      </div>
    </div>
  );
};

export default EmptyUnsentPost;
