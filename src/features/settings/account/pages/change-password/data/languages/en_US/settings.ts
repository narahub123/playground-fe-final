import {
  PASSWORD_INCOMPLETE,
  PASSWORD_SPECIAL_CHARECTERS,
} from "@shared/@common/constants";

const change_password_us = {
  ChangePasswordSection: {
    title: "Change Password",
    expl: (numOfSession: number) =>
      `Changing your password will log you out of all active X sessions except the one you are currently using. ${numOfSession} applications with access to your account will not be affected.`,
    error: {
      INCOMPLETE: {
        regExp: PASSWORD_INCOMPLETE,
        errorMessage: `Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character (${PASSWORD_SPECIAL_CHARECTERS}).`,
      },
    },
    unmatched: "Passwords do not match.",
    btn: "Save",
  },
  InputNewPassword: {
    label: "New Password",
  },
  InputPasswordConfirm: {
    label: "Confirm Password",
  },
};

export default change_password_us;
