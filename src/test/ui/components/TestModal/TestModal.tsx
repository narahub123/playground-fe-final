import {
  getUserIdInSignin,
  getUsernameInSignin,
} from "@features/auth-setting/models/selectors";
import { Input, Modal } from "@shared/@common/ui/components";
import { ReactNode } from "react";
import { useSelector } from "react-redux";
import { PASSWORD_MAX, PASSWORD_REGEX } from "@shared/@common/constants";
import {
  setUserIdInSignIn,
  setUsernameInSignIn,
} from "@features/auth-setting/models/slices/signinSlice";
import { InputErrorType } from "@shared/@common/types";
import {
  PASSWORD_REGEX_FORMAT,
  PASSWORD_REGEX_LENGTH,
} from "@shared/@common/constants/regExps";

interface TestModalProps {
  isOpen: boolean;
  onClose: () => void;
  curPage: number;
  setCurPage: React.Dispatch<React.SetStateAction<number>>;
}

const error: InputErrorType = {
  regExp: PASSWORD_REGEX,
  defaultErrorMsg:
    "비밀번호는 영문 대문자, 소문자, 숫자, 특수문자가 각각 하나 이상씩 필요합니다.",
  errorList: [
    {
      regExp: PASSWORD_REGEX_FORMAT,
      errorMsg: "비밀번호는 영문 대문자, 소문자, 숫자, 특수문자만 허용됩니다.",
    },
    {
      regExp: PASSWORD_REGEX_LENGTH,
      errorMsg: "비밀번호는 8자 이상 30자 이내여야 합니다.",
    },
  ],
  empty: "비밀번호를 입력해주세요.",
};

const list = Array.from({ length: 13 }).map((_, index) => ({
  text: `예시${index}`,
  value: `${index}`,
}));

const TestModal = ({
  isOpen,
  onClose,
  curPage,
  setCurPage,
}: TestModalProps) => {
  const value = useSelector(getUserIdInSignin);
  const inputValue = useSelector(getUsernameInSignin);
  const setInputValue = setUsernameInSignIn;
  const pageList: ReactNode[] = [
    <Modal.Body>
      <Input
        label="사용자 이름"
        field="username"
        inputValue={inputValue}
        setInputValue={setInputValue}
        maxLength={PASSWORD_MAX}
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
      </Input>
      {/* <Input
        field={"password"}
        fieldName={"유저 아이디"}
        maxLength={PASSWORD_MAX}
        inputValue={value}
        setInputValue={setUserIdInSignIn}
        error={error}
      /> */}
    </Modal.Body>,
    <Modal.Content>
      <Modal.Body>바디2</Modal.Body>
      <Modal.Footer>푸터2</Modal.Footer>
    </Modal.Content>,
  ];
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      lengthOfList={pageList.length}
      curPage={curPage}
      setCurPage={setCurPage}
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
  );
};

export default TestModal;
