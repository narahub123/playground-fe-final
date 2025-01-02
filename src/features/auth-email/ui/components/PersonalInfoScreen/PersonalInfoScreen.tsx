import styles from "./PersonalInfoScreen.module.css";
import { Input, Modal } from "@shared/@common/ui/components";
import {
  setEmailInSignIn,
  setUsernameInSignIn,
} from "@features/auth-setting/models/slices/signinSlice";
import {
  getBirthInSignin,
  getEmailInSignin,
  getUsernameInSignin,
} from "@features/auth-setting/models/selectors";
import { useSelector } from "react-redux";

/**
 * PersonalInfoScreen 컴포넌트
 * AuthModal 내 사용자 이름, 이메일, 생년월일 등록과 관련된 컴포넌트로, 각 항목에 대한 유효성을 관리합니다.
 *
 * @returns {JSX.Element} PersonalInfoScreen 컴포넌트 렌더링 결과
 */
const PersonalInfoScreen = () => {
  const username = useSelector(getUsernameInSignin);
  const email = useSelector(getEmailInSignin);
  const birth = useSelector(getBirthInSignin);

  return (
    <div className={styles["personal__info__screen"]}>
      <Modal.Body>
        {/* 사용자 이름 */}
        <Input
          field="username"
          label="사용자 이름"
          inputValue={username}
          setInputValue={setUsernameInSignIn}
          maxLength={50}
        >
          <Input.Main>
            <Input.Top>
              <Input.Label />
              <Input.Counter />
            </Input.Top>
            <Input.Bottom>
              <Input.Field />
            </Input.Bottom>
          </Input.Main>
          <Input.Error />
        </Input>
        {/* 이메일 */}
        <Input
          field="email"
          label="이메일"
          inputValue={email}
          setInputValue={setEmailInSignIn}
        >
          <Input.Main>
            <Input.Top>
              <Input.Label />
            </Input.Top>
            <Input.Bottom>
              <Input.Field />
            </Input.Bottom>
          </Input.Main>
          <Input.Error />
        </Input>
        <div className={styles[`personal__info__screen__birth`]}>
          {/* 생년월일 */}
          {/* 년 */}
          <Input
            field="year"
            label="년"
            inputValue={birth.year as string}
            setInputValue={setEmailInSignIn}
            list={[]}
          >
            <Input.Main>
              <Input.Top>
                <Input.Label />
              </Input.Top>
              <Input.Bottom>
                <Input.Field />
              </Input.Bottom>
            </Input.Main>
            <Input.Error />
          </Input>
          {/* 월 */}
          <Input
            field="month"
            label="월"
            inputValue={birth.month as string}
            setInputValue={setEmailInSignIn}
            list={[]}
          >
            <Input.Main>
              <Input.Top>
                <Input.Label />
              </Input.Top>
              <Input.Bottom>
                <Input.Field />
              </Input.Bottom>
            </Input.Main>
            <Input.Error />
          </Input>
          {/* 일 */}
          <Input
            field="date"
            label="일"
            inputValue={birth.date as string}
            setInputValue={setEmailInSignIn}
            list={[]}
          >
            <Input.Main>
              <Input.Top>
                <Input.Label />
              </Input.Top>
              <Input.Bottom>
                <Input.Field />
              </Input.Bottom>
            </Input.Main>
            <Input.Error />
          </Input>
        </div>
      </Modal.Body>
      <Modal.Footer>버튼</Modal.Footer>
    </div>
  );
};

export default PersonalInfoScreen;
