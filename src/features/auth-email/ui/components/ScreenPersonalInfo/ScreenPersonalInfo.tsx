import styles from "./ScreenPersonalInfo.module.css";
import {
  Button,
  InputBirthDate,
  InputBirthMonth,
  InputBirthYear,
  InputEmail,
  InputGender,
  InputUsername,
  Modal,
  Text,
} from "@shared/@common/ui/components";
import { useSelector } from "react-redux";
import {
  useLanguageContent,
  useValidationChecker,
} from "@shared/@common/models/hooks";
import {
  useModalContext,
  useModalPagination,
} from "@shared/@common/ui/components/Modal/hooks";
import { getUserInSignup } from "@shared/auth/models/selectors/signupSelectors";

/**
 * ScreenPersonalInfo 컴포넌트
 * AuthModal 내 사용자 이름, 이메일, 생년월일 등록과 관련된 컴포넌트로, 각 항목에 대한 유효성을 관리합니다.
 *
 * @returns {JSX.Element} ScreenPersonalInfo 컴포넌트 렌더링 결과
 */
const ScreenPersonalInfo = () => {
  const user = useSelector(getUserInSignup);

  const { setScreenValidations } = useModalContext();
  const { moveNext } = useModalPagination();

  const { isValid, setIsValid, validationResult } = useValidationChecker({
    fields: ["username", "email", "gender", "year", "date", "month"],
    sliceState: user,
    setScreenValidations,
    screenName: "ScreenPersonalInfo",
  });

  const { title, birthHeading, birthExpl, button } = useLanguageContent([
    "components",
    "ScreenPersonalInfo",
  ]);

  return (
    <div className={styles["personal__info__screen"]}>
      <Modal.Body className={styles[`personal__info__screen__body`]}>
        <Text type="heading2">{title}</Text>
        {/* 사용자 이름 */}
        <InputUsername isSignup isValid={isValid} setIsValid={setIsValid} />
        {/* 이메일 */}
        <InputEmail isSignup isValid={isValid} setIsValid={setIsValid} />
        {/* 성별 */}
        <InputGender isSignup isValid={isValid} setIsValid={setIsValid} />
        <div className={styles[`personal__info__screen__birth__container`]}>
          <div>
            <Text status="bold">{birthHeading}</Text>
            <Text type="expl">{birthExpl}</Text>
          </div>
          <div className={styles[`personal__info__screen__birth`]}>
            {/* 생년월일 */}
            {/* 년 */}
            <InputBirthYear
              isSignup
              isValid={isValid}
              setIsValid={setIsValid}
            />
            {/* 월 */}
            <InputBirthMonth
              isSignup
              isValid={isValid}
              setIsValid={setIsValid}
            />
            {/* 일 */}
            <InputBirthDate
              isSignup
              isValid={isValid}
              setIsValid={setIsValid}
            />
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button
          onClick={moveNext}
          isValid={validationResult}
          bgColor="colorTheme"
          width="100%"
          rounded="2xl"
        >
          {button}
        </Button>
      </Modal.Footer>
    </div>
  );
};

export default ScreenPersonalInfo;
