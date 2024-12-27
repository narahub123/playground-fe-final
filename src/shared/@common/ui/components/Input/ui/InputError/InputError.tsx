import styles from "./InputError.module.css";

interface InputErrorProps {}

const InputError = ({}: InputErrorProps) => {
  return <div className={styles["input__error"]}>InputError</div>;
};

export default InputError;
