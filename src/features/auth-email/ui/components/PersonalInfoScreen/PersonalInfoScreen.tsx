import styles from "./PersonalInfoScreen.module.css";
import { Input, Modal, Text } from "@shared/@common/ui/components";
import {
  setBirthDateSignup,
  setBirthMonthSignup,
  setBirthYearSignup,
  setEmailInSignup,
  setUsernameInSignup,
} from "@features/auth-setting/models/slices/signupSlice";
import {
  getBirthInSignup,
  getEmailInSignup,
  getUsernameInSignup,
} from "@features/auth-setting/models/selectors";
import { useSelector } from "react-redux";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { USERNAME_MAX } from "@shared/@common/constants";
import { useState } from "react";

/**
 * PersonalInfoScreen 컴포넌트
 * AuthModal 내 사용자 이름, 이메일, 생년월일 등록과 관련된 컴포넌트로, 각 항목에 대한 유효성을 관리합니다.
 *
 * @returns {JSX.Element} PersonalInfoScreen 컴포넌트 렌더링 결과
 */
const PersonalInfoScreen = () => {
  const username = useSelector(getUsernameInSignup);
  const email = useSelector(getEmailInSignup);
  const birth = useSelector(getBirthInSignup);
  const [isValid, setIsValid] = useState<boolean | { [key: string]: boolean }>(
    {}
  );

  const {
    title,
    usernameLabel,
    emailLabel,
    birthHeading,
    birthExpl,
    birthYearLabel,
    birthMonthLabel,
    birthDateLabel,
    birthYearList,
    birthMonthList,
    birthDateList,
    birthYearUnit,
    birthMonthUnit,
    birthDateUnit,
    usernameError,
    emailError,
  } = useLanguageContent(["components", "PersonalInfoScreen"]);

  return (
    <div className={styles["personal__info__screen"]}>
      <Modal.Body className={styles[`personal__info__screen__body`]}>
        <Text text={title} type="heading2" />
        {/* 사용자 이름 */}
        <Input
          field="username"
          label={usernameLabel}
          inputValue={username}
          setInputValue={setUsernameInSignup}
          maxLength={USERNAME_MAX}
          error={usernameError}
          isValid={isValid}
          setIsValid={setIsValid}
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
          label={emailLabel}
          inputValue={email}
          setInputValue={setEmailInSignup}
          error={emailError}
          isValid={isValid}
          setIsValid={setIsValid}
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
        <div className={styles[`personal__info__screen__birth__container`]}>
          <div>
            <Text text={birthHeading} status="bold" />
            <Text text={birthExpl} type="expl" />
          </div>
          <div className={styles[`personal__info__screen__birth`]}>
            {/* 생년월일 */}
            {/* 년 */}
            <Input
              field="year"
              label={birthYearLabel}
              inputValue={birth.year as string}
              setInputValue={setBirthYearSignup}
              list={birthYearList(birthYearUnit)}
              isValid={isValid}
              setIsValid={setIsValid}
            >
              <Input.Main>
                <Input.Top>
                  <Input.Label />
                </Input.Top>
                <Input.Bottom>
                  <Input.Field />
                </Input.Bottom>
              </Input.Main>
              <Input.Dropdown />
            </Input>
            {/* 월 */}
            <Input
              field="month"
              label={birthMonthLabel}
              inputValue={birth.month as string}
              setInputValue={setBirthMonthSignup}
              list={birthMonthList(birthMonthUnit)}
              isValid={isValid}
              setIsValid={setIsValid}
            >
              <Input.Main>
                <Input.Top>
                  <Input.Label />
                </Input.Top>
                <Input.Bottom>
                  <Input.Field />
                </Input.Bottom>
              </Input.Main>
              <Input.Dropdown />
            </Input>
            {/* 일 */}
            <Input
              field="date"
              label={birthDateLabel}
              inputValue={birth.date as string}
              setInputValue={setBirthDateSignup}
              list={birthDateList(birth.year, birth.month, birthDateUnit)}
              isValid={isValid}
              setIsValid={setIsValid}
            >
              <Input.Main>
                <Input.Top>
                  <Input.Label />
                </Input.Top>
                <Input.Bottom>
                  <Input.Field />
                </Input.Bottom>
              </Input.Main>
              <Input.Dropdown />
            </Input>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>버튼</Modal.Footer>
    </div>
  );
};

export default PersonalInfoScreen;
