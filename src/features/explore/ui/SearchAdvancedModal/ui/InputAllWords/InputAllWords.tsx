import { useAppDispatch } from "@app/store";
import { selectAllWords, setAllWords } from "@features/explore";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { Input, Text } from "@shared/@common/ui/components";
import { useSelector } from "react-redux";

interface InputAllWordsProps {
  className?: string;
  disabled?: boolean;
}

const InputAllWords = ({ disabled = false }: InputAllWordsProps) => {
  const dispatch = useAppDispatch();
  // 언어 설정
  const { label, expl } = useLanguageContent(["explore", "InputAllWords"]);

  const allWords = useSelector(selectAllWords);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const keyword = e.target.value;

    dispatch(setAllWords(keyword));
  };

  return (
    <Input
      field="keyword"
      label={label}
      inputValue={allWords}
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

export default InputAllWords;
