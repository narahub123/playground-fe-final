import styles from "./Toast.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { joinClassNames } from "@shared/@common/utils";
import { ToastOptions } from "../../types.ts";
import { Icon } from "@shared/@common/ui/icons";
import { Text, Button } from "@shared/@common/ui/components";

interface ToastProps {
  props: ToastOptions;
}

const Toast = ({ props }: ToastProps) => {
  const {
    title,
    description,
    type,
    action,
    duration,
    max,
    placement,
    overlap,
    offset,
  } = props;
  // 언어 설정
  const {} = useLanguageContent(["components", "Toast"]);

  const classNames = joinClassNames([styles["toast"]]);

  return (
    <div className={classNames}>
      <div className={styles[`toast__icon__container`]}>
        <Icon iconName="close" className={styles[`toast__icon`]} />
      </div>
      <div className={styles[`toast__text__container`]}>
        {title && (
          <Text className={styles[`toast__title`]} status="bold">
            {title}
          </Text>
        )}
        <Text className={styles[`toast__description`]}>{description}</Text>
      </div>
      {action && (
        <div className={styles[`toast__button__container`]}>
          <Button
            onClick={action.onClick}
            variant="outline"
            className={styles[`toast__button`]}
          >
            {action.label}
          </Button>
        </div>
      )}
    </div>
  );
};

export default Toast;
