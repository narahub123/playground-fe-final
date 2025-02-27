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
    heading: "请验证您的密码。",
    description: "请输入密码以继续。",
    btn: "确认",
    errors: {
      title: getErrorTitle,
      description: getErrorDescription,
    },
  },
  InputVerifyPassword: {
    label: "密码",
  },
};

export default auths;
