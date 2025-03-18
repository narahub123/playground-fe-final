import styles from "./InputOption.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { VOTE_OPTION_MAX } from "@shared/@common/constants";
import { Input } from "@shared/@common/ui/components";
import { joinClassNames } from "@shared/@common/utils";

interface InputOptionProps {
  className?: string;
  disabled?: boolean;
  inputValue: string;
  index: number;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputOption = ({
  className,
  disabled = false,
  inputValue,
  index,
  handleChange,
}: InputOptionProps) => {
  // 언어 설정
  const { label, extra } = useLanguageContent(["components", "InputOption"]);

  const classNames = joinClassNames([styles["input__option"], className]);

  return (
    <Input
      className={classNames}
      label={`${label} ${index + 1} ${index > 1 ? extra : ""}`}
      field={`option${index}`}
      inputValue={inputValue}
      isValid={inputValue !== ""}
      disabled={disabled}
      handleChange={handleChange}
      maxLength={VOTE_OPTION_MAX}
    >
      <Input.Main>
        <Input.Bottom>
          <Input.Field />
        </Input.Bottom>
      </Input.Main>
    </Input>
  );
};

export default InputOption;
