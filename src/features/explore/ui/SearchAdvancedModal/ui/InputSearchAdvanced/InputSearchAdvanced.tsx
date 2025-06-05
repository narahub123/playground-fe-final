import { RootState, useAppDispatch } from "@app/store";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { Input, Text } from "@shared/@common/ui/components";
import { useSelector } from "react-redux";

interface InputSearchAdvancedProps {
  disabled?: boolean;
  field: string;
  selector: (state: RootState) => string;
  reducer: any;
}

const InputSearchAdvanced = ({
  disabled = false,
  field,
  reducer,
  selector,
}: InputSearchAdvancedProps) => {
  const dispatch = useAppDispatch();
  // 언어 설정
  const { labelsAndExpls } = useLanguageContent([
    "explore",
    "InputSearchAdvanced",
  ]);

  const value = useSelector(selector);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    dispatch(reducer(value));
  };

  return (
    <Input
      field={field}
      label={labelsAndExpls[field].label}
      inputValue={value}
      isValid
      handleChange={handleChange}
      disabled={disabled}
    >
      <Input.Main>
        <Input.Bottom>
          <Input.Field />
        </Input.Bottom>
      </Input.Main>
      <Input.Extra>
        <Text type="expl">{labelsAndExpls[field].expl}</Text>
      </Input.Extra>
    </Input>
  );
};

export default InputSearchAdvanced;
