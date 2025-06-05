import { Text } from "@shared/@common/ui/components";
import styles from "./RadioGroup.module.css";
import { joinClassNames } from "@shared/@common/utils";
import { Icon } from "@shared/@common/ui/icons";
import { IRadioGroupItem } from "@shared/pages/types";

interface RadioGroupProps {
  className?: string;
  disabled?: boolean;
  field: string;
  list: IRadioGroupItem[];
  selected: string;
  onChange: (value: string) => void;
}

const RadioGroup = ({
  className,
  disabled = false,
  field,
  list,
  selected,
  onChange,
}: RadioGroupProps) => {
  const classNames = joinClassNames([styles["radio__group"], className]);

  return (
    <div className={classNames}>
      {list.map((item, index) => {
        const modifiedField = `${field}${index}`;
        const isChecked = item.value === selected;
        return (
          <div>
            <label
              className={styles["wrapper"]}
              htmlFor={modifiedField}
              key={item.value}
            >
              <Text>{item.text}</Text>
              {isChecked ? (
                <Icon
                  iconName="roundCheckboxFill"
                  iconColor="cornflowerblue"
                  iconSize="2xl"
                  tabIndex={0}
                />
              ) : (
                <Icon
                  iconName="roundCheckboxBlank"
                  iconSize="2xl"
                  tabIndex={0}
                />
              )}
              <input
                type="radio"
                name={modifiedField}
                id={modifiedField}
                disabled={disabled}
                checked={isChecked}
                onChange={() => onChange(item.value)}
                className={styles["radio"]}
                tabIndex={-1}
              />
            </label>
            {item.expl && <Text type="expl">{item.expl}</Text>}
          </div>
        );
      })}
    </div>
  );
};

export default RadioGroup;
