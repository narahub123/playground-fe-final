import { selectBirth } from "@shared/@common/models/selectors";
import styles from "./BirthTab.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { Icon } from "@shared/@common/ui/icons";
import { joinClassNames } from "@shared/@common/utils";
import { useSelector } from "react-redux";
import { Text } from "@shared/@common/ui/components";

interface BirthTabProps {
  className?: string;
  onClick?: () => void;
  href?: string;
}

const BirthTab = ({ className, onClick, href }: BirthTabProps) => {
  // 언어 설정
  const { label } = useLanguageContent(["profilepage", "BirthTab"]);

  const birth = useSelector(selectBirth);

  const classNames = joinClassNames([styles["birth__tab"], className]);

  const Inner = () => (
    <div className={styles["wrapper"]}>
      <div className={styles["text__wrapper"]}>
        <Text>{label}</Text>
        <Text>{`${birth.year}년 ${birth.month}월 ${birth.date}일`}</Text>
      </div>
      <Icon iconName="rightPointer" bgColor="transparent" iconSize="xl" />
    </div>
  );

  const Comp = href
    ? () => (
        <a className={classNames} href={href}>
          <Inner />
        </a>
      )
    : () => (
        <button className={classNames} onClick={onClick && onClick}>
          <Inner />
        </button>
      );

  return <Comp />;
};

export default BirthTab;
