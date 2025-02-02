import { Input } from "@test/ui/components";
import styles from "./TestPage.module.css";
import { joinClassNames } from "@shared/@common/utils";
import { useState } from "react";

interface TestPageProps {
  className?: string;
  disabled?: boolean;
}

const TestPage = ({ className, disabled = false }: TestPageProps) => {
  const [inputValue, setInputValue] = useState("");
  const [isValid, setIsValid] = useState(false);
  const classNames = joinClassNames([styles["testpage"], className]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    console.log(value);
    setInputValue(value);
  };

  return (
    <div className={classNames}>
      <Input
        label="라벨"
        field="field"
        maxLength="100"
        inputValue={inputValue}
        handleChange={handleChange}
        isValid={isValid}
      >
        <Input.Main>
          <Input.Bottom>
            <Input.Field />
          </Input.Bottom>
        </Input.Main>
        <Input.Error>에러</Input.Error>
        <Input.Dropdown>드롭다운</Input.Dropdown>
      </Input>
    </div>
  );
};

export default TestPage;
