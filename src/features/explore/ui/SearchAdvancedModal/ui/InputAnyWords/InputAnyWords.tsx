import { useAppDispatch } from "@app/store";
import { selectAnyKeywords, setAnyKeywords } from "@features/explore/models";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { Input, Text } from "@shared/@common/ui/components";
import { useSelector } from "react-redux";

interface InputAnyWordsProps {
  disabled?: boolean;
}

const InputAnyWords = ({ disabled = false }: InputAnyWordsProps) => {
  const dispatch = useAppDispatch();
  // 언어 설정
  const { label, expl } = useLanguageContent(["explore", "InputAnyWords"]);

  const anyWords = useSelector(selectAnyKeywords);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const anyWords = e.target.value;

    dispatch(setAnyKeywords(anyWords));
  };

  return (
    <Input
      field="anyWords"
      label={label}
      inputValue={anyWords}
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

export default InputAnyWords;
