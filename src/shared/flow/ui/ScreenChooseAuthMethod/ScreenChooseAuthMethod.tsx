import styles from "./ScreenChooseAuthMethod.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { Button, Modal, Text } from "@shared/@common/ui/components";
import { useModalContext } from "@shared/@common/ui/components/Modal/hooks";
import { Icon } from "@shared/@common/ui/icons";
import { joinClassNames } from "@shared/@common/utils";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface ScreenChooseAuthMethodProps {
  inputValue: {
    [key: string]: string;
  };
  className?: string;
}

type AuthMethodType = {
  email?: string;
  phone?: string;
};

const ScreenChooseAuthMethod = ({
  inputValue, // 이메일과 휴대폰 번호, 사용자 아이디로 정보 가져오기
  className,
}: ScreenChooseAuthMethodProps) => {
  const navigate = useNavigate();
  const [isValid, setIsValid] = useState<
    | {
        [key: string]: boolean;
      }
    | boolean
  >(false);

  const [authMethod, setAuthMethod] = useState<AuthMethodType>({});

  const [options, setOptions] = useState<{
    emails?: string[];
    phones?: string[];
  }>({});

  // 인증 받을 기기에 대한 정보 받기
  useEffect(() => {
    const options = {
      emails: ["b@b.com", "a@a.com"],
      phones: ["+82-010-1234-5678", "+82-010-1234-5679"],
    };
    setOptions(options);
    setIsValid(true);
  }, []);

  const { setCurPage } = useModalContext();

  // 언어 설정
  const { title, expl, expl1, button, cancel, msg } = useLanguageContent([
    "components",
    "ScreenChooseAuthMethod",
  ]);

  const classNames = joinClassNames([
    styles["screen__choose__auth__method"],
    className,
  ]);

  // 인증 코드 보내기
  const sendAuthCode = (authMethod: AuthMethodType) => {
    // 인증 코드 요청하는 api
  };

  return (
    <div className={classNames}>
      <Modal.Body className={styles[`screen__choose__auth__method__body`]}>
        <div className={styles[`header`]}>
          <Text type="heading2">{title}</Text>
          <Text type="expl">{expl}</Text>
        </div>
        <div className={styles[`body`]}>
          <Text type="expl">{expl1}</Text>
          {/* 인증 코드를 받을 기기 보여주기 */}
          <ul>
            {(["emails", "phones"] as const).map((type) =>
              options[type]?.map((item) => (
                <li key={item} className={styles.option}>
                  <Text>{msg(item, type)}</Text>
                  {item ===
                  authMethod[type.slice(0, -1) as keyof typeof authMethod] ? (
                    <Icon
                      iconName="roundCheckboxFill"
                      iconColor="colorTheme"
                      iconSize="xl"
                    />
                  ) : (
                    <Icon
                      iconName="roundCheckboxBlank"
                      iconSize="xl"
                      onClick={() =>
                        setAuthMethod({
                          [type.slice(0, -1) as keyof typeof authMethod]: item,
                        })
                      }
                    />
                  )}
                </li>
              ))
            )}
          </ul>
        </div>
      </Modal.Body>
      <Modal.Footer className={styles[`screen__choose__auth__method__footer`]}>
        <Button
          onClick={() => {
            sendAuthCode(authMethod);
            setCurPage && setCurPage((prev) => prev + 1);
          }}
          isValid={isValid as boolean}
          bgColor="gray"
          width="100%"
          rounded="2xl"
        >
          {button}
        </Button>
        <Button
          onClick={() => {
            navigate("/");
          }}
          isValid
          variant="outline"
          width="100%"
          rounded="2xl"
        >
          {cancel}
        </Button>
      </Modal.Footer>
    </div>
  );
};

export default ScreenChooseAuthMethod;
