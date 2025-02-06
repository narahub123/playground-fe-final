import { useLanguageContent } from "@shared/@common/models/hooks";
import { Input, Text } from "@shared/@common/ui/components";

interface InputVerificationCodeProps {
  inputValue: {
    [key: string]: string;
  };
  setInputValue: React.Dispatch<
    React.SetStateAction<{ [key: string]: string }>
  >;
  errorMessage: string;
  isValid: boolean;
  setIsValid: React.Dispatch<React.SetStateAction<boolean>>;
  className?: string;
  disabled?: boolean;
}

const InputVerificationCode = ({
  inputValue,
  setInputValue,
  errorMessage,
  isValid,
  setIsValid,
  className,
  disabled = false,
}: InputVerificationCodeProps) => {
  // 언어 설정
  const { label } = useLanguageContent(["components", "InputVerificationCode"]);

  const field = "verificationCode";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setInputValue((prev) => ({
      ...prev,
      [field]: value,
    }));

    setIsValid(true);
  };

  return (
    <Input
      className={className}
      label={label}
      field={field}
      inputValue={inputValue?.[field] || ""}
      handleChange={handleChange}
      isValid={isValid}
      disabled={disabled}
    >
      <Input.Main>
        <Input.Bottom>
          <Input.Field />
        </Input.Bottom>
      </Input.Main>
      <Input.Extra>
        <Text type="expl" status="error">
          {errorMessage}
        </Text>
      </Input.Extra>
    </Input>
  );
};

export default InputVerificationCode;
