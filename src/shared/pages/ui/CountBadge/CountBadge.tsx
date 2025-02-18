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

  return (
    <span className={classNames} aria-hidden="true" tabIndex={-1}>
      {count}
    </span>
  );
};

export default CountBadge;
