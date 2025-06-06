import { Input, Text } from "@shared/@common/ui/components";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { useSelector } from "react-redux";
import { useAppDispatch } from "@app/store";

interface InputNumberProps {
  disabled?: boolean;
  field: string;
  selector: (value: any) => number;
  reducer: any;
  min: number;
  max: number;
}

const InputNumber = ({
  disabled = false,
  field,
  selector,
  reducer,
  min,
  max,
}: InputNumberProps) => {
  const dispatch = useAppDispatch();
  const { labelsAndExpls } = useLanguageContent(["explore", "InputNumber"]);

  const value = useSelector(selector);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    dispatch(reducer(Number(value)));
  };

  return (
    <Input
      field={field}
      label={labelsAndExpls[field].label}
      inputValue={value === 0 ? "" : value.toString()}
      isValid
      handleChange={handleChange}
      disabled={disabled}
      min={min}
      max={max}
    >
      <Input.Main>
        <Input.Bottom>
          <Input.Number />
        </Input.Bottom>
      </Input.Main>
      <Input.Extra>
        <Text type="expl">{labelsAndExpls[field].expl}</Text>
      </Input.Extra>
    </Input>
  );
};

export default InputNumber;
