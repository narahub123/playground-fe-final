import styles from "./AuthPage.module.css";
import { ReactNode } from "react";
import { Input, Modal, Text } from "@shared/@common/ui/components";
import { AuthButton } from "@shared/auth/ui/components";
import {
  useDisclosure,
  useLanguageContent,
} from "@shared/@common/models/hooks";
import { AuthButtonItemType } from "@shared/auth/types";
import { useSelector } from "react-redux";
import { getUsernameInSignin } from "@features/auth-setting/models/selectors";
import { setUsernameInSignIn } from "@features/auth-setting/models/slices/reducers";
import { PASSWORD_MAX, PASSWORD_REGEX } from "@shared/@common/constants";
import {
  PASSWORD_REGEX_FORMAT,
  PASSWORD_REGEX_LENGTH,
} from "@shared/@common/constants/regExps";
import { InputErrorType } from "@shared/@common/types";

const list = [
  { text: "텍스트", value: "값" },
  { text: "예2", value: "test" },
];

const AuthPage = () => {
  // 언어 설정
  const { title, heading1, signinList, heading2, loginList } =
    useLanguageContent(["pages", "AuthPage"]);

  const value = useSelector(getUsernameInSignin);

  const { isOpen, onOpen, onClose, curPage, setcurPage } = useDisclosure();

  const error: InputErrorType = {
    regExp: PASSWORD_REGEX,
    defaultErrorMsg:
      "비밀번호는 영문 대문자, 소문자, 숫자, 특수문자가 각각 하나 이상씩 필요합니다.",
    errorList: [
      {
        regExp: PASSWORD_REGEX_FORMAT,
        errorMsg:
          "비밀번호는 영문 대문자, 소문자, 숫자, 특수문자만 허용됩니다.",
      },
      {
        regExp: PASSWORD_REGEX_LENGTH,
        errorMsg: "비밀번호는 8자 이상 30자 이내여야 합니다.",
      },
    ],
    empty: "비밀번호를 입력해주세요.",
  };

  const pageList: ReactNode[] = [
    <Modal.Body>
      {/* <Input
        field={"password"}
        fieldName={"유저 아이디"}
        maxLength={PASSWORD_MAX}
        inputValue={value}
        setInputValue={setUsernameInSignIn}
        // error={error}
        mode="search"
        list={list}
        moveFocusToDropdown={true}
      />
      <Input
        field={"password"}
        fieldName={"유저 아이디"}
        maxLength={PASSWORD_MAX}
        inputValue={value}
        setInputValue={setUsernameInSignIn}
        // error={error}
        mode="search"
        list={list}
        moveFocusToDropdown={true}
      />
      <Input
        field={"password"}
        fieldName={"유저 아이디"}
        maxLength={PASSWORD_MAX}
        inputValue={value}
        setInputValue={setUsernameInSignIn}
        // error={error}
        mode="search"
        list={list}
        moveFocusToDropdown={true}
      />
      <Input
        field={"password"}
        fieldName={"유저 아이디"}
        maxLength={PASSWORD_MAX}
        inputValue={value}
        setInputValue={setUsernameInSignIn}
        // error={error}
        mode="search"
        list={list}
        moveFocusToDropdown={true}
      /> */}
      <input type="text" />
    </Modal.Body>,
    <Modal.Content>
      <Modal.Body>바디2</Modal.Body>
      <Modal.Footer>푸터2</Modal.Footer>
    </Modal.Content>,
  ];

  return (
    <div className={styles[`auth-page`]}>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        lengthOfList={pageList.length}
        curPage={curPage}
        setCurPage={setcurPage}
        width={70}
        unit="%"
      >
        <Modal.Overlay />
        <Modal.Container>
          <Modal.CloseButton />
          <Modal.Content>
            <Modal.Header>
              <Modal.Indicator />
            </Modal.Header>
            {pageList[curPage]}
            <Modal.Footer>버튼</Modal.Footer>
          </Modal.Content>
        </Modal.Container>
      </Modal>
      <header className={styles.header}>
        <Text text={title} />
      </header>
      <main className={styles.main}>
        <div className={styles.section}>
          <Text text={heading1} type="heading3" />
          <ul className={styles.list}>
            {(signinList as AuthButtonItemType[]).map((item, idx) => (
              <AuthButton key={idx} item={item} handleClick={onOpen} />
            ))}
          </ul>
        </div>
        <div className={styles.section}>
          <Text text={heading2} type="heading3" />
          <ul className={styles.list}>
            {(loginList as AuthButtonItemType[]).map((item, idx) => (
              <AuthButton key={idx} item={item} handleClick={onOpen} />
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
};

export default AuthPage;
