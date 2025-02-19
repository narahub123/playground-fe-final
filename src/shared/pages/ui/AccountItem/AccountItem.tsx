import styles from "./AccountItem.module.css";
import { defaultProfileImage } from "@shared/@common/assets";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { Text } from "@shared/@common/ui/components";
import { joinClassNames } from "@shared/@common/utils";

interface AccountItemProps {
  account: {
    profileImage: string;
    username: string;
    userId: string;
  };
  className?: string;
  disabled?: boolean;
}

const AccountItem = ({
  account,
  className,
  disabled = false,
}: AccountItemProps) => {
  const {} = useLanguageContent(["components", "AccountItem"]);
  const classNames = joinClassNames([styles["account__item"], className]);

  return (
    <div className={classNames}>
      <div>
        <img
          src={account.profileImage}
          alt="프로필 사진"
          className={styles["account__item__img"]}
        />
      </div>
      <div>
        <Text className={styles["account__item__username"]}>
          {account.username}
        </Text>
        <Text
          className={styles["account__item__userid"]}
        >{`@${account.userId}`}</Text>
      </div>
    </div>
  );
};

export default AccountItem;
