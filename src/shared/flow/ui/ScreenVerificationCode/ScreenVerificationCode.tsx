import styles from "./ScreenVerificationCode.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { Button, Modal, Text } from "@shared/@common/ui/components";
import { useModalContext } from "@shared/@common/ui/components/Modal/hooks";
import { joinClassNames } from "@shared/@common/utils";

interface ScreenVerificationCodeProps {
  inputValue: {
    [key: string]: string;
  };
  className?: string;
}

const ScreenVerificationCode = ({
  inputValue,
  className,
}: ScreenVerificationCodeProps) => {
  // 언어 설정
  const { title, expl, button } = useLanguageContent([
    "components",
    "ScreenVerificationCode",
  ]);

  const { setCurPage } = useModalContext();

  const classNames = joinClassNames([
    styles["screen__verification__code"],
    className,
  ]);

  return (
    <div className={classNames}>
      <Modal.Body className={styles[`screen__verification__code__body`]}>
        <div className={styles[`header`]}>
          <Text type="heading2">{title}</Text>
          <Text type="expl">{expl}</Text>
        </div>
        <div className={styles["body"]}>input 코드</div>
      </Modal.Body>
      <Modal.Footer className={styles[`screen__verification__code__footer`]}>
        <Button
          onClick={() => {
            setCurPage && setCurPage((prev) => prev - 1);
          }}
          isValid
          variant="outline"
          width="100%"
          rounded="2xl"
        >
          {button}
        </Button>
      </Modal.Footer>
    </div>
  );
};

export default ScreenVerificationCode;
