import styles from "./ScreenPassword.module.css";
import { useState } from "react";
import { useAPIError, useLanguageContent } from "@shared/@common/models/hooks";
import { Button, Modal, Text } from "@shared/@common/ui/components";
import { joinClassNames } from "@shared/@common/utils";
import { fetchWithAuth } from "@shared/pages/utils";
import { InputPassword } from "@shared/auth/ui/components";
import { ErrorDescriptionCodeType } from "@shared/@common/types";

interface ScreenPasswordProps {
  className?: string;
  setCurPage: React.Dispatch<React.SetStateAction<number>>;
}

const ScreenPassword = ({ className, setCurPage }: ScreenPasswordProps) => {
  const [inputValue, setInputValue] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setInputValue(value);

    if (value !== "") {
      setIsValid(true);
      setErrorMessage("");
    } else {
      setIsValid(false);
    }
  };

  const { getErrorDescription } = useAPIError();

  const handleSubmit = async () => {
    const result = await fetchWithAuth(
      "/auth/password/verify",
      {},
      { password: inputValue }
    );

    if (result.success) {
      setCurPage((prev) => prev + 1);
    } else {
      setIsValid(false);
      const error = Object.values(result.error.details)[0];

      setErrorMessage(getErrorDescription(error as ErrorDescriptionCodeType));
    }
  };
  // 언어 설정
  const { heading, expl, btn, input } = useLanguageContent([
    "auths",
    "ScreenPassword",
  ]);

  const classNames = joinClassNames([styles["screen__password"], className]);

  return (
    <div className={classNames}>
      <Modal.Body>
        <div className={styles["screen__password__header"]}>
          <Text type="heading2">{heading}</Text>
          <Text type="expl">{expl}</Text>
        </div>
        <div className={styles["screen__password__body"]}>
          <div className={styles["password__field"]}>
            <InputPassword
              className={styles["password__field__input"]}
              field="password"
              label={input.label}
              inputValue={inputValue}
              isValid={isValid}
              handleChange={handleChange}
            />
            <Text
              type="expl"
              status="error"
              className={styles["password__field__error"]}
            >
              {errorMessage}
            </Text>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <div className={styles["screen__password__footer"]}>
          <Button
            onClick={handleSubmit}
            variant={isValid ? "solid" : "outline"}
            rounded="2xl"
            style={{ width: "100%" }}
            isValid={isValid}
          >
            {isValid ? btn.next : btn.cancel}
          </Button>
        </div>
      </Modal.Footer>
    </div>
  );
};

export default ScreenPassword;
