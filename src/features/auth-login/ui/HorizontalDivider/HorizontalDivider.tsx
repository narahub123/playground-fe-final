import styles from "./HorizontalDivider.module.css";
import { Text } from "@shared/@common/ui/components";
import { joinClassNames } from "@shared/@common/utils";

interface HorizontalDividerProps {
  children: string | number;
  className?: string;
}

const HorizontalDivider = ({ children, className }: HorizontalDividerProps) => {
  const classNames = joinClassNames([styles["horizontal__divider"], className]);

  return (
    <div className={classNames}>
      <span className={styles[`line`]} />
      <Text>{children}</Text>
      <span className={styles[`line`]} />
    </div>
  );
};

export default HorizontalDivider;
