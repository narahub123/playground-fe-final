import styles from "./RepostInfo.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { Text } from "@shared/@common/ui/components";
import { joinClassNames } from "@shared/@common/utils";
import { useNavigate } from "react-router-dom";
import { usePostContext } from "../../hooks";

interface RepostInfoProps {
  className?: string;
}

const RepostInfo = ({ className }: RepostInfoProps) => {
  const navigate = useNavigate();
  // 언어 설정
  const { text } = useLanguageContent(["post", "RepostInfo"]);
  const classNames = joinClassNames([styles["repost__info"], className]);

  const { type, author } = usePostContext();

  if (type === "comment" || type === "post") return null;

  const handleClick = () => {
    navigate(`/${author.userId}`);
  };

  return (
    <div className={classNames}>
      <button className={styles["button"]} onClick={handleClick}>
        <Text>{`${author.userId} ${text}`}</Text>
      </button>
    </div>
  );
};

export default RepostInfo;
