import {
  PASSWORD_INCOMPLETE,
  PASSWORD_SPECIAL_CHARECTERS,
} from "@shared/@common/constants";

const change_password_cn = {
  ChangePasswordSection: {
    title: "更改密码",
    expl: (numOfSession: number) =>
      `更改密码后，您将在除当前会话以外的所有活动X会话中退出登录。拥有您账户访问权限的${numOfSession}个应用程序不会受到影响。`,
    error: {
      INCOMPLETE: {
        regExp: PASSWORD_INCOMPLETE,
        errorMessage: `密码必须至少包含一个小写字母、一个大写字母、一个数字和一个特殊字符（${PASSWORD_SPECIAL_CHARECTERS}）。`,
      },
    },
    unmatched: "密码不匹配。",
    btn: "保存",
  },
  InputNewPassword: {
    label: "新密码",
  },
  InputPasswordConfirm: {
    label: "确认密码",
  },
};

export default change_password_cn;
