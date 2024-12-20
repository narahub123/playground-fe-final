import styles from "./Input.module.css";
import Icon from "../Icon/Icon";

const Input = () => {
  return (
    <div className={styles[`input`]}>
      <div className={styles[`input__wrapper`]}>
        <div className={styles[`input__header`]}>
          <span className={styles[`input__label`]}>필드 이름</span>
          <span className={styles[`input__counter`]}>글자수</span>
        </div>
        <div className={styles[`input__body`]}>
          <input type="text" className={styles[`input__field`]} />
          <Icon iconName="eye" subClassName={styles[`input__icon--right`]} />
        </div>
      </div>
      <div className={styles[`input__error`]}>error</div>
    </div>
  );
};

export default Input;
