import styles from "./SchdulePostForm.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { joinClassNames } from "@shared/@common/utils";

interface SchdulePostFormProps {
  className?: string;
  disabled?: boolean;
}

const SchdulePostForm = ({
  className,
  disabled = false,
}: SchdulePostFormProps) => {
  // 언어 설정
  //   const {} = useLanguageContent(["", "SchdulePostForm"]);

  const classNames = joinClassNames([styles["scheduleform"], className]);

  return <div className={classNames}>SchdulePostForm</div>;
};

export default SchdulePostForm;
