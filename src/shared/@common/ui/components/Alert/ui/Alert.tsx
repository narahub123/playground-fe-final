import styles from "./Alert.module.css";
import { useAlertContext } from "../hooks";
import { joinClassNames } from "@shared/@common/utils";
import Portal from "../../Portal/Portal";
import Text from "../../Text/Text";
import { Icon } from "@shared/@common/ui/icons";
import { useState } from "react";

interface AlertProps {
  className?: string;
}

const Alert = ({ className }: AlertProps) => {
  const [isOpen, setIsOpen] = useState(true);
  const { alert, removeAlert } = useAlertContext();
  const { title, description } = alert;
  const classNames = joinClassNames([
    styles["alert"],
    isOpen ? styles[`alert__open`] : styles[`alert__close`],
    className,
  ]);

  if (!alert.description) return null;

  return (
    <Portal id="alert">
      <div className={classNames}>
        <div
          className={joinClassNames([styles[`alert__wrapper`]])}
          style={{ width: "70%", marginTop: "20px" }}
        >
          <span className={joinClassNames([styles[`alert__icon`]])}>
            아이콘
          </span>
          <span className={joinClassNames([styles[`alert__main`]])}>
            {title && (
              <Text className={joinClassNames([styles[`alert__title`]])}>
                {title}
              </Text>
            )}
            <Text className={joinClassNames([styles[`alert__description`]])}>
              {description}
            </Text>
          </span>
          <Icon
            iconName="close"
            className={joinClassNames([styles[`alert__button`]])}
            onClick={() => {
              setIsOpen(false);
              setTimeout(() => {
                removeAlert();
                setIsOpen(true);
              }, 200);
            }}
          />
        </div>
      </div>
    </Portal>
  );
};

export default Alert;
