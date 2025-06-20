import styles from "./WriteButton.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { joinClassNames } from "@shared/@common/utils";
import WriteIcon from "./WriteIcon";
import { useAppDispatch } from "@app/store";
import { useNavigate } from "react-router-dom";
import { onParallelModalOpen } from "@shared/@common/models/slices/modalSlice";
import { Text } from "@shared/@common/ui/components";
import { PRIMARY_LINK } from "@shared/@common/constants";

interface WriteButtonProps {
  className?: string;
  disabled?: boolean;
}

const WriteButton = ({ className, disabled = false }: WriteButtonProps) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  // 언어 설정
  const { writeTitle } = useLanguageContent(["components", "WriteButton"]);

  const classNames = joinClassNames([styles["write__button"], className]);

  const onOpen = () => {
    dispatch(onParallelModalOpen("write"));
    navigate(PRIMARY_LINK.COMPOSE_POST);
  };

  return (
    <button className={classNames} title={writeTitle} onClick={() => onOpen()}>
      <WriteIcon
        color="white"
        width={26}
        height={26}
        className={styles["write__button__icon"]}
      />
      <Text className={styles[`write__button__text`]}>{writeTitle}</Text>
    </button>
  );
};

export default WriteButton;
