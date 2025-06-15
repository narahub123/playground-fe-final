import styles from "./BirthWrapper.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { Button, Text } from "@shared/@common/ui/components";
import { joinClassNames } from "@shared/@common/utils";
import BirthSelectGroup from "../BirthSelectGroup/BirthSelectGroup";
import SelectBirthMonthAndDateVisibility from "../SelectBirthMonthAndDateVisibility/SelectBirthMonthAndDateVisibility";
import { useState } from "react";
import SelectBirthYearVisibility from "../SelectBirthYearVisibility/SelectBirthYearVisibility";

interface BirthWrapperProps {}

const BirthWrapper = ({}: BirthWrapperProps) => {
  // 언어 설정
  const { header1, cancel, expl1, expl2, header2, expl3, remove } =
    useLanguageContent(["profilepage", "BirthWrapper"]);

  const classNames = joinClassNames([styles["birth__wrapper"]]);

  const [isValid, setIsValid] = useState<
    | {
        [key: string]: boolean;
      }
    | boolean
  >({
    year: false,
    month: false,
    date: false,
    monthAndDate: false,
    yearVisibility: false,
  });

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
        <SelectBirthMonthAndDateVisibility setIsValid={setIsValid} />
        <SelectBirthYearVisibility setIsValid={setIsValid} />
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
