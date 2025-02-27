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
    heading: "パスワードを確認してください。",
    description: "続行するにはパスワードを入力してください。",
    btn: "確認",
    errors: {
      title: getErrorTitle,
      description: getErrorDescription,
    },
  },
  InputVerifyPassword: {
    label: "パスワード",
  },
};

export default auths;
