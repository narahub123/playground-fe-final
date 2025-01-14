import { useAppDispatch } from "@app/store";
import { Icon } from "@shared/@common/ui/icons";
import Text from "../Text/Text";
import styles from "./Checkbox.module.css";
// import { useLanguageContent } from "@shared/@common/models/hooks";
import { joinClassNames } from "@shared/@common/utils";

interface CheckboxProps {
  text: string;
  inputValue: boolean | string;
  setInputValue: (value: any) => { type: string; payload: any };
  expl?: string;
  value?: string;
  className?: string;
  disabled?: boolean;
}

const Checkbox = ({
  text,
  expl,
  inputValue,
  setInputValue,
  value,
  className,
  disabled = false,
}: CheckboxProps) => {
  const dispatch = useAppDispatch();
  // 언어 설정
  //   const {} = useLanguageContent(["components", "Checkbox"]);

  const classNames = joinClassNames([
    styles["checkbox"],
    disabled ? styles["checkbox--disabled"] : "",
    className,
  ]);

  const handleClick = () => {
    if (typeof inputValue) dispatch(setInputValue(!inputValue));
    else dispatch(setInputValue(inputValue));
  };

  return (
    <div className={classNames}>
      <div className={joinClassNames([styles[`checkbox__textarea`]])}>
        <Text>{text}</Text>
        {expl && (
          <Text
            type="expl"
            className={joinClassNames([disabled ? styles["disabled"] : ""])}
          >
            {expl}
          </Text>
        )}
      </div>
      {typeof inputValue === "boolean" ? (
        inputValue ? (
          <Icon
            iconName="rectCheckboxFill"
            onClick={disabled ? undefined : handleClick}
          />
        ) : (
          <Icon
            iconName="rectCheckboxBlank"
            onClick={disabled ? undefined : handleClick}
          />
        )
      ) : value && inputValue === value ? (
        <Icon
          iconName="roundCheckboxFill"
          onClick={disabled ? undefined : handleClick}
        />
      ) : (
        <Icon
          iconName="roundCheckboxBlank"
          onClick={disabled ? undefined : handleClick}
        />
      )}
    </div>
  );
};

export default Checkbox;
