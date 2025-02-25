import { ISectionTextMap } from "@shared/@common/types";

const sectionTextMap: ISectionTextMap = {
  ExploreSection: {
    account: {
      label: "帳戶",
    },
    securityAndAccountAccess: {
      label: "安全與帳戶訪問",
    },
    privacyAndSafety: {
      label: "隱私與安全",
    },
    notifications: {
      label: "通知",
    },
    accessibilityAndDisplayAndLanguage: {
      label: "可訪問性、顯示和語言",
    },
  },
  AccountSection: {
    accountInfo: {
      label: "帳戶信息",
      description: "查看帳戶信息，如手機號碼和電子郵件地址。",
    },
    password: {
      label: "更改密碼",
      description: "隨時更改密碼。",
    },
    downloadData: {
      label: "下載我的數據記錄",
      description: "獲取有關您帳戶中存儲的信息類型的見解。",
    },
    deactivate: {
      label: "停用帳戶",
      description: "了解如何停用帳戶。",
    },
  },
  SecurityAndAccountAccessSection: {
    security: {
      label: "安全",
      description: "管理您的帳戶安全。",
    },
    appsAndSessions: {
      label: "應用與會話",
      description: "查看與帳戶和登錄應用有關的時間信息。",
    },
    connectedAccounts: {
      label: "連接的帳戶",
      description: "管理用於登錄PlayGround的Google、Naver或Kakao帳戶。",
    },
    delegate: {
      label: "委託",
      description: "管理共享帳戶。",
    },
  },
  PrivacyAndSafetySection: {
    audienceAndTagging: {
      label: "觀眾、媒體和標籤",
      description: "管理在PlayGround上公開分享的信息。",
    },
    myPosts: {
      label: "我的帖子",
      description: "管理與帖子相關的信息。",
    },
    contentISee: {
      label: "顯示的內容",
      description:
        "根據用戶偏好（如話題和興趣）決定在PlayGround上顯示哪些內容。",
    },
    muteAndBlock: {
      label: "靜音與屏蔽",
      description: "管理我已靜音或屏蔽的帳戶、單詞和通知。",
    },
    directMessages: {
      label: "消息",
      description: "管理可以向我發送直接消息的人。",
    },
    contacts: {
      label: "帳戶發現與聯絡人",
      description: "控制帳戶發現設置並管理導入的聯絡人。",
    },
    adsPreferences: {
      label: "廣告設置",
      description: "管理PlayGround上的廣告設置。",
    },
    locationInfo: {
      label: "位置信息",
      description: "管理用於定制PlayGround體驗的位置信息。",
    },
  },
  NotificationsSection: {
    notification_filters: {
      label: "過濾器",
      description: "選擇您想要接收的通知和不想接收的通知。",
    },
    notification_preferences: {
      label: "偏好設置",
      description: "為不同類型的通知選擇偏好設置。",
    },
  },
  AccessibiltyAndDisplayAndLanguageSection: {
    accessibility: {
      label: "可訪問性",
      description: "管理PlayGround中的環境，如對比度和動作限制。",
    },
    display: {
      label: "顯示",
      description:
        "管理字體大小、顏色和背景。此設置適用於此瀏覽器中的所有PlayGround帳戶。",
    },
    language: {
      label: "語言",
      description: "管理用於定制用戶體驗的語言。",
    },
    data: {
      label: "數據使用量",
      description: "PlayGround限制在此設備上使用的網絡數據。",
    },
  },
};

export default sectionTextMap;
