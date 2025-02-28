import { ISectionTextMap } from "@shared/@common/types";

const sectionTextMap: ISectionTextMap = {
  ExploreSection: {
    account: {
      label: "Account",
    },
    securityAndAccountAccess: {
      label: "Security and Account Access",
    },
    privacyAndSafety: {
      label: "Privacy and Safety",
    },
    notifications: {
      label: "Notifications",
    },
    accessibilityAndDisplayAndLanguage: {
      label: "Accessibility, Display, and Language",
    },
  },
  AccountSection: {
    accountInfo: {
      label: "Account Info",
      description:
        "View account information such as phone numbers and email addresses.",
    },
    password: {
      label: "Change Password",
      description: "Change your password anytime.",
    },
    downloadData: {
      label: "Download My Data Records",
      description:
        "Get insights about the types of information stored in your account.",
    },
    deactivate: {
      label: "Deactivate Account",
      description: "Learn how to deactivate your account.",
    },
  },
  SecurityAndAccountAccessSection: {
    security: {
      label: "Security",
      description: "Manage the security of your account.",
    },
    appsAndSessions: {
      label: "Apps and Sessions",
      description:
        "View information about when apps and your account logged in.",
    },
    connectedAccounts: {
      label: "Connected Accounts",
      description:
        "Manage the Google, Naver, or Kakao accounts connected to PlayGround for login.",
    },
    delegate: {
      label: "Delegate",
      description: "Manage shared accounts.",
    },
  },
  PrivacyAndSafetySection: {
    audienceAndTagging: {
      label: "Audience, Media, and Tagging",
      description:
        "Manage the information shared publicly on PlayGround with others.",
    },
    myPosts: {
      label: "My Posts",
      description: "Manage information related to posts.",
    },
    contentISee: {
      label: "Content Displayed",
      description:
        "Determine what content is shown on PlayGround based on user preferences like topics and interests.",
    },
    muteAndBlock: {
      label: "Mute and Block",
      description:
        "Manage muted or blocked accounts, words, and notifications.",
    },
    directMessages: {
      label: "Messages",
      description: "Manage who can send you direct messages.",
    },
    contacts: {
      label: "Account Discovery and Contacts",
      description:
        "Control account discovery settings and manage imported contacts.",
    },
    adsPreferences: {
      label: "Ads Preferences",
      description: "Manage ad settings on PlayGround.",
    },
    locationInfo: {
      label: "Location Info",
      description:
        "Manage location information used to customize your PlayGround experience.",
    },
  },
  NotificationsSection: {
    notification_filters: {
      label: "Filters",
      description:
        "Choose which notifications you want to receive and which you don’t.",
    },
    notification_preferences: {
      label: "Preferences",
      description: "Set preferences for different types of notifications.",
    },
  },
  AccessibiltyAndDisplayAndLanguagesSection: {
    accessibility: {
      label: "Accessibility",
      description:
        "Manage the PlayGround environment such as contrast and motion restrictions.",
    },
    display: {
      label: "Display",
      description:
        "Manage font sizes, colors, and backgrounds. These settings apply to all PlayGround accounts on this browser.",
    },
    language: {
      label: "Language",
      description: "Manage the language used to customize your experience.",
    },
    data: {
      label: "Data Usage",
      description:
        "PlayGround limits the use of some network data on this device.",
    },
  },
  AccountInfoSection: {
    screenName: {
      label: "Username",
    },
    phone: {
      label: "Phone",
    },
    email: {
      label: "Email",
    },
    isAuthorized: {
      label: "Verified",
    },
    isPostPrivate: {
      label: "Private Posts",
    },
    createdAt: {
      label: "Account Created",
    },
    country: {
      label: "Country",
    },
    languages: {
      label: "Languages",
    },
    gender: {
      label: "Gender",
    },
    birth: {
      label: "Date of Birth",
    },
    age: {
      label: "Age",
    },
  },
};

export default sectionTextMap;
