import { selectIntro } from "@shared/@common/models/selectors";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { Input, Text } from "@shared/@common/ui/components";
import { useSelector } from "react-redux";
import { useInput } from "@shared/@common/ui/components/Input";
import { useAppDispatch } from "@app/store";
import { setIntro } from "@shared/@common/models/slices/userSlice";

interface InputIntroProps {
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

const InputIntro = ({
  className,
  disabled = false,
  isValid,
  setIsValid,
}: InputIntroProps) => {
  const dispatch = useAppDispatch();
  // 언어 설정
  const { label, error } = useLanguageContent(["profilepage", "InputIntro"]);

  const field = "intro";
  const inputValue = useSelector(selectIntro);

  const { errorMessage } = useInput({
    setIsValid,
    field,
    error,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    dispatch(setIntro(value));
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

export default InputIntro;
