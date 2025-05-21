import styles from "./ConfirmTitle.module.css";
import { joinClassNames } from "@shared/@common/utils";
import { Text } from "@shared/@common/ui/components";

interface ConfirmTitleProps {
  className?: string;
  text: string;
}

const ConfirmTitle = ({ className, text }: ConfirmTitleProps) => {
  const classNames = joinClassNames([styles["confirm__title"], className]);

  return (
    <div className={classNames}>
      <Text type="heading3">{text}</Text>
    </div>
  );
};

export default ConfirmTitle;
