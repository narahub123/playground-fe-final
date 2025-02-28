import styles from "./ChangePasswordSection.module.css";
import { useAPIError, useLanguageContent } from "@shared/@common/models/hooks";
import { Button, Text } from "@shared/@common/ui/components";
import { joinClassNames } from "@shared/@common/utils";
import { SectionLayout } from "@shared/pages/settings/layouts";
import { BackIcon } from "@shared/pages/settings/ui";
import { useState } from "react";
import { useCompiledInputError } from "@shared/@common/ui/components/Input";
import { fetchWithAuth } from "@shared/pages/utils";
import { VerifyPasswordWithError } from "@features/auth/verify-password/ui";
import NewPasswordFields from "./NewPasswordFields";
import { ErrorDescriptionCodeType } from "@shared/@common/types";

interface ChangePasswordSectionProps {
  className?: string;
}

const ChangePasswordSection = ({ className }: ChangePasswordSectionProps) => {
  const [inputValue, setInputValue] = useState<{
    password: string;
    newPw: string;
    confirm: string;
  }>({
    password: "",
    newPw: "",
    confirm: "",
  });

  const [isValid, setIsValid] = useState<{
    password: boolean;
    newPw: boolean;
    confirm: boolean;
  }>({
    password: false,
    newPw: false,
    confirm: false,
  });

  const [errorMessage, setErrorMessage] = useState<{
    password?: string;
    newPw?: string;
    confirm?: string;
  }>({});

  // input onChange
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const id = e.target.id;

    setInputValue((prev) => ({
      ...prev,
      [id]: value,
    }));

    setErrorMessage({});

    if (value !== "") {
      setIsValid((prev) => {
        if (prev[id as keyof typeof prev] !== true) {
          return {
            ...prev,
            [id]: true,
          };
        } else return prev;
      });

      return;
    } else {
      setIsValid((prev) => {
        if (prev[id as keyof typeof prev] !== false) {
          return {
            ...prev,
            [id]: false,
          };
        } else return prev;
      });
    }
  };

  // 언어 설정
  const { title, expl, error, unmatched, btn } = useLanguageContent([
    "settings",
    "ChangePasswordSection",
  ]);

  const classNames = joinClassNames([
    styles["change__password__section"],
    className,
  ]);

  const { INCOMPLETE } = useCompiledInputError(error);

  const { getErrorDescription } = useAPIError();

  // 저장
  const handleSubmit = async () => {
    // 유효성 검사
    if (inputValue["password"] === inputValue["newPw"]) {
      setErrorMessage({
        newPw: getErrorDescription("PASSWORD_UNCHANGED"),
      });

      setIsValid((prev) => {
        if (prev["password"] !== false) {
          return {
            ...prev,
            newPw: false,
          };
        } else return prev;
      });

      return;
    }
    if (INCOMPLETE && !inputValue["newPw"].match(INCOMPLETE.regExp)) {
      setErrorMessage({ newPw: INCOMPLETE.errorMessage });
      setIsValid((prev) => {
        if (prev["newPw"] !== false) {
          return {
            ...prev,
            newPw: false,
          };
        } else return prev;
      });
      return;
    }

    // 새 비밀번호 일치 확인
    if (inputValue["newPw"] !== inputValue["confirm"]) {
      setErrorMessage({ confirm: unmatched });
      setIsValid((prev) => {
        if (prev["confirm"] !== false) {
          return {
            ...prev,
            confirm: false,
          };
        } else return prev;
      });
      return;
    }

    const result = await fetchWithAuth(
      "/users/password", // 비밀번호 변경하기
      { method: "PATCH" },
      {
        password: inputValue.password,
        newPassword: inputValue.newPw,
      }
    );
    try {
      if (result.success) {
      } else {
        const errorCode = Object.values(
          result.error.details
        )[0] as ErrorDescriptionCodeType;

        if (errorCode === "PASSWORD_UNCHANGED") {
          setErrorMessage({
            newPw: getErrorDescription(errorCode),
          });

          setIsValid((prev) => {
            if (prev["password"] !== false) {
              return {
                ...prev,
                newPw: false,
              };
            } else return prev;
          });

          return;
        }
        setErrorMessage({
          password: getErrorDescription(errorCode),
        });

        setIsValid((prev) => {
          if (prev["password"] !== false) {
            return {
              ...prev,
              password: false,
            };
          } else return prev;
        });
      }
    } catch (error) {}
  };

  return (
    <SectionLayout className={classNames}>
      <SectionLayout.Header>
        <BackIcon />
        <Text type="heading3">{title}</Text>
      </SectionLayout.Header>
      <SectionLayout.Main>
        <section className={styles["section"]}>
          <VerifyPasswordWithError
            className={styles["item"]}
            inputValue={inputValue["password"]}
            isValid={isValid["password"]}
            errorMessage={errorMessage["password"]}
            handleChange={handleChange}
          />
        </section>
        <section className={styles["section"]}>
          <NewPasswordFields>
            <NewPasswordFields.New
              className={styles["item"]}
              inputValue={inputValue["newPw"]}
              isValid={isValid["newPw"]}
              errorMessage={errorMessage["newPw"]}
              handleChange={handleChange}
            />
            <NewPasswordFields.Confirm
              className={styles["item"]}
              inputValue={inputValue["confirm"]}
              isValid={isValid["confirm"]}
              errorMessage={errorMessage["confirm"]}
              handleChange={handleChange}
            />
          </NewPasswordFields>
        </section>
        <section
          className={joinClassNames([styles["section"], styles["item"]])}
        >
          <Text className={styles["change__password__section__explanation"]}>
            {expl(5)}
          </Text>
        </section>
        <div
          className={joinClassNames([
            styles["change__password__button"],
            styles["item"],
          ])}
        >
          <Button
            onClick={handleSubmit}
            bgColor="colorTheme"
            rounded="xl"
            isValid={Object.values(isValid).every((field) => Boolean(field))}
            className={styles["verify__password__btn"]}
          >
            {btn}
          </Button>
        </div>
      </SectionLayout.Main>
    </SectionLayout>
  );
};

export default ChangePasswordSection;
