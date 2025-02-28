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
    heading: "請驗證您的密碼。",
    description: "請輸入密碼以繼續。",
    btn: "確認",
    errors: {
      title: getErrorTitle,
      description: getErrorDescription,
    },
    label: "密碼",
  },
  InputVerifyPassword: {
    recovery: "忘記密碼？",
  },
  VerifyPasswordWithError: {
    label: "當前密碼",
    recovery: "忘記密碼？",
  },
};

export default auths;
