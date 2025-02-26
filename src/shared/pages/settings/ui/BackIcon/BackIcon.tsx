import styles from "./BackIcon.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { Icon } from "@shared/@common/ui/icons";
import { useNavigate } from "react-router-dom";

const BackIcon = () => {
  const navigate = useNavigate();
  // 언어 설정
  const { title } = useLanguageContent(["settings", "BackIcon"]);

  const goBack = () => {
    navigate(-1);
  };

  return (
    <Icon
      className={styles["back__icon"]}
      iconName="arrowLeft"
      onClick={goBack}
      data-title={title}
      style={{ marginRight: "0.5rem" }}
    />
  );
};

export default BackIcon;
