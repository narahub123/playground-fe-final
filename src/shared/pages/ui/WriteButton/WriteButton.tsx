import styles from "./WriteButton.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { joinClassNames } from "@shared/@common/utils";
import WriteIcon from "./WriteIcon";

interface WriteButtonProps {
  className?: string;
  disabled?: boolean;
}

const WriteButton = ({ className, disabled = false }: WriteButtonProps) => {
  // 언어 설정
  const { writeTitle } = useLanguageContent(["components", "WriteButton"]);

  const classNames = joinClassNames([styles["write__button"], className]);

  return (
    <button className={classNames} title={writeTitle}>
      <WriteIcon color="white" width={26} height={26} />
    </button>
  );
};

export default WriteButton;
