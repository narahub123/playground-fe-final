import styles from "./ScreenLoginPassword.module.css";
import { useState } from "react";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { Button, Modal, Text } from "@shared/@common/ui/components";
import { joinClassNames } from "@shared/@common/utils";
import { InputAccountLogin, InputPasswordLogin } from "@features/auth-login/ui";
import { verifyPasswordLoginAPI } from "@shared/auth/apis";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
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

  // 로그인
  const login = async () => {
    const verification = await verifyPasswordLoginAPI(inputValue);

    // true 시 home으로 이동
    if (verification) {
      console.log("안녕");

      navigate("/home");
    } else {
      // false 시 toast 사용
    }

    console.log(verification);
  };

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
        <Button onClick={login} isValid width="100%" rounded="2xl">
          {button}
        </Button>
      </Modal.Footer>
    </div>
  );
};

export default ScreenLoginPassword;
