import { useLanguageContent } from "@shared/@common/models/hooks";
import { Input } from "@shared/@common/ui/components";

interface InputPasswordLoginProps {
  isValid:
    | {
        [key: string]: boolean; // 각 필드에 대한 유효성 상태를 업데이트하는 함수입니다. 필드 이름을 키로 하고, boolean 값을 업데이트합니다.
      }
    | boolean; // 전체 유효성 상태를 업데이트하는 함수입니다. 모든 입력 필드에 대한 유효성 상태를 한 번에 업데이트할 수 있습니다.;
  inputValue: {
    [key: string]: string;
  };
  setInputValue: React.Dispatch<
    React.SetStateAction<{
      [key: string]: string;
    }>
  >;
  className?: string;
  disabled?: boolean;
}

const InputPasswordLogin = ({
  isValid,
  inputValue,
  setInputValue,
  className,
  disabled = false,
}: InputPasswordLoginProps) => {
  // 언어 설정
  const { label } = useLanguageContent(["components", "InputPasswordLogin"]);

  const field = "password";

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setInputValue((prev) => ({
      ...prev,
      ["password"]: value,
    }));
  };

  return (
    <Input
      className={className}
      label={label}
      field={field}
      inputValue={inputValue["password"]}
      handleChange={handleChange}
      isValid={typeof isValid === "object" ? isValid[field] ?? false : isValid}
      disabled={disabled}
    >
      <Input.Main>
        <Input.Bottom>
          <Input.Field />
        </Input.Bottom>
      </Input.Main>
    </Input>
  );
};

export default InputPasswordLogin;
