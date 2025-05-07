import { useAppDispatch } from "@app/store";
import styles from "./QuoteButton.module.css";
import { joinClassNames } from "@shared/@common/utils";
import { useSelector } from "react-redux";
import { selectPostEditor } from "../../models/selectors";
import { useToast } from "@shared/@common/ui/components/Toast/hooks";
import { useAPIError } from "@shared/@common/models/hooks";

interface QuoteButtonProps {
  className?: string;
  isValid: boolean;
  text: string;
}

const QuoteButton = ({ className, text, isValid }: QuoteButtonProps) => {
  const dispatch = useAppDispatch();
  const post = useSelector(selectPostEditor);

  const toast = useToast();
  const { getErrorTitle } = useAPIError();

  const classNames = joinClassNames([styles["quote__button"], className]);

  const handleClick = async () => {
    console.log("눌림");
  };

  return (
    <button
      type="button"
      className={joinClassNames([
        classNames,
        isValid
          ? styles["quote__button--valid"]
          : styles["quote__button--invalid"],
      ])}
      onClick={isValid ? handleClick : undefined}
    >
      {text}
    </button>
  );
};

export default QuoteButton;
