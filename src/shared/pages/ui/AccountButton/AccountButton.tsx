import { defaultProfileImage } from "@shared/@common/assets";
import styles from "./AccountButton.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { joinClassNames } from "@shared/@common/utils";

interface AccountButtonProps {
  className?: string;
  disabled?: boolean;
}

const AccountButton = ({ className, disabled = false }: AccountButtonProps) => {
  // 언어 설정
  const { title } = useLanguageContent(["components", "AccountButton"]);

  const classNames = joinClassNames([styles["account__button"], className]);

  return (
    <button className={classNames} title={title}>
      <img
        src={defaultProfileImage}
        alt=""
        className={styles[`account__button__image`]}
      />
    </button>
  );
};

export default AccountButton;
