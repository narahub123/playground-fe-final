import styles from "./ScreenChooseAuthMethod.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { Button, Modal, Spinner, Text } from "@shared/@common/ui/components";
import { useModalContext } from "@shared/@common/ui/components/Modal/hooks";
import { useToast } from "@shared/@common/ui/components/Toast/hooks";
import { Icon } from "@shared/@common/ui/icons";
import { joinClassNames } from "@shared/@common/utils";
import {
  getContactsByAccoutAPI,
  requestVerifacationCodeLoginAPI,
} from "@shared/auth/apis";
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

  // loading
  const [loading, setLoading] = useState(false);

  const [authMethod, setAuthMethod] = useState<AuthMethodType>({});

  const [options, setOptions] = useState<{
    emails?: string[];
    phones?: string[];
  }>({});

  // 인증 받을 기기에 대한 정보 받기
  useEffect(() => {
    const fetchContactsAndsetInitialAuthMethod = async () => {
      const options = await getContactsByAccoutAPI(inputValue);

      setOptions(options);
      setIsValid(true);

      // authMethod 초기값 설정
      const { email, phone, userId } = inputValue;

      if (email) {
        setAuthMethod({ email });
      } else if (phone) {
        setAuthMethod({ phone });
      } else if (userId) {
        const { emails, phones } = options;

        // 이메일과 전화번호 목록이 있을 때 우선 이메일을 설정하고, 없으면 전화번호 설정
        const authContact =
          emails.length > 0 ? { email: emails[0] } : { phone: phones[0] };
        setAuthMethod(authContact);
      }
    };

    fetchContactsAndsetInitialAuthMethod();
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

  const toast = useToast();

  // 인증 코드 보내기
  const sendAuthCode = async (authMethod: AuthMethodType) => {
    setLoading(true);
    // 인증 코드 요청하는 api
    const response = await requestVerifacationCodeLoginAPI(authMethod);

    console.log(response);

    setLoading(false);
    if (response.success) {
      toast({ description: response.message });
      setCurPage && setCurPage((prev) => prev + 1);
    }
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
                  {item && <Text>{msg(item, type)}</Text>}
                  {item ? (
                    item ===
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
                            [type.slice(0, -1) as keyof typeof authMethod]:
                              item,
                          })
                        }
                      />
                    )
                  ) : null}
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
          }}
          isValid={(isValid as boolean) && !loading}
          bgColor="gray"
          width="100%"
          rounded="2xl"
        >
          {loading ? <Spinner /> : button}
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
