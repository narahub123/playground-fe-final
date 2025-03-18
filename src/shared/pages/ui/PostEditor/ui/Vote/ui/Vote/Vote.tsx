import styles from "./Vote.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { Text } from "@shared/@common/ui/components";
import { joinClassNames } from "@shared/@common/utils";
import { LuPlus } from "react-icons/lu";

interface VoteProps {
  className?: string;
  disabled?: boolean;
}

const Vote = ({ className, disabled = false }: VoteProps) => {
  // 언어 설정
  const {} = useLanguageContent(["components", "Vote"]);

  const classNames = joinClassNames([styles["vote"], className]);

  return (
    <div className={classNames}>
      <div className={styles["vote__questionaries"]}>
        <div>
          <input type="text" /> <LuPlus />
        </div>
        <div>
          <input type="text" /> <LuPlus />
        </div>
      </div>
      <div className={styles["vote__duration"]}>
        <Text>투표기간</Text>
        <div className={styles["selectors__wrapper"]}>
          <input type="text" style={{ width: "100%" }} />
          <input type="text" style={{ width: "100%" }} />
          <input type="text" style={{ width: "100%" }} />
        </div>
      </div>
      <div className={styles["vote__button"]}>버튼</div>
    </div>
  );
};

export default Vote;
