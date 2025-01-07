import styles from "./PasswordScreen.module.css";
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
import { useModalContext } from "@shared/@common/ui/components/Modal/hooks";

const PasswordScreen = () => {
  const user = useSelector(getUserInSignup);

  const { isValid, setIsValid, validationResult } = useValidationChecker({
    fields: ["password", "password_check", "password_confirm"],
    sliceState: user,
  });

  const { setCurPage, curPage, lengthOfList } = useModalContext();

  const { title, expl, button } = useLanguageContent([
    "components",
    "PasswordScreen",
  ]);

  console.log(isValid);

  const handleClick = () => {
    if (!setCurPage || !curPage || !lengthOfList) return;

    if (curPage + 1 > lengthOfList) return;
    setCurPage((prev) => prev + 1);
  };

  return (
    <div className={styles["password__screen"]}>
      <Modal.Body className={styles[`password__screen__body`]}>
        <Text text={title} type="heading2" />
        <Text text={expl} type="expl" />
        <InputPassword
          isValid={isValid}
          setIsValid={setIsValid}
          field="password"
          label="password"
          usedIn="signup"
        />
        <InputPassword
          isValid={isValid}
          setIsValid={setIsValid}
          field="password_confirm"
          label="confirm"
          usedIn="signup"
        />
        <InputPassword
          isValid={isValid}
          setIsValid={setIsValid}
          field="password_check"
          label="current"
        />
      </Modal.Body>
      <Modal.Footer>
        <Button
          colorPalette="colorTheme"
          onClick={handleClick}
          isValid={validationResult}
        >
          {button}
        </Button>
      </Modal.Footer>
    </div>
  );
};

export default PasswordScreen;
