import { selectEmails } from "@shared/@common/models/selectors";
import styles from "./ScreenVerifyVerificationCode.module.css";
import { useAPIError, useLanguageContent } from "@shared/@common/models/hooks";
import {
  Button,
  Input,
  Modal,
  Spinner,
  Text,
} from "@shared/@common/ui/components";
import { joinClassNames } from "@shared/@common/utils";
import { useState } from "react";
import { useSelector } from "react-redux";
import { fetchWithAuth } from "@shared/pages/utils";
import { useAppDispatch } from "@app/store";
import { useNavigate } from "react-router-dom";
import {
  onParallelModalClose,
  setVerified,
} from "@shared/@common/models/slices/modalSlice";
import { useToast } from "@shared/@common/ui/components/Toast/hooks";
import { ErrorDescriptionCodeType } from "@shared/@common/types";

const ScreenVerifyVerificationCode = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [loading, setLoading] = useState(false);

  const emails = useSelector(selectEmails);

  // 언어 설정
  const { heading, description, input, notReceived, button } =
    useLanguageContent(["auths", "ScreenVerifyVerificationCode"]);

  const classNames = joinClassNames([
    styles["screen__verify__verification__code"],
  ]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setInputValue(value);

    if (value !== "") setIsValid(true);
    else setIsValid(false);
  };

  const toast = useToast();
  const { getErrorTitle, getErrorDescription } = useAPIError();

  const handleSubmit = async () => {
    setLoading(true);
    const result = await fetchWithAuth(
      "/verification/me/verify",
      {},
      {
        verificationCode: inputValue,
      }
    );

    try {
      if (result.success) {
        dispatch(setVerified("ownership"));
        dispatch(onParallelModalClose("ownership"));
        navigate("/settings/download_your_data");
      } else {
        setIsValid(false);
        toast({
          title: getErrorTitle(result.code),
          description: getErrorDescription(
            Object.values(result.error.details)[0] as ErrorDescriptionCodeType
          ),
          type: "error",
        });
      }
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={classNames}>
      <Modal.Body
        className={styles["screen__verify__verification__code__body"]}
      >
        <div className={styles["text__wrapper"]}>
          <Text type="heading2">{heading}</Text>
          <Text type="expl">{description(emails[0])}</Text>
        </div>
        <div className={styles["input__wrapper"]}>
          <Input
            field="verfication_code"
            label={input.label}
            handleChange={handleChange}
            inputValue={inputValue}
            isValid={isValid}
          >
            <Input.Main>
              <Input.Bottom>
                <Input.Field />
              </Input.Bottom>
            </Input.Main>
          </Input>
          <Button
            className={styles["not__received"]}
            onClick={() => {}}
            variant="plain"
            fontColor="colorTheme"
            fontSize="xs"
          >
            {notReceived}
          </Button>
        </div>
      </Modal.Body>
      <Modal.Footer className={styles["c"]}>
        <div className={styles["btn__wrapper"]}>
          <Button
            onClick={loading ? () => {} : handleSubmit}
            className={styles["btn"]}
            rounded="2xl"
            isValid={isValid}
          >
            {loading ? <Spinner /> : button}
          </Button>
        </div>
      </Modal.Footer>
    </div>
  );
};

export default ScreenVerifyVerificationCode;
