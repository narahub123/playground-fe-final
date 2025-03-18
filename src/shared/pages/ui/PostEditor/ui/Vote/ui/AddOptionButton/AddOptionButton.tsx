import styles from "./AddOptionButton.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { Icon } from "@shared/@common/ui/icons";

interface AddOptionButtonProps {
  handleClick: () => void;
}

const AddOptionButton = ({ handleClick }: AddOptionButtonProps) => {
  // 언어 설정
  const { title } = useLanguageContent(["components", "AddOptionButton"]);

  return (
    <Icon
      iconName="plus"
      className={styles["add__option__button"]}
      onClick={handleClick}
      data-title={title}
    />
  );
};

export default AddOptionButton;
