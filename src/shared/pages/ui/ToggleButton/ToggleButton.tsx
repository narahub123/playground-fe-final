import styles from "./ToggleButton.module.css";
import { joinClassNames } from "@shared/@common/utils";

interface ToggleButtonProps {
  className?: string;
  disabled?: boolean;
  isChecked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ToggleButton = ({
  className,
  disabled = false,
  isChecked,
  onChange,
}: ToggleButtonProps) => {
  const classNames = joinClassNames([styles["toggle__button"], className]);

  return (
    <div className={classNames}>
      <label htmlFor="toggle">
        <div
          className={joinClassNames([
            styles["rail"],
            isChecked ? styles["rail--checked"] : styles["rail--unchecked"],
          ])}
        />
        <div
          className={joinClassNames([
            styles["circle"],
            isChecked ? styles["circle--checked"] : styles["circle--unchecked"],
          ])}
        />
      </label>
      <input
        type="checkbox"
        name="toggle"
        id="toggle"
        role="switch"
        className={styles["checkbox"]}
        onChange={onChange}
        disabled={disabled}
        checked={isChecked}
      />
    </div>
  );
};

export default ToggleButton;
