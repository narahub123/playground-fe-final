import {
  birthDateList,
  birthMonthList,
  birthYearList,
} from "@features/auth-email/data";
import {
  EMAIL_FORMAT,
  EMPTY,
  PASSWORD_FORBIDDEN,
  PASSWORD_INCOMPLETE,
  PASSWORD_MAX,
  PASSWORD_MIN,
  PASSWORD_SPECIAL_CHARECTERS,
  PASSWORD_UNDER_MINIMUM,
  USERID_FORBIDDEN,
  USERID_INCOMPLETE,
  USERID_MAX,
  USERID_MIN,
  USERID_SPECIAL_CHARACTERS,
  USERID_UNDER_MINIMUM,
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
  ScreenPersonalInfo: {
    title: "创建账户。",
    usernameLabel: "用户名",
    usernameError: {
      EMPTY: { regExp: EMPTY, errorMessage: "请输入用户名。" },
      UNDER_MINIMUM: {
        regExp: USERNAME_UNDER_MINIMUM,
        errorMessage: `用户名必须至少 ${USERNAME_MIN} 个字符，最多 ${USERNAME_MAX} 个字符。`,
      },
      EXCEED: {
        errorMessage: `用户名最多可以包含 ${USERNAME_MAX} 个字符。`,
      },
    },
    emailLabel: "电子邮件",
    emailError: {
      EMPTY: { regExp: EMPTY, errorMessage: "请输入电子邮件地址。" },
      FORMAT: {
        regExp: EMAIL_FORMAT,
        errorMessage: "请输入有效的电子邮件格式。 \n示例: username@example.com",
      },
      DUPLICATE: {
        errorMessage: "此电子邮件已注册。",
      },
      DISCONNECT: {
        errorMessage: "当前无法连接到服务器。请稍后再试。",
      },
    },
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
    button: "下一个",
  },
  Button: {
    empty: "请添加文字或图标。",
    ariaLabel: {
      loading: "加载中",
      button: "点击按钮",
    },
  },
  ScreenPassword: {
    title: "需要密码。",
    expl: "必须至少包含8个字符。",
    button: "下一个",
  },
  InputPassword: {
    passwordLabel: {
      password: "密码",
      confirm: "确认密码",
      current: "当前密码",
    },
    passwordError: {
      REQUIRED: {
        errorMessage: "请先设置密码。",
      },
      MISMATCH: {
        errorMessage: "密码与设置的密码不一致。",
      },
      EMPTY: {
        regExp: EMPTY,
        errorMessage: "请输入密码。",
      },
      FORBIDDEN: {
        regExp: PASSWORD_FORBIDDEN,
        errorMessage: `密码必须由小写字母、大写字母、数字和特殊字符(${PASSWORD_SPECIAL_CHARECTERS})组成。`,
      },
      UNDER_MINIMUM: {
        regExp: PASSWORD_UNDER_MINIMUM,
        errorMessage: `密码长度必须在${PASSWORD_MIN}到${PASSWORD_MAX}字符之间。`,
      },
      INCOMPLETE: {
        regExp: PASSWORD_INCOMPLETE,
        errorMessage: `密码必须至少包含一个小写字母、一个大写字母、一个数字和一个特殊字符(${PASSWORD_SPECIAL_CHARECTERS})。`,
      },
      EXCEED: {
        errorMessage: `密码最多不能超过${PASSWORD_MAX}个字符。`,
      },
    },
  },
  ScreenUserId: {
    title: "请设置您的用户ID。",
    expl: "@用户ID是您独有的ID。以后随时可以更改。",
    button: "下一步",
  },
  InputUserId: {
    label: "用户ID",
    userIdError: {
      EMPTY: {
        regExp: EMPTY,
        errorMessage: "请输入用户ID。",
      },
      FORBIDDEN: {
        regExp: USERID_FORBIDDEN,
        errorMessage: `用户ID必须由小写字母、大写字母、数字和特殊字符(${USERID_SPECIAL_CHARACTERS})组成。`,
      },
      UNDER_MINIMUM: {
        regExp: USERID_UNDER_MINIMUM,
        errorMessage: `用户ID必须在${USERID_MIN}到${USERID_MAX}个字符之间。`,
      },
      INCOMPLETE: {
        regExp: USERID_INCOMPLETE,
        errorMessage: `用户ID必须至少包含一个小写字母、大写字母、数字和特殊字符(${USERID_SPECIAL_CHARACTERS})。`,
      },
      EXCEED: {
        errorMessage: `用户ID最多只能有${USERID_MAX}个字符。`,
      },
      DUPLICATE: {
        errorMessage: `该用户ID已存在。`,
      },
      DISCONNECT: {
        errorMessage: `目前无法连接到服务器，请稍后重试。`,
      },
    },
  },
  ScreenProfileImage: {
    title: "选择头像",
    expl: "有喜欢的自拍照吗？ 现在上传吧。",
    button: {
      ignore: "暂时跳过",
      register: "下一步",
    },
  },
};

export default components;
