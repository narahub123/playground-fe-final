import { generateSocialAuthUrl } from "@features/auth-social/utils";
import styles from "./ScreenSelectLogin.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { Button, Modal, Text } from "@shared/@common/ui/components";
import { joinClassNames } from "@shared/@common/utils";
import { AuthButtonItemType, OauthType } from "@shared/auth/types";
import { AuthButton } from "@shared/auth/ui/components";
import { useState } from "react";
import { InputAccount } from "@shared/flow/ui";
import { useModalContext } from "@shared/@common/ui/components/Modal/hooks";
import { HorizontalDivider } from "@features/auth-login/ui";

interface ScreenSelectLoginProps {
  className?: string;
}

const ScreenSelectLogin = ({ className }: ScreenSelectLoginProps) => {
  const [isValid, setIsValid] = useState<
    | {
        [key: string]: boolean;
      }
    | boolean
  >(false);

  const { setCurPage } = useModalContext();

  const handleOauth = (type: OauthType) => {
    const url = generateSocialAuthUrl(type);

    if (url) {
      window.open(url, "_blank", "width=800,height=600,top=100,left=100");
    }
  };

  // 언어 설정
  const {
    title,
    loginList,
    divider,
    forgetPassword,
    signup,
    signupButton,
    button,
  } = useLanguageContent(["components", "ScreenSelectLogin"]);

  const classNames = joinClassNames([
    styles["screen__select__login"],
    className,
  ]);

  return (
    <div className={classNames}>
      <Modal.Body className={styles["screen__select__login__body"]}>
        <Text type="heading2">{title}</Text>
        <ul className={styles["screen__select__login__body__authlist"]}>
          {(loginList as AuthButtonItemType[]).map((item, idx) => (
            <AuthButton
              key={idx}
              item={item}
              handleClick={() => {
                handleOauth(item.type as OauthType);
              }}
            />
          ))}
          <HorizontalDivider>{divider}</HorizontalDivider>
          <InputAccount isValid={isValid} setIsValid={setIsValid} />
          <Button
            onClick={() => {
              console.log("하이");
            }}
            rounded="2xl"
            isValid
          >
            {forgetPassword}
          </Button>
          <div className={styles[`move__to__signup`]}>
            <Text>{signup}</Text>
            <Button
              variant="plain"
              onClick={() => {}}
              fontColor="cornflowerblue"
            >
              {signupButton}
            </Button>
          </div>
        </ul>
      </Modal.Body>
      <Modal.Footer>
        <Button
          onClick={() => {
            setCurPage && setCurPage((prev) => prev + 1);
          }}
          isValid={isValid as boolean}
          bgColor="colorTheme"
          width="100%"
          rounded="2xl"
        >
          {button}
        </Button>
      </Modal.Footer>
    </div>
  );
};

export default ScreenSelectLogin;
