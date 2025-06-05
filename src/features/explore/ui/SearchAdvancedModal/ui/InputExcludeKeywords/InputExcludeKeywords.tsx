import { useAppDispatch } from "@app/store";
import {
  selectExcludeKeywords,
  setExcludeKeywords,
} from "@features/explore/models";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { Input, Text } from "@shared/@common/ui/components";
import { useSelector } from "react-redux";

interface InputExcludeWordsProps {
  disabled?: boolean;
}

const InputExcludeKeywords = ({ disabled = false }: InputExcludeWordsProps) => {
  const dispatch = useAppDispatch();
  // 언어 설정
  const { label, expl } = useLanguageContent([
    "explore",
    "InputExcludeKeywords",
  ]);

  const excludeWords = useSelector(selectExcludeKeywords);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const excludeWords = e.target.value;

    dispatch(setExcludeKeywords(excludeWords));
  };

  return (
    <Input
      field="excludeWords"
      label={label}
      inputValue={excludeWords}
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
        <Text type="expl">{expl}</Text>
      </Input.Extra>
    </Input>
  );
};

export default InputExcludeKeywords;
