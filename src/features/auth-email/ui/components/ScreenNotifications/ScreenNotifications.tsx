import { getUserInSignup } from "@features/auth-setting/models/selectors";
import styles from "./ScreenNotifications.module.css";
import {
  useLanguageContent,
  useValidationChecker,
} from "@shared/@common/models/hooks";
import { Button, Modal, Text } from "@shared/@common/ui/components";
import { joinClassNames } from "@shared/@common/utils";
import { useSelector } from "react-redux";
import { useModalContext } from "@shared/@common/ui/components/Modal/hooks";

interface ScreenNotificationsProps {
  className?: string;
}

const ScreenNotifications = ({ className }: ScreenNotificationsProps) => {
  const user = useSelector(getUserInSignup);

  const { setScreenValidations } = useModalContext();

  // 언어 설정
  const { title, expl, button } = useLanguageContent([
    "components",
    "ScreenNotifications",
  ]);

  const classNames = joinClassNames([
    styles["screen__notifications"],
    className,
  ]);

  const {} = useValidationChecker({
    fields: ["notifications"],
    sliceState: user,
    setScreenValidations,
    screenName: "ScreenNotifications",
  });

  return (
    <div className={classNames}>
      <Modal.Body className={styles[`screen__notifications__body`]}>
        <div className={styles[`screen__notifications__body__header`]}>
          <Text text={title} type="heading2" />
          <Text text={expl} type="expl" />
        </div>
        <div className={styles[`screen__notifications__body__main`]}></div>
      </Modal.Body>
      <Modal.Footer>
        <Button
          onClick={() => {}}
          variant="outline"
          isValid
          colorPalette="default"
        >
          {button.skip}
        </Button>
      </Modal.Footer>
    </div>
  );
};

export default ScreenNotifications;
