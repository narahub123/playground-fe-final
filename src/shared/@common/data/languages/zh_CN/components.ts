import {
  birthDateList,
  birthMonthList,
  birthYearList,
} from "@features/auth-email/data";
import {
  EMPTY,
  USERNAME_MAX,
  USERNAME_MIN,
  USERNAME_UNDER_MINIMUM,
} from "@shared/@common/constants";

const components = {
  Input: {
    iconTitle: {
      password: {
        eyeoff: "隐藏密码",
        eye: "显示密码",
      },
    },
  },
  Dropdown: {
    emptyResult: "未找到符合该关键词的结果。",
  },
  Modal: {
    ModalCloseButton: {
      iconTitle: "关闭",
    },
  },
  PersonalInfoScreen: {
    title: "创建账户。",
    usernameLabel: "用户名",
    usernameError: {
      EMPTY: { regExp: EMPTY, errorMessage: "请输入用户名。" },
      UNDER_MINIMUM: {
        regExp: USERNAME_UNDER_MINIMUM,
        errorMessage: `用户名必须至少 ${USERNAME_MIN} 个字符，最多 ${USERNAME_MAX} 个字符。`,
      },
      EXCEED: {
        regExp: "",
        errorMessage: `用户名最多可以包含 ${USERNAME_MAX} 个字符。`,
      },
    },
    emailLabel: "电子邮件",
    birthHeading: "出生日期",
    birthExpl: "此信息不会公开显示。无论账户主题如何，请验证您的年龄。",
    birthYearLabel: "年",
    birthMonthLabel: "月",
    birthDateLabel: "日",
    birthYearList: birthYearList,
    birthMonthList: birthMonthList,
    birthDateList: birthDateList,
    birthYearUnit: "年",
    birthMonthUnit: "月",
    birthDateUnit: "日",
  },
};

export default components;
