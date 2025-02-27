import { InputVerifyPassword } from "@features/auth/verify-password/ui";
import styles from "./ChangePasswordSection.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { Text } from "@shared/@common/ui/components";
import { joinClassNames } from "@shared/@common/utils";
import { SectionLayout } from "@shared/pages/settings/layouts";
import { BackIcon } from "@shared/pages/settings/ui";
import { useState } from "react";

interface ChangePasswordSectionProps {
  className?: string;
}

const ChangePasswordSection = ({ className }: ChangePasswordSectionProps) => {
  const [inputValue, setInputValue] = useState("");
  const [isValid, setIsValid] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setInputValue(value);
  };

  // 언어 설정
  const { title, expl } = useLanguageContent([
    "settings",
    "ChangePasswordSection",
  ]);

  const classNames = joinClassNames([
    styles["change__password__section"],
    className,
  ]);

  return (
    <SectionLayout>
      <SectionLayout.Header>
        <BackIcon />
        <Text type="heading3">{title}</Text>
      </SectionLayout.Header>
      <SectionLayout.Main>
        <section className={styles["section"]}>
          <InputVerifyPassword
            inputValue={inputValue}
            isValid={isValid}
            handleChange={handleChange}
            field="password"
            label="비밀번호"
          />
        </section>
        <section className={styles["section"]}>
          <InputVerifyPassword
            inputValue={inputValue}
            isValid={isValid}
            handleChange={handleChange}
            field="password"
            label="비밀번호"
          />
          <InputVerifyPassword
            inputValue={inputValue}
            isValid={isValid}
            handleChange={handleChange}
            field="password"
            label="비밀번호"
          />
        </section>
        <section className={styles["section"]}>
          <Text>{expl(5)}</Text>
        </section>
      </SectionLayout.Main>
    </SectionLayout>
  );
};

export default ChangePasswordSection;
