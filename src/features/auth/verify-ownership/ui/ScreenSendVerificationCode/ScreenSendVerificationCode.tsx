import { logo } from "@shared/@common/assets";
import styles from "./ScreenSendVerificationCode.module.css";
import { useAPIError, useLanguageContent } from "@shared/@common/models/hooks";
import { Button, Modal, Text } from "@shared/@common/ui/components";
import { joinClassNames } from "@shared/@common/utils";
import { useSelector } from "react-redux";
import { selectEmails } from "@shared/@common/models/selectors";
import { fetchWithAuth } from "@shared/pages/utils";
import { useToast } from "@shared/@common/ui/components/Toast/hooks";
import { useState } from "react";
import { ErrorDescriptionCodeType } from "@shared/@common/types";

interface ScreenSendVerificationCodeProps {
  className?: string;
  setCurPage: React.Dispatch<React.SetStateAction<number>>;
}

const ScreenSendVerificationCode = ({
  className,
  setCurPage,
}: ScreenSendVerificationCodeProps) => {
  const [loading, setLoading] = useState(false);
  const emails = useSelector(selectEmails);
  // 언어 설정
  const { logoAlt, heading, description, btn } = useLanguageContent([
    "auths",
    "ScreenSendVerificationCode",
  ]);

  const classNames = joinClassNames([
    styles["screen__send__verification__code"],
    className,
  ]);

  const toast = useToast();

  const { getErrorDescription, getErrorTitle } = useAPIError();

  const handleSubmit = async () => {
    setLoading(true);
    const result = await fetchWithAuth(
      "/verification/me/request",
      {},
      {
        email: emails[0],
      }
    );

    try {
      if (result.success) {
        setCurPage((prev) => prev + 1);
      } else {
        toast({
          title: getErrorTitle(result.code),
          description: getErrorDescription(
            Object.values(result.error.details)[0] as ErrorDescriptionCodeType
          ),
        });
      }
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal.Body className={classNames}>
      <div className={styles["screen__header"]}>
        <div className={styles["screen__logo__wrapper"]}>
          <img
            src={logo}
            alt={logoAlt}
            className={styles["screen__header__logo"]}
          />
        </div>
      </div>
      <div className={styles["screen__body"]}>
        <div className={styles["screen__text__wrapper"]}>
          <Text className={styles["heading"]} type="heading2">
            {heading}
          </Text>
          <Text className={styles["description"]}>
            {description(emails[0])}
          </Text>
        </div>
        <div className={styles["screen__btn__wrapper"]}>
          <Button
            variant="plain"
            onClick={loading ? () => {} : handleSubmit}
            className={styles["screen__btn"]}
          >
            {btn}
          </Button>
        </div>
      </div>
    </Modal.Body>
  );
};

export default ScreenSendVerificationCode;
