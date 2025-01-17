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
import { getUserInSignup } from "@shared/auth/models/selectors/signupSelectors";
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
          <Text type="heading2">{title}</Text>
          <Text type="expl">{expl}</Text>
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
          onClick={moveNext}
          isValid={validationResult}
          width="100%"
          bgColor="colorTheme"
          rounded="2xl"
        >
          {button}
        </Button>
      </Modal.Footer>
    </div>
  );
};

export default ScreenPassword;
