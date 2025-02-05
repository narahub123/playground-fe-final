import styles from "./ScreenLoginPassword.module.css";
import { useState } from "react";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { Button, Modal, Text } from "@shared/@common/ui/components";
import { joinClassNames } from "@shared/@common/utils";
import { InputAccountLogin, InputPasswordLogin } from "@features/auth-login/ui";

interface ScreenLoginPasswordProps {
  inputValue: { [key: string]: string };
  setInputValue: React.Dispatch<
    React.SetStateAction<{ [key: string]: string }>
  >;
  className?: string;
}

const ScreenLoginPassword = ({
  className,
  inputValue,
  setInputValue,
}: ScreenLoginPasswordProps) => {
  const [isValid, setIsValid] = useState<
    | {
        [key: string]: boolean;
      }
    | boolean
  >(false);

  // 언어 설정
  const { title, forgetPassword, button } = useLanguageContent([
    "components",
    "ScreenLoginPassword",
  ]);

  const classNames = joinClassNames([
    styles["screen__login__password"],
    className,
  ]);

  return (
    <div className={classNames}>
      <Modal.Body>
        <Text type="heading2">{title}</Text>
        <div>
          <InputAccountLogin
            isValid={isValid}
            setIsValid={setIsValid}
            inputValue={inputValue}
            setInputValue={setInputValue}
            disabled
          />

          <InputPasswordLogin
            inputValue={inputValue}
            setInputValue={setInputValue}
            isValid={isValid}
            setIsValid={setIsValid}
          />

          <Button
            variant="plain"
            fontColor="cornflowerblue"
            onClick={() => {
              console.log("비밀번호 찾기");
            }}
            fontSize="sm"
          >
            {forgetPassword}
          </Button>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={() => {}} isValid width="100%" rounded="2xl">
          {button}
        </Button>
      </Modal.Footer>
    </div>
  );
};

export default ScreenLoginPassword;
