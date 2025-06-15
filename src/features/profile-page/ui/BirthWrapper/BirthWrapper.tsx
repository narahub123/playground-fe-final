import styles from "./BirthWrapper.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { Button, Text } from "@shared/@common/ui/components";
import { joinClassNames } from "@shared/@common/utils";
import BirthSelectGroup from "../BirthSelectGroup/BirthSelectGroup";

interface BirthWrapperProps {}

const BirthWrapper = ({}: BirthWrapperProps) => {
  // 언어 설정
  const { header1, cancel, expl1, expl2, header2, expl3, remove } =
    useLanguageContent(["profilepage", "BirthWrapper"]);

  const classNames = joinClassNames([styles["birth__wrapper"]]);

  return (
    <div className={classNames}>
      <section>
        <div className={styles["header__wrapper"]}>
          <Text>{header1}</Text>
          <span className={styles["span"]}>·</span>
          <Button
            isValid
            onClick={() => {}}
            variant="plain"
            className={styles["btn"]}
            fontColor="cornflowerblue"
          >
            {cancel}
          </Button>
        </div>
        <Text type="expl" className={styles["margin"]}>
          {expl1}
        </Text>
        <Text type="expl" className={styles["margin"]}>
          {expl2}
        </Text>
        <BirthSelectGroup />
      </section>
      <section>
        <Text>{header2}</Text>
        <Text type="expl" className={styles["margin"]}>
          {expl3}
        </Text>
        <div>input 태어날 달과 날짜</div>
        <div>input 년</div>
      </section>
      <div className={styles["btn__wrapper"]}>
        <Button
          isValid
          onClick={() => {}}
          fontColor="red"
          className={styles["remove"]}
        >
          {remove}
        </Button>
      </div>
    </div>
  );
};

export default BirthWrapper;
