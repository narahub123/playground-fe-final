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
    heading: "Please verify your password.",
    description: "Enter your password to continue.",
    btn: "Confirm",
    errors: {
      title: getErrorTitle,
      description: getErrorDescription,
    },
    label: "Password",
  },
  InputVerifyPassword: {
    recovery: "Forgot your password?",
  },
};

export default auths;
