import { ISectionTextMap } from "@shared/@common/types";

const sectionTextMap: ISectionTextMap = {
  ExploreSection: {
    account: {
      label: "账户",
    },
    securityAndAccountAccess: {
      label: "安全与账户访问",
    },
    privacyAndSafety: {
      label: "隐私与安全",
    },
    notifications: {
      label: "通知",
    },
    accessibilityAndDisplayAndLanguage: {
      label: "可访问性、显示和语言",
    },
  },
  AccountSection: {
    accountInfo: {
      label: "账户信息",
      description: "查看账户信息，如电话号码和电子邮件地址。",
    },
    password: {
      label: "更改密码",
      description: "随时更改密码。",
    },
    downloadData: {
      label: "下载我的数据记录",
      description: "获取有关您账户中存储的信息类型的见解。",
    },
    deactivate: {
      label: "停用账户",
      description: "了解如何停用账户。",
    },
  },
  SecurityAndAccountAccessSection: {
    security: {
      label: "安全",
      description: "管理您的账户安全。",
    },
    appsAndSessions: {
      label: "应用与会话",
      description: "查看与账户和登录应用有关的时间信息。",
    },
    connectedAccounts: {
      label: "连接的账户",
      description: "管理用于登录PlayGround的Google、Naver或Kakao账户。",
    },
    delegate: {
      label: "委托",
      description: "管理共享账户。",
    },
  },
  PrivacyAndSafetySection: {
    audienceAndTagging: {
      label: "观众、媒体和标签",
      description: "管理在PlayGround上公开分享的信息。",
    },
    myPosts: {
      label: "我的帖子",
      description: "管理与帖子相关的信息。",
    },
    contentISee: {
      label: "显示的内容",
      description:
        "根据用户偏好（如话题和兴趣）决定在PlayGround上显示哪些内容。",
    },
    muteAndBlock: {
      label: "静音与屏蔽",
      description: "管理我已静音或屏蔽的账户、单词和通知。",
    },
    directMessages: {
      label: "消息",
      description: "管理可以向我发送直接消息的人。",
    },
    contacts: {
      label: "账户发现与联系人",
      description: "控制账户发现设置并管理导入的联系人。",
    },
    adsPreferences: {
      label: "广告设置",
      description: "管理PlayGround上的广告设置。",
    },
    locationInfo: {
      label: "位置信息",
      description: "管理用于定制PlayGround体验的位置信息。",
    },
  },
  NotificationsSection: {
    notification_filters: {
      label: "过滤器",
      description: "选择您想要接收的通知和不想接收的通知。",
    },
    notification_preferences: {
      label: "偏好设置",
      description: "为不同类型的通知选择偏好设置。",
    },
  },
  AccessibiltyAndDisplayAndLanguagesSection: {
    accessibility: {
      label: "可访问性",
      description: "管理PlayGround中的环境，如对比度和动作限制。",
    },
    display: {
      label: "显示",
      description:
        "管理字体大小、颜色和背景。此设置适用于此浏览器中的所有PlayGround账户。",
    },
    language: {
      label: "语言",
      description: "管理用于定制用户体验的语言。",
    },
    data: {
      label: "数据使用量",
      description: "PlayGround限制在此设备上使用的网络数据。",
    },
  },
};

export default sectionTextMap;
