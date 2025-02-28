import ERRORS from "./errors";

const getErrorTitle = (code: keyof typeof ERRORS.ERROR_TITLE_CODE) => {
  return ERRORS.ERROR_TITLE_CODE[code];
};

const getErrorDescription = (
  code: keyof typeof ERRORS.ERROR_DESCRIPTION_CODE
) => {
  return ERRORS.ERROR_DESCRIPTION_CODE[code];
};

const auths = {
  VerifyPassword: {
    heading: "비밀번호를 확인하세요.",
    description: "비밀번호를 입력하여 계속하세요.",
    btn: "확인",
    errors: {
      title: getErrorTitle,
      description: getErrorDescription,
    },
    label: "비밀번호",
  },
  InputVerifyPassword: {
    recovery: "비밀번호를 잊으셨나요?",
  },
  VerifyPasswordWithError: {
    label: "현재 비밀번호",
    recovery: "비밀번호를 잊으셨나요?",
  },
};

export default auths;
