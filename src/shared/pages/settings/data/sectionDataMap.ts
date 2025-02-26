import { SETTINGS_LINKS } from "@shared/@common/constants";
import { ISectionDataMap } from "../types";

const sectionDataMap: ISectionDataMap = {
  ExploreSection: {
    account: {
      link: SETTINGS_LINKS.ACCOUNT,
    },
    securityAndAccountAccess: {
      link: SETTINGS_LINKS.SECURITY_AND_ACCOUNT_ACCESS,
    },
    privacyAndSafety: {
      link: SETTINGS_LINKS.PRIVACY_AND_SAFETY,
    },
    notifications: {
      link: SETTINGS_LINKS.NOTIFICATIONS,
    },
    accessibilityAndDisplayAndLanguage: {
      link: SETTINGS_LINKS.ACCESSIBILITY_DISPLAY_AND_LANGUAGES,
    },
  },
  AccountSection: {
    accountInfo: {
      link: SETTINGS_LINKS.ACCOUNT_INFO,
      iconName: "userLine",
    },
    password: {
      link: SETTINGS_LINKS.PASSWORD,
      iconName: "keyIcon",
    },
    downloadData: {
      link: SETTINGS_LINKS.DOWNLOAD_DATA,
      iconName: "downloadIcon",
    },
    deactivate: {
      link: SETTINGS_LINKS.DEACTIVATE,
      iconName: "deactivateIcon",
    },
  },
  SecurityAndAccountAccessSection: {
    security: {
      link: SETTINGS_LINKS.SECURITY,
      iconName: "securityIcon",
    },
    appsAndSessions: {
      link: SETTINGS_LINKS.APPS_AND_SESSIONS,
      iconName: "appsIcon",
    },
    connectedAccounts: {
      link: SETTINGS_LINKS.CONNECTED_ACCOUNTS,
      iconName: "connectedAccountsIcon",
    },
    delegate: {
      link: SETTINGS_LINKS.DELEGATE,
      iconName: "delegateIcon",
    },
  },
  PrivacyAndSafetySection: {
    audienceAndTagging: {
      link: SETTINGS_LINKS.AUDIENCE_AND_TAGGING,
      iconName: "audienceIcon",
    },
    myPosts: {
      link: SETTINGS_LINKS.MY_POSTS,
      iconName: "myPostsIcon",
    },
    contentISee: {
      link: SETTINGS_LINKS.CONTENT_I_SEE,
      iconName: "contentIcon",
    },
    muteAndBlock: {
      link: SETTINGS_LINKS.MUTE_AND_BLOCK,
      iconName: "muteIcon",
    },
    directMessages: {
      link: SETTINGS_LINKS.DIRECT_MESSAGES,
      iconName: "envelopLine",
    },
    contacts: {
      link: SETTINGS_LINKS.CONTACTS,
      iconName: "findPersonIcon",
    },
    adsPreferences: {
      link: SETTINGS_LINKS.ADS_PREFERENCES,
      iconName: "adsPreferencesIcon",
    },
    locationInfo: {
      link: SETTINGS_LINKS.LOCATION_INFORMATION,
      iconName: "pinIcon",
    },
  },
  NotificationsSection: {
    notification_filters: {
      link: SETTINGS_LINKS.NOTIFICATIONS_FILTERS,
      iconName: "notificationFiltersIcon",
    },
    notification_preferences: {
      link: SETTINGS_LINKS.NOTIFICATIONS_PREFERENCES,
      iconName: "notificationPreferencesIcon",
    },
  },
  AccessibiltyAndDisplayAndLanguagesSection: {
    accessibility: {
      link: SETTINGS_LINKS.ACCESSIBILITY,
      iconName: "accessibilityIcon",
    },
    display: {
      link: SETTINGS_LINKS.DISPLAY,
      iconName: "displayIcon",
    },
    language: {
      link: SETTINGS_LINKS.LANGUAGE,
      iconName: "languageIcon",
    },
    data: {
      link: SETTINGS_LINKS.DATA,
      iconName: "dataIcon",
    },
  },
};

export default sectionDataMap;
