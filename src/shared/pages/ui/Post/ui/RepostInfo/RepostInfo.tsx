import styles from "./RepostInfo.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { Text } from "@shared/@common/ui/components";
import { joinClassNames } from "@shared/@common/utils";
import { useNavigate } from "react-router-dom";
import { IRepost } from "@shared/@common/types";

interface RepostInfoProps {
  className?: string;
  firstReposter: IRepost;
}

const RepostInfo = ({ className, firstReposter }: RepostInfoProps) => {
  // 언어 설정
  const { text } = useLanguageContent(["post", "RepostInfo"]);

  const navigate = useNavigate();

  const classNames = joinClassNames([styles["repost__info"], className]);

  const handleClick = () => {
    navigate(`/${firstReposter.userId}`);
  };

  return (
    <div className={classNames}>
      <button className={styles["button"]} onClick={handleClick}>
        <Text>{`${firstReposter.userId} ${text}`}</Text>
      </button>
    </div>
  );
};

export default RepostInfo;
