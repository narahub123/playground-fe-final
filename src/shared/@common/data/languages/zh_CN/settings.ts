const sections = {
  ExploreSection: {
    title: "设置",
  },
  AccountSection: {
    title: "账户",
    description: "查看账户信息，下载数据记录或了解更多关于账户停用的选项。",
  },
  SecurityAndAccountAccessSection: {
    title: "安全与账户访问",
    description: "管理账户安全并跟踪账户使用情况，包括与账户连接的应用。",
  },
  PrivacyAndSafetySection: {
    title: "隐私与安全",
    description: "管理在PlayGround上显示和共享的信息。",
    heading1: "我的PlayGround活动",
    heading2: "数据共享与定制",
  },
  NotificationsSection: {
    title: "通知",
    description: "选择接收关于活动、兴趣和推荐的通知类型。",
  },
  AccessibiltyAndDisplayAndLanguagesSection: {
    title: "可访问性、显示、语言",
    description: "管理PlayGround上内容的显示方式。",
  },
  SettingsSearch: {
    placeholder: "搜索设置",
  },
  BackIcon: {
    title: "返回",
  },
  AccountInfoSection: {
    title: "账户信息",
  },
  ChangePasswordSection: {
    title: "更改密码",
    expl: (numOfSession: number) =>
      `更改密码后，除当前使用的会话外，您将在所有活跃的X会话中退出登录。拥有您账户访问权限的${numOfSession}个应用程序不会受到影响。`,
  },
};

export default sections;
