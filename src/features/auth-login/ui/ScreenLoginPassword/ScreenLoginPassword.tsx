import styles from "./ScreenLoginPassword.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import {
  Button,
  InputEmail,
  InputPhone,
  Modal,
  Text,
} from "@shared/@common/ui/components";

import { joinClassNames } from "@shared/@common/utils";

interface ScreenLoginPasswordProps {
  className?: string;
}

const ScreenLoginPassword = ({ className }: ScreenLoginPasswordProps) => {
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
          {/* 입력된 정보에 따라 다른 input이 보여야 함 */}

          <InputPhone disabled />
          <InputEmail disabled />

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
