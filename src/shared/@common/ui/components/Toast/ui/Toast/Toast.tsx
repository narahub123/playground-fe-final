import styles from "./Toast.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { joinClassNames } from "@shared/@common/utils";
import { ToastOptions } from "../../types.ts";
import { Icon } from "@shared/@common/ui/icons";
import { Text, Button, Spinner } from "@shared/@common/ui/components";

interface ToastProps {
  props: ToastOptions;
}

const Toast = ({ props }: ToastProps) => {
  const {
    title,
    description,
    type = "info",
    action,
    duration,
    max,
    placement,
    overlap,
    offset,
  } = props;
  // 언어 설정
  const {} = useLanguageContent(["components", "Toast"]);

  const classNames = joinClassNames([
    styles["toast"],
    styles[`toast--${type}`],
  ]);

  // 아이콘 이름
  const iconName = type === "success" ? "success" : "warning";

  return (
    <div className={classNames}>
      <div className={styles[`toast__icon__container`]}>
        {/* type이 success, error, warning 경우에 아이콘 표시 */}
        {(type === "success" || type === "error" || type === "warning") && (
          <Icon iconName={iconName} className={styles[`toast__icon`]} />
        )}
        {/* type이 loading인 경우 spinner 표시 */}
        {type === "loading" && <Spinner />}
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
            className={joinClassNames([
              styles[`toast__button`],
              type === "warning" ? styles[`toast__button--warning`] : "",
            ])}
            isValid={true}
            bgColor={
              type === "success"
                ? "green"
                : type === "error"
                ? "red"
                : type === "info" || type === "loading"
                ? "white"
                : undefined
            }
          >
            {action.label}
          </Button>
        </div>
      )}
    </div>
  );
};

export default Toast;
