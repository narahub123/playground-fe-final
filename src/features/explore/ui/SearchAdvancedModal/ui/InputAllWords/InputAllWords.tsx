import { selectKeyword, useSearchContext } from "@features/explore/models";
import styles from "./InputAllWords.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { Input, Text } from "@shared/@common/ui/components";
import { joinClassNames } from "@shared/@common/utils";
import { useSelector } from "react-redux";

interface InputAllWordsProps {
  className?: string;
  disabled?: boolean;
}

const InputAllWords = ({ className, disabled = false }: InputAllWordsProps) => {
  // 언어 설정
  const { label, expl } = useLanguageContent(["explore", "InputAllWords"]);

  const keyword = useSelector(selectKeyword);

  return (
    <Input
      field="all-words"
      label={label}
      inputValue={keyword}
      isValid
      handleChange={() => {}}
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
