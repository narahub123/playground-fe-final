import styles from "./ConfirmDescription.module.css";
import { joinClassNames } from "@shared/@common/utils";
import { Text } from "@shared/@common/ui/components";

interface ConfirmDescriptionProps {
  className?: string;
  text: string;
}

const ConfirmDescription = ({ className, text }: ConfirmDescriptionProps) => {
  const classNames = joinClassNames([
    styles["confirm__description"],
    className,
  ]);

  return (
    <div className={classNames}>
      <Text type="expl">{text}</Text>
    </div>
  );
};

export default ConfirmDescription;
