import styles from "./BirthSelectGroup.module.css";
import { joinClassNames } from "@shared/@common/utils";
import { useState } from "react";
import { SelectDate, SelectMonth, SelectYear } from "@features/profile-page";

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
