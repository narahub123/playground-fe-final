import { LoginInputValueType } from "@features/auth-login/types";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { Input } from "@shared/@common/ui/components";

interface InputAccountLoginDisabledProps {
  inputValue: LoginInputValueType;
}

const InputAccountLoginDisabled = ({
  inputValue,
}: InputAccountLoginDisabledProps) => {
  const field = Object.keys(inputValue).includes("email")
    ? "email"
    : Object.keys(inputValue).includes("phone")
    ? "phone"
    : "userId";

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
      inputValue={inputValue[field] as string}
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
