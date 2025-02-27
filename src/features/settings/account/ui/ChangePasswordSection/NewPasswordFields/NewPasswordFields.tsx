import styles from "./NewPasswordFields.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { joinClassNames } from "@shared/@common/utils";

interface NewPasswordFieldsProps {
  className?: string;
  disabled?: boolean;
}

const NewPasswordFields = ({
  className,
  disabled = false,
}: NewPasswordFieldsProps) => {
  // 언어 설정
  //   const {} = useLanguageContent(["settings", "NewPasswordFields"]);

  const classNames = joinClassNames([
    styles["new__password__fields"],
    className,
  ]);

  return <div className={classNames}>NewPasswordFields</div>;
};

export default NewPasswordFields;
