import { joinClassNames } from "@shared/@common/utils";
import { useInputContext } from "../../context";
import styles from "./InputDropdown.module.css";

const InputDropdown = () => {
  const { list, isDropdownOpen } = useInputContext();
  if (!list) return;
  return (
    <div
      className={joinClassNames([
        styles["input__dropdown"],
        isDropdownOpen
          ? styles["input__dropdown--open"]
          : styles["input__dropdown--close"],
      ])}
    >
      <ul className={styles[`input__list`]}>
        {list?.map((item, index) => (
          <li key={index} className={styles[`input__item`]}>
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InputDropdown;
