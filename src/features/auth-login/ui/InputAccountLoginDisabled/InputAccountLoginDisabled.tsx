// import styles from "./InputAccountLoginDisabled.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { Input } from "@shared/@common/ui/components";

interface InputAccountLoginDisabledProps {
  inputValue: {
    [key: string]: string;
  };
}

const InputAccountLoginDisabled = ({
  inputValue,
}: InputAccountLoginDisabledProps) => {
  const field = Object.keys(inputValue)[0];

  // 언어 설정
  const { label } = useLanguageContent([
    "components",
    "InputAccountLoginDisabled",
  ]);

  const handleChange = () => {};

  return (
    <Input
      label={label(field)}
      field={field}
      inputValue={Object.values(inputValue)[0]}
      handleChange={handleChange}
      isValid={true}
      disabled={true}
    >
      <Input.Main>
        <Input.Bottom>
          <Input.Field />
        </Input.Bottom>
      </Input.Main>
    </Input>
  );
};

export default InputAccountLoginDisabled;
