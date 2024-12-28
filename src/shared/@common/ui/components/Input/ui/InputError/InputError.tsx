import styles from "./InputError.module.css";
import { useInputContext } from "../../context";
import Text from "../../../Text/Text";

interface InputErrorProps {}

const InputError = ({}: InputErrorProps) => {
  const { errorMessage } = useInputContext();
  return (
    <div id="error-message" role="alert" aria-live="polite">
      <Text
        text={errorMessage}
        subClassName={styles["input__error"]}
        type="expl"
        status="error"
      />
    </div>
  );
};

export default InputError;
