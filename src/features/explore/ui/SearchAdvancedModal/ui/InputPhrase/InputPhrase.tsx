import { useAppDispatch } from "@app/store";
import { selectPhrase, setPhrase } from "@features/explore";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { Input, Text } from "@shared/@common/ui/components";
import { useSelector } from "react-redux";

interface InputPhraseProps {
  disabled?: boolean;
}

const InputPhrase = ({ disabled = false }: InputPhraseProps) => {
  const dispatch = useAppDispatch();
  // 언어 설정
  const { label, expl } = useLanguageContent(["explore", "InputPhrase"]);

  const phrase = useSelector(selectPhrase);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const phrase = e.target.value;

    dispatch(setPhrase(phrase));
  };

  return (
    <Input
      field="phrase"
      label={label}
      inputValue={phrase}
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

export default InputPhrase;
