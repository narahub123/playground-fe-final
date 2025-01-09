import styles from "./ScreenPassword.module.css";
import {
  Button,
  InputPassword,
  Modal,
  Text,
} from "@shared/@common/ui/components";
import {
  useLanguageContent,
  useValidationChecker,
} from "@shared/@common/models/hooks";
import { useSelector } from "react-redux";
import { getUserInSignup } from "@features/auth-setting/models/selectors/signupSelectors";
import {
  useModalContext,
  useModalPagination,
} from "@shared/@common/ui/components/Modal/hooks";

const ScreenPassword = () => {
  const user = useSelector(getUserInSignup);

  const { setScreenValidations } = useModalContext();
  const { moveNext } = useModalPagination();

  const { isValid, setIsValid, validationResult } = useValidationChecker({
    fields: ["password"],
    sliceState: user,
    setScreenValidations,
    screenName: "ScreenPassword",
  });

  const { title, expl, button } = useLanguageContent([
    "components",
    "ScreenPassword",
  ]);

  return (
    <div className={styles["password__screen"]}>
      <Modal.Body className={styles[`password__screen__body`]}>
        <div className={styles[`password__screen__body__header`]}>
          <Text text={title} type="heading2" />
          <Text text={expl} type="expl" />
        </div>
        <div className={styles[`password__screen__body__content`]}>
          <InputPassword
            isValid={isValid}
            setIsValid={setIsValid}
            field="password"
            label="password"
            isSignup
          />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button
          colorPalette="colorTheme"
          onClick={moveNext}
          isValid={validationResult}
        >
          {button}
        </Button>
      </Modal.Footer>
    </div>
  );
};

export default ScreenPassword;
