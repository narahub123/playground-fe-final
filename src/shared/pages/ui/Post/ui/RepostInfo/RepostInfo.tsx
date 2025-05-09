import styles from "./RepostInfo.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { Text } from "@shared/@common/ui/components";
import { joinClassNames } from "@shared/@common/utils";
import { useNavigate } from "react-router-dom";
import { usePostContext } from "../../hooks";
import { useSelector } from "react-redux";
import { selectUser } from "@shared/@common/models/selectors";

interface RepostInfoProps {
  className?: string;
}

const RepostInfo = ({ className }: RepostInfoProps) => {
  const navigate = useNavigate();
  // 언어 설정
  const { text } = useLanguageContent(["post", "RepostInfo"]);
  const classNames = joinClassNames([styles["repost__info"], className]);
  const { _id: userId } = useSelector(selectUser);

  const { type, author } = usePostContext();

  if (type === "comment" || type === "post" || !type) return null;

  const handleClick = () => {
    navigate(`/${author.userId}`);
  };

  return (
    <div className={classNames}>
      <button className={styles["button"]} onClick={handleClick}>
        <Text>{`${text(author.userId, userId === author._id)}`}</Text>
      </button>
    </div>
  );
};

export default RepostInfo;
