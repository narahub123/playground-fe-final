import styles from "./VerifyPassword.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { Button, Spinner, Text } from "@shared/@common/ui/components";
import { joinClassNames } from "@shared/@common/utils";
import InputVerifyPassword from "../InputVerifyPassword/InputVerifyPassword";
import { useState } from "react";
import { useToast } from "@shared/@common/ui/components/Toast/hooks";
import { fetchWithAuth } from "@shared/pages/utils";

interface VerifyPasswordProps {
  className?: string;
  setIsAuthorized: React.Dispatch<React.SetStateAction<boolean>>;
}

const VerifyPassword = ({
  className,
  setIsAuthorized,
}: VerifyPasswordProps) => {
  const [inputValue, setInputValue] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // 언어 설정
  const { heading, description, btn, errors } = useLanguageContent([
    "auths",
    "VerifyPassword",
  ]);

  const classNames = joinClassNames([styles["verify__password"], className]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setInputValue(value);

    if (inputValue !== "") {
      setIsValid((prev) => {
        if (prev !== true) {
          return true;
        } else return prev;
      });

      return;
    }
    setIsValid((prev) => {
      if (prev !== false) {
        return false;
      } else return prev;
    });
  };

  const toast = useToast();

  const handleSubmit = async () => {
    setIsLoading(true);

    const result = await fetchWithAuth(
      "/auth/password/verify",
      {},
      {
        password: inputValue,
      }
    );
    try {
      if (result.success) {
        setIsAuthorized(true);
      } else {
        // false 시 toast 사용
        for (const error of Object.values(result.error.details)) {
          toast({
            title: `${errors.title(result.code)}`,
            description: `${errors.description(error)}`,
            type: "error",
          });
        }
      }
    } catch (error) {
      console.error(error);
      toast({
        title: errors.title(result.code),
        description: errors.desciption("UNKNOWN_ERROR"),
        type: "error",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={classNames}>
      <div className={styles["verify__password__text"]}>
        <Text type="heading3" className={styles["verify__password__item"]}>
          {heading}
        </Text>
        <Text type="expl" className={styles["verify__password__item"]}>
          {description}
        </Text>
      </div>
      <InputVerifyPassword
        className={styles["verify__password__item"]}
        inputValue={inputValue}
        isValid={isValid}
        handleChange={handleChange}
        field="password"
        label="비밀번호"
      />
      <div className={styles["verify__password__btn__wrapper"]}>
        <Button
          onClick={handleSubmit}
          bgColor="colorTheme"
          rounded="xl"
          isValid={isValid}
          className={styles["verify__password__btn"]}
        >
          {isLoading ? <Spinner /> : btn}
        </Button>
      </div>
    </div>
  );
};

export default VerifyPassword;
