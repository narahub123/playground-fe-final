import styles from "./ScreenLoginPassword.module.css";
import { useState } from "react";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { Button, Modal, Spinner, Text } from "@shared/@common/ui/components";
import { joinClassNames } from "@shared/@common/utils";
import {
  InputAccountLoginDisabled,
  InputPasswordLogin,
} from "@features/auth-login/ui";
import { verifyPasswordLoginAPI } from "@shared/auth/apis";
import { useToast } from "@shared/@common/ui/components/Toast/hooks";
import { LoginInputValueType } from "@features/auth-login/types";
import { useLocation } from "react-router-dom";
import { fetchWithAuth } from "@shared/pages/utils";
import { useAppDispatch } from "@app/store";
import { setAcccountGroup } from "@shared/@common/models/slices/userSlice";
import { onParallelModalClose } from "@shared/@common/models/slices/modalSlice";

interface ScreenLoginPasswordProps {
  inputValue: LoginInputValueType;
  setInputValue: React.Dispatch<React.SetStateAction<LoginInputValueType>>;
  className?: string;
}

const ScreenLoginPassword = ({
  className,
  inputValue,
  setInputValue,
}: ScreenLoginPasswordProps) => {
  const dispatch = useAppDispatch();
  const { state } = useLocation();

  // 로딩
  const [loading, setLoading] = useState(false);

  // 언어 설정
  const { title, forgetPassword, button, errors } = useLanguageContent([
    "components",
    "ScreenLoginPassword",
  ]);

  const classNames = joinClassNames([
    styles["screen__login__password"],
    className,
  ]);

  const toast = useToast();

  // 로그인
  const login = async () => {
    setLoading(true);

    const result = await verifyPasswordLoginAPI(inputValue);

    // true 시 home으로 이동
    if (result.success) {
      setLoading(false);

      window.location.href = "PRIMARY_LINK.HOME";
    } else {
      setLoading(false);

      setInputValue((prev) => ({
        ...prev,
        ["password"]: "",
      }));

      // false 시 toast 사용
      for (const error of Object.values(result.error.details)) {
        toast({
          title: `${errors.title(result.code)}`,
          description: `${errors.description(error)}`,
          type: "error",
        });
      }
    }
  };

  const addAccount = async () => {
    setLoading(true);

    const result = await fetchWithAuth("/users/account-group", {}, inputValue);

    if (result.success) {
      setLoading(false);
      const newAccount = result.data.newAccount;

      dispatch(setAcccountGroup(newAccount));
      dispatch(onParallelModalClose("login"));
    } else {
      setLoading(false);

      setInputValue((prev) => ({
        ...prev,
        ["password"]: "",
      }));

      // false 시 toast 사용
      for (const error of Object.values(result.error.details)) {
        toast({
          title: `${errors.title(result.code)}`,
          description: `${errors.description(error)}`,
          type: "error",
        });
      }
    }
  };

  return (
    <div className={classNames}>
      <Modal.Body>
        <Text type="heading2">{title}</Text>
        <div>
          <InputAccountLoginDisabled inputValue={inputValue} />

          <InputPasswordLogin
            inputValue={inputValue}
            setInputValue={setInputValue}
            isValid // 언제나 유효
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
        <Button
          onClick={state?.api === "addAccount" ? addAccount : login}
          isValid={
            inputValue[`password`] !== undefined &&
            inputValue[`password`] !== "" &&
            !loading
          }
          width="100%"
          rounded="2xl"
        >
          {loading ? <Spinner /> : button}
        </Button>
      </Modal.Footer>
    </div>
  );
};

export default ScreenLoginPassword;
