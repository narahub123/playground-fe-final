import styles from "./ScreenAccount.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { Button, Modal, Text } from "@shared/@common/ui/components";
import { useModalContext } from "@shared/@common/ui/components/Modal/hooks";
import { joinClassNames } from "@shared/@common/utils";
import InputAccount from "../InputAccount/InputAccount";
import { useState } from "react";

interface ScreenAccountProps {
  className?: string;
}

const ScreenAccount = ({ className }: ScreenAccountProps) => {
  const [isValid, setIsValid] = useState<
    | {
        [key: string]: boolean;
      }
    | boolean
  >(false);

  console.log(isValid);

  const { setCurPage } = useModalContext();

  // 언어 설정
  const { title, expl, button } = useLanguageContent([
    "components",
    "ScreenAccount",
  ]);

  const classNames = joinClassNames([styles["screen__account"], className]);

  return (
    <div className={classNames}>
      <Modal.Body className={styles[`screen__account__body`]}>
        <Text type="heading2">{title}</Text>
        <Text type="expl">{expl}</Text>
        <InputAccount isValid={isValid} setIsValid={setIsValid} />
      </Modal.Body>
      <Modal.Footer className={styles[`screen__account__footer`]}>
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

export default ScreenAccount;
