import styles from "./ScreenVerificationCode.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { Button, Modal, Text } from "@shared/@common/ui/components";
import { useModalContext } from "@shared/@common/ui/components/Modal/hooks";
import { joinClassNames } from "@shared/@common/utils";
import InputVerificationCode from "../InputVerificationCode/InputVerificationCode";
import { useState } from "react";

interface ScreenVerificationCodeProps {
  inputValue: {
    [key: string]: string;
  };
  setInputValue: React.Dispatch<
    React.SetStateAction<{ [key: string]: string }>
  >;
  className?: string;
}

const ScreenVerificationCode = ({
  inputValue,
  setInputValue,
  className,
}: ScreenVerificationCodeProps) => {
  const [isValid, setIsValid] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  // 언어 설정
  const { title, expl, button, back } = useLanguageContent([
    "components",
    "ScreenVerificationCode",
  ]);

  const { setCurPage } = useModalContext();

  const classNames = joinClassNames([
    styles["screen__verification__code"],
    className,
  ]);

  return (
    <div className={classNames}>
      <Modal.Body className={styles[`screen__verification__code__body`]}>
        <div className={styles[`header`]}>
          <Text type="heading2">{title}</Text>
          <Text type="expl">{expl}</Text>
        </div>
        <div className={styles["body"]}>
          <InputVerificationCode
            inputValue={inputValue}
            setInputValue={setInputValue}
            errorMessage={errorMessage}
            isValid={isValid}
            setIsValid={setIsValid}
          />
        </div>
      </Modal.Body>
      <Modal.Footer className={styles[`screen__verification__code__footer`]}>
        <Button
          onClick={() => {
            inputValue[`verificationCode`]
              ? ""
              : setCurPage && setCurPage((prev) => prev - 1);
          }}
          isValid
          variant="outline"
          width="100%"
          rounded="2xl"
        >
          {inputValue[`verificationCode`] ? button : back}
        </Button>
      </Modal.Footer>
    </div>
  );
};

export default ScreenVerificationCode;
