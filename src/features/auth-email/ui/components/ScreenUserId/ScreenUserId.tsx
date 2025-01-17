import styles from "./ScreenUserId.module.css";
import { useSelector } from "react-redux";
import { getUserInSignup } from "@shared/auth/models/selectors";
import {
  useLanguageContent,
  useValidationChecker,
} from "@shared/@common/models/hooks";
import { Button, Modal, Text } from "@shared/@common/ui/components";
import {
  useModalContext,
  useModalPagination,
} from "@shared/@common/ui/components/Modal/hooks";
import { joinClassNames } from "@shared/@common/utils";
import InputUserId from "@shared/@common/ui/components/InputUserId/InputUserId";

interface ScreenUserIdProps {
  className?: string;
  disabled?: boolean; // 사용할 지 안할지 아직 모름
}

const ScreenUserId = ({ className }: ScreenUserIdProps) => {
  // 데이터 저장 slice
  const user = useSelector(getUserInSignup);

  // 버튼 이동 설정
  const { moveNext } = useModalPagination();

  // 언어 설정
  const { title, expl, button } = useLanguageContent([
    "components",
    "ScreenUserId",
  ]);

  // 유효성 확인
  // 해당 스크린의 유효성 업데이트
  const { setScreenValidations } = useModalContext();

  // 스크린 내 컴포넌트들의 유효성 확인
  const { isValid, setIsValid, validationResult } = useValidationChecker({
    fields: ["userId"],
    sliceState: user,
    setScreenValidations,
    screenName: "ScreenUserId",
  });

  /**
   * `joinClassNames` 함수는 `styles["ScreenUserId]"`와 `className`을 결합하여
   * 최종적인 클래스 이름을 반환합니다. 이를 통해 여러 CSS 클래스를 결합하고,
   * 최종적으로 하나의 `className` 값으로 전달됩니다.
   *
   * @param {string[]} classNames - 결합할 클래스 이름들의 배열.
   * @returns {string} - 결합된 클래스 이름.
   */
  const classNames = joinClassNames([styles["screen__userId"], className]);

  return (
    <div className={classNames}>
      <Modal.Body className={styles["screen__userId__body"]}>
        <div className={styles[`screen__userId__body__header`]}>
          <Text type="heading2">{title}</Text>
          <Text type="expl">{expl}</Text>
        </div>
        <InputUserId isValid={isValid} setIsValid={setIsValid} isSignup />
      </Modal.Body>
      <Modal.Footer>
        <Button
          onClick={moveNext}
          isValid={validationResult}
          width="100%"
          bgColor="colorTheme"
          rounded="2xl"
        >
          {button}
        </Button>
      </Modal.Footer>
    </div>
  );
};

export default ScreenUserId;
