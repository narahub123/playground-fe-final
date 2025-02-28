const ERROR_TITLE_CODE = {
  EMAIL_DUPLICATE_CHECK_FAILED: "邮箱重复检查失败",
  PHONE_DUPLICATE_CHECK_FAILED: "手机号码重复检查失败",
  USERID_DUPLICATE_CHECK_FAILED: "用户ID重复检查失败",
  GET_CONTACTS_FAILED: "获取联系人失败",
  USER_REGISTRATION_FAILED: "用户注册失败",
  LOGIN_FAILED: "登录失败",
  VERIFICATION_CODE_VERIFICATION_FAILED: "验证码验证失败",
  VERIFICATION_CODE_SEND_FAILED: "验证码发送失败",
  ADD_ACCOUNT_FAILED: "账户添加失败。",
  VERIFY_PASSWORD_FAILED: "密码验证失败",
  PASSWORD_CHANGE_FAILED: "密码更改失败",
} as const;

const ERROR_DESCRIPTION_CODE = {
  // validation error
  MISSING_EMAIL: "邮箱是必填项。请提供邮箱。",
  MISSING_PHONE: "手机号码是必填项。请提供手机号码。",
  MISSING_USERID: "用户ID是必填项。请提供用户ID。",
  MISSING_USER_IDENTIFIER:
    "邮箱、手机号码或用户ID至少需要提供一个。请提供相关信息。",
  MISSING_LANGUAGE_SETTING: "语言设置是必填项。请提供语言设置。",
  MISSING_PASSWORD: "密码是必填项。请提供密码。",
  MISSING_NEW_PASSWORD: "新密码是必填项。请提供新密码。",
  MISSING_USERNAME: "用户名是必填项。请提供用户名。",
  MISSING_BIRTH: "出生日期是必填项。请提供出生日期。",
  MISSING_NOTIFICATION_SETTINGS: "通知设置是必填项。请提供通知设置。",
  MISSING_DEVICE: "设备信息是必填项。请提供设备信息。",
  MISSING_LOCATION: "地址信息是必填项。请提供地址信息。",
  MISSING_IP: "IP地址是必填项。请提供IP地址。",
  MISSING_DEVICE_IP_LOCATION: "设备、IP和位置信息是必填项。",
  MISSING_VERIFICATION_CODE: "验证码是必填项。请提供验证码。",

  // verification failed
  VERIFICATION_CODE_MISMATCH: "验证码不匹配。",

  // authentication failed
  PASSWORD_UNMATCHED: "密码不匹配。",
  VERIFICATION_CODE_EXPIRED: "验证码已过期。请重新获取验证码并重试。",
  PASSWORD_UNCHANGED: "未检测到密码更改",

  // session error
  SESSION_CREATION_FAILED: "创建活动会话失败。",

  // save failed
  LOGIN_FAILURE_UNSAVED: "保存登录失败记录失败。",
  LOGIN_RECORD_SAVE_FAILED: "保存登录记录失败。",
  FAILED_TO_CREATE_VERIFICATION_CODE: "创建验证码失败。",

  // update failed
  LOCK_PROCESS_FAILED: "账户锁定处理时发生错误。",

  // delete failed
  PARTIAL_DELETION_FAILED: "部分登录失败记录未能删除。",
  FAILED_TO_DELETE_VERIFICATION_CODE: "删除验证码失败。",

  // account lock
  TOO_MANY_LOGIN_FAILURES: "登录失败次数超限。",
  BRUTE_FORCE_DETECTED:
    "检测到暴力破解攻击，您的账户已被锁定。请联系管理员解锁。",

  // not found
  USER_NOT_FOUND: "未找到符合条件的用户。",
  EMAIL_INFO_NOT_FOUND: "找不到电子邮件。",
  PHONE_INFO_NOT_FOUND: "找不到电话号码。",
  CONTACT_INFO_NOT_FOUND: "找不到联系信息。",

  ACCOUNT_ALREADY_EXISTS: "该账户已存在。",

  // unknown error
  UNKNOWN_ERROR: "发生未知错误",
};

const ERRORS = { ERROR_DESCRIPTION_CODE, ERROR_TITLE_CODE };

export default ERRORS;
