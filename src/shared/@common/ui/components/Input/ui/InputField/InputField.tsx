import styles from "./InputField.module.css";

interface InputFieldProps {}

const InputField = ({}: InputFieldProps) => {
  return <div className={styles["inputfield"]}>InputField</div>;
};

export default InputField;
