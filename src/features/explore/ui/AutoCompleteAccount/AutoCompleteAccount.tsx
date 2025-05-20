import { IAccount } from "@shared/@common/types";
import styles from "./AutoCompleteAccount.module.css";
import { joinClassNames } from "@shared/@common/utils";
import { ProfileImage, Text } from "@shared/@common/ui/components";
import { defaultProfileImage } from "@shared/@common/assets";
import { useNavigate } from "react-router-dom";

interface AutoCompleteAccountProps {
  className?: string;
  account: IAccount;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const AutoCompleteAccount = ({
  className,
  account,
  setIsOpen,
}: AutoCompleteAccountProps) => {
  const classNames = joinClassNames([
    styles["autocomplete__account"],
    className,
  ]);
  const navigate = useNavigate();

  const handleSelection = () => {
    setIsOpen(false);
    navigate(`/${account.userId}`);
  };

  return (
    <div className={classNames} onClick={() => handleSelection()}>
      <div className={styles["image__wrapper"]}>
        <ProfileImage
          image={account.profileImage || defaultProfileImage}
          rounded="full"
          width={"40px"}
        />
      </div>
      <div className={styles["info__wrapper"]}>
        <div className={styles["username__wrapper"]}>
          <Text>{account.username}</Text>
        </div>
        <div className={styles["userid__wrapper"]}>
          <Text>{"@" + account.userId}</Text>
        </div>
      </div>
    </div>
  );
};

export default AutoCompleteAccount;
