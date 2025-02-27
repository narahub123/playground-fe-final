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
      link: `/settings/${SETTINGS_LINKS.ACCOUNT_INFO}`,
      iconName: "userLine",
    },
    password: {
      link: `/settings/${SETTINGS_LINKS.PASSWORD}`,
      iconName: "keyIcon",
    },
    downloadData: {
      link: `/settings/${SETTINGS_LINKS.DOWNLOAD_DATA}`,
      iconName: "downloadIcon",
    },
    deactivate: {
      link: `/settings/${SETTINGS_LINKS.DEACTIVATE}`,
      iconName: "deactivateIcon",
    },
  },
  SecurityAndAccountAccessSection: {
    security: {
      link: `/settings/${SETTINGS_LINKS.SECURITY}`,
      iconName: "securityIcon",
    },
    appsAndSessions: {
      link: `/settings/${SETTINGS_LINKS.APPS_AND_SESSIONS}`,
      iconName: "appsIcon",
    },
    connectedAccounts: {
      link: `/settings/${SETTINGS_LINKS.CONNECTED_ACCOUNTS}`,
      iconName: "connectedAccountsIcon",
    },
    delegate: {
      link: `/settings/${SETTINGS_LINKS.DELEGATE}`,
      iconName: "delegateIcon",
    },
  },
  PrivacyAndSafetySection: {
    audienceAndTagging: {
      link: `/settings/${SETTINGS_LINKS.AUDIENCE_AND_TAGGING}`,
      iconName: "audienceIcon",
    },
    myPosts: {
      link: `/settings/${SETTINGS_LINKS.MY_POSTS}`,
      iconName: "myPostsIcon",
    },
    contentISee: {
      link: `/settings/${SETTINGS_LINKS.CONTENT_I_SEE}`,
      iconName: "contentIcon",
    },
    muteAndBlock: {
      link: `/settings/${SETTINGS_LINKS.MUTE_AND_BLOCK}`,
      iconName: "muteIcon",
    },
    directMessages: {
      link: `/settings/${SETTINGS_LINKS.DIRECT_MESSAGES}`,
      iconName: "envelopLine",
    },
    contacts: {
      link: `/settings/${SETTINGS_LINKS.CONTACTS}`,
      iconName: "findPersonIcon",
    },
    adsPreferences: {
      link: `/settings/${SETTINGS_LINKS.ADS_PREFERENCES}`,
      iconName: "adsPreferencesIcon",
    },
    locationInfo: {
      link: `/settings/${SETTINGS_LINKS.LOCATION_INFORMATION}`,
      iconName: "pinIcon",
    },
  },
  NotificationsSection: {
    notification_filters: {
      link: `/settings/${SETTINGS_LINKS.NOTIFICATIONS_FILTERS}`,
      iconName: "notificationFiltersIcon",
    },
    notification_preferences: {
      link: `/settings/${SETTINGS_LINKS.NOTIFICATIONS_PREFERENCES}`,
      iconName: "notificationPreferencesIcon",
    },
  },
  AccessibiltyAndDisplayAndLanguagesSection: {
    accessibility: {
      link: `/settings/${SETTINGS_LINKS.ACCESSIBILITY}`,
      iconName: "accessibilityIcon",
    },
    display: {
      link: `/settings/${SETTINGS_LINKS.DISPLAY}`,
      iconName: "displayIcon",
    },
    language: {
      link: `/settings/${SETTINGS_LINKS.LANGUAGE}`,
      iconName: "languageIcon",
    },
    data: {
      link: `/settings/${SETTINGS_LINKS.DATA}`,
      iconName: "dataIcon",
    },
  },
  AccountInfoSection: {
    screenName: {
      link: `/settings/${SETTINGS_LINKS.SCREEN_NAME}`,
    },
    phone: {
      link: `/settings/${SETTINGS_LINKS.PHONE}`,
    },
    email: {
      link: `/settings/${SETTINGS_LINKS.EMAIL}`,
    },
    isAuthorized: {
      link: "",
    },
    isPostPrivate: {
      link: `/settings/${SETTINGS_LINKS.AUDIENCE_AND_TAGGING}`,
    },
    createdAt: {
      link: "",
    },
    country: {
      link: `/settings/${SETTINGS_LINKS.COUNTRY}`,
    },
    languages: {
      link: `/settings/${SETTINGS_LINKS.LANGUAGES}`,
    },
    gender: {
      link: `/settings/${SETTINGS_LINKS.GENDER}`,
    },
    birth: {
      link: ``,
    },
    age: {
      link: `/settings/${SETTINGS_LINKS.AGE}`,
    },
  },
};

export default sectionDataMap;
