import styles from "./BirthConfirm.module.css";
import { useAppDispatch } from "@app/store";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { getStandAloneModal } from "@shared/@common/models/selectors";
import { onStandAlonClose } from "@shared/@common/models/slices/modalSlice";
import { Confirm } from "@shared/@common/ui/components";
import { useSelector } from "react-redux";

interface BirthConfirmProps {
  setCanModify: React.Dispatch<React.SetStateAction<boolean>>;
}

const BirthConfirm = ({ setCanModify }: BirthConfirmProps) => {
  const dispatch = useAppDispatch();
  // 언어 설정
  const {} = useLanguageContent(["profilepage", "BirthConfirm"]);

  const isOpen = useSelector(getStandAloneModal("confirm"));
  const onClose = () => {
    dispatch(onStandAlonClose("confirm"));
  };

  const handleChangeBirth = () => {
    dispatch(onStandAlonClose("confirm"));
    setCanModify((prev) => {
      if (prev === false) {
        return true;
      } else return prev;
    });
  };

  return (
    <Confirm isOpen={isOpen} onClose={onClose}>
      <Confirm.Container>
        <Confirm.Title text="생년월일을 수정할까요?" />
        <Confirm.Description text="이 항목은 변경할 수 있는 횟수가 제한되어 있습니다. 해당 계정을 사용하는 사람의 연령을 입력했는지 확인해 주세요." />
        <div className={styles["btns__wrapper"]}>
          <Confirm.Button onClick={handleChangeBirth} className={styles["btn"]}>
            수정
          </Confirm.Button>
          <Confirm.Button
            onClick={onClose}
            className={styles["btn"]}
            variant="outline"
          >
            취소
          </Confirm.Button>
        </div>
      </Confirm.Container>
    </Confirm>
  );
};

export default BirthConfirm;
