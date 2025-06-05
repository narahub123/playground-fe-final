import styles from "./SelectDateGroup.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { selectAdvancedPeriod } from "@features/explore";
import { joinClassNames } from "@shared/@common/utils";
import { useSelector } from "react-redux";
import {
  birthDateList,
  birthMonthList,
  birthYearList,
} from "@features/auth-email/data";
import { useState } from "react";
import {
  sinceArray,
  SelectDateUnit,
} from "@features/explore/ui/SearchAdvancedModal";

interface SelectDateGroupProps {
  className?: string;
  field: string;
  array: {
    field: string;
    optionList: any;
    reducer: any;
  }[];
}

const SelectDateGroup = ({ className, field, array }: SelectDateGroupProps) => {
  const [isValid, setIsValid] = useState<
    | {
        [key: string]: boolean;
      }
    | boolean
  >({});
  // 언어 설정
  const { labels } = useLanguageContent(["explore", "SelectDateGroup"]);

  const classNames = joinClassNames([styles["select__date__group"], className]);

  const due = useSelector(selectAdvancedPeriod);

  const today = {
    year: new Date().getFullYear(),
    month: new Date().getMonth() + 1,
    date: new Date().getDate(),
  };

  return (
    <div className={classNames}>
      {array.map((unit) => {
        return (
          <SelectDateUnit
            key={unit.field}
            field={unit.field}
            label={labels[unit.field]}
            value={
              due[field as keyof typeof due][
                unit.field as keyof typeof today
              ] || 0
            }
            options={
              unit.field === "date"
                ? birthDateList(
                    due[field as keyof typeof due]["year"],
                    due[field as keyof typeof due]["month"],
                    labels[unit.field]
                  )
                : unit.field === "month"
                ? birthMonthList(labels[unit.field])
                : birthYearList(labels[unit.field])
            }
            updateFunc={unit.reducer}
            setIsValid={setIsValid}
          />
        );
      })}
    </div>
  );
};

export default SelectDateGroup;
