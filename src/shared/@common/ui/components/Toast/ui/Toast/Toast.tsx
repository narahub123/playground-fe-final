import styles from "./Toast.module.css";
import { useEffect } from "react";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { joinClassNames } from "@shared/@common/utils";
import { ToastOptions } from "@shared/@common/ui/components/Toast/types";
import { Icon } from "@shared/@common/ui/icons";
import { Text, Button, Spinner } from "@shared/@common/ui/components";
import { useToastContext } from "@shared/@common/ui/components/Toast/hooks";

interface ToastProps {
  props: ToastOptions;
  index: number;
  className?: string;
}

const Toast = ({ props, index, className }: ToastProps) => {
  const {
    id,
    title,
    description,
    type = "info",
    action,
    duration,
    placement,
    overlap,
    offset,
  } = props;

  const toastContext = useToastContext();

  // duration 설정
  useEffect(() => {
    if (!id) return;
    toastContext.removeToast(id, duration);
  }, []);

  // 모션 방향 지정
  const direction = placement?.includes("bottom") ? "bottom" : "top";

  // 언어 설정
  const {} = useLanguageContent(["components", "Toast"]);

  const classNames = joinClassNames([
    styles["toast"],
    styles[`toast--${type}`],
    styles[`toast--${direction}`],
    className,
  ]);

  // 아이콘 이름
  const iconName = type === "success" ? "success" : "warning";

  const top =
    !placement || placement?.includes("top") ? index * 76 + "px" : undefined;

  const bottom = placement?.includes("bottom") ? index * 76 + "px" : undefined;

  return (
    <li
      className={classNames}
      style={{
        top,
        bottom,
      }}
    >
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
    </li>
  );
};

export default Toast;
