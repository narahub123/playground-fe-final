import { useLanguageContent } from "@shared/@common/models/hooks";
import styles from "./CountBadge.module.css";
import common from "@shared/@common/styles/common.module.css";
import { ColorBasic } from "@shared/@common/types";
import { joinClassNames } from "@shared/@common/utils";

interface CountBadgeProps {
  count: number;
  bgColor?: ColorBasic;
  color?: ColorBasic;
  className?: string;
  disabled?: boolean;
}

const CountBadge = ({
  count,
  bgColor = "colorTheme",
  color = "white",
  className,
  disabled = false,
}: CountBadgeProps) => {
  const classNames = joinClassNames([
    styles["count__badge"],
    color && common[`color--${color}`],
    disabled
      ? styles[`count__badge--disabled`]
      : bgColor && common[`background--color--${bgColor}`],
    className,
  ]);

  const { ariaLabel } = useLanguageContent(["components", "CountBadge"]);

  return (
    <span
      className={classNames}
      tabIndex={-1}
      aria-label={ariaLabel(count)}
      role="status"
      aria-live="polite"
    >
      {count}
    </span>
  );
};

export default CountBadge;
