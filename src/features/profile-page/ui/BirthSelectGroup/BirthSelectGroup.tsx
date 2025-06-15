import styles from "./BirthSelectGroup.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { joinClassNames } from "@shared/@common/utils";
import SelectYear from "../SelectYear/SelectYear";
import { useState } from "react";
import SelectMonth from "../SelectMonth/SelectMonth";
import SelectDate from "../SelectDate/SelectDate";

interface BirthSelectGroupProps {
  className?: string;
  disabled?: boolean;
}

const BirthSelectGroup = ({ className }: BirthSelectGroupProps) => {
  const [isValid, setIsValid] = useState<
    | {
        [key: string]: boolean;
      }
    | boolean
  >({
    year: false,
    month: false,
    date: false,
  });

  const classNames = joinClassNames([
    styles["birth__select__group"],
    className,
  ]);

  return (
    <div className={classNames}>
      <SelectYear setIsValid={setIsValid} />
      <SelectMonth setIsValid={setIsValid} />
      <SelectDate setIsValid={setIsValid} />
    </div>
  );
};

export default BirthSelectGroup;
