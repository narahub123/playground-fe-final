import { useAppDispatch } from "@app/store";
import { selectHashtags, setHashtags } from "@features/explore/models";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { Input, Text } from "@shared/@common/ui/components";
import { useSelector } from "react-redux";

interface InputHashtagProps {
  disabled?: boolean;
}

const InputHashtags = ({ disabled = false }: InputHashtagProps) => {
  const dispatch = useAppDispatch();
  // 언어 설정
  const { label, expl } = useLanguageContent(["explore", "InputHashtags"]);

  const hashtag = useSelector(selectHashtags);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const hashtag = e.target.value;

    dispatch(setHashtags(hashtag));
  };

  return (
    <Input
      field="hashtag"
      label={label}
      inputValue={hashtag}
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

export default InputHashtags;
