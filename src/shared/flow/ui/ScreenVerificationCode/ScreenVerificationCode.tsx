import styles from "./ScreenVerificationCode.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { Button, Modal, Text } from "@shared/@common/ui/components";
import { useModalContext } from "@shared/@common/ui/components/Modal/hooks";
import { joinClassNames } from "@shared/@common/utils";
import InputVerificationCode from "../InputVerificationCode/InputVerificationCode";
import { useState } from "react";
import { checkVerificationCodeAPI } from "@shared/auth/apis";
import { useToast } from "@shared/@common/ui/components/Toast/hooks";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

  const [isValid, setIsValid] = useState(true);

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

  const toast = useToast();

  const checkVerificationCode = async () => {
    await checkVerificationCodeAPI(inputValue)
      .then((res) => {
        if (res.success) {
          toast({ description: res.message, type: "success" });
          navigate("/home");
        } else {
          toast({ description: res.message, type: "error" });
          setIsValid(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
            isValid={isValid}
            setIsValid={setIsValid}
          />
        </div>
      </Modal.Body>
      <Modal.Footer className={styles[`screen__verification__code__footer`]}>
        <Button
          onClick={() => {
            inputValue[`verificationCode`]
              ? checkVerificationCode()
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
