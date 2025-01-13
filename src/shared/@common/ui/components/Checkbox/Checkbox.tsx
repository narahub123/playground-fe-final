import { useAppDispatch } from "@app/store";
import Icon from "../Icon/Icon";
import Text from "../Text/Text";
import styles from "./Checkbox.module.css";
// import { useLanguageContent } from "@shared/@common/models/hooks";
import { joinClassNames } from "@shared/@common/utils";

interface CheckboxProps {
  inputValue: boolean | string;
  setInputValue: (value: any) => { type: string; payload: any };
  value?: string;
  className?: string;
  disabled?: boolean;
}

const Checkbox = ({
  inputValue,
  setInputValue,
  value,
  className,
  disabled = false,
}: CheckboxProps) => {
  const dispatch = useAppDispatch();
  // 언어 설정
  //   const {} = useLanguageContent(["components", "Checkbox"]);

  const classNames = joinClassNames([styles["checkbox"], className]);

  const handleClick = () => {
    if (typeof inputValue) dispatch(setInputValue(!inputValue));
    else dispatch(setInputValue(inputValue));
  };

  return (
    <div className={classNames}>
      <div className={styles[`checkbox__textarea`]}>
        <Text text={"아이템"} />
        <Text text={"설명"} type="expl" />
      </div>
      {typeof inputValue === "boolean" ? (
        inputValue ? (
          <Icon iconName="rectCheckboxFill" onClick={handleClick} />
        ) : (
          <Icon iconName="rectCheckboxBlank" onClick={handleClick} />
        )
      ) : value && inputValue === value ? (
        <Icon iconName="roundCheckboxFill" onClick={handleClick} />
      ) : (
        <Icon iconName="roundCheckboxBlank" onClick={handleClick} />
      )}
    </div>
  );
};

export default Checkbox;
