import { selectWebsite } from "@shared/@common/models/selectors";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { Input, Text } from "@shared/@common/ui/components";
import { useInput } from "@shared/@common/ui/components/Input";
import { useSelector } from "react-redux";
import { useAppDispatch } from "@app/store";
import { setWebsite } from "@shared/@common/models/slices/userSlice";

interface InputWebsiteProps {
  className?: string;
  disabled?: boolean;
  isValid:
    | {
        [key: string]: boolean;
      }
    | boolean;
  setIsValid: React.Dispatch<
    React.SetStateAction<
      | {
          [key: string]: boolean;
        }
      | boolean
    >
  >;
}

const InputWebsite = ({
  className,
  disabled = false,
  isValid,
  setIsValid,
}: InputWebsiteProps) => {
  const dispatch = useAppDispatch();
  // 언어 설정
  const { label, error } = useLanguageContent(["profilepage", "InputWebsite"]);

  const field = "website";

  const inputValue = useSelector(selectWebsite);

  const { errorMessage, validateBasicRules, clearErrorAndValidation } =
    useInput({
      setIsValid,
      field,
      error,
    });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    dispatch(setWebsite(value));

    // 기본 에러 확인
    if (!validateBasicRules(value)) return;

    // 모든 유효성 검사를 통과한 경우
    clearErrorAndValidation();
  };

  return (
    <Input
      className={className}
      label={label}
      field={field}
      inputValue={inputValue}
      handleChange={handleChange}
      isValid={typeof isValid === "object" ? isValid[field] ?? false : isValid}
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

export default InputWebsite;
