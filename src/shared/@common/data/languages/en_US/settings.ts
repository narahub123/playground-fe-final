const settings = {
  ExploreSection: {
    title: "Settings",
  },
  AccountSection: {
    title: "Account",
    description:
      "View your account information, download data records, or learn more about account deactivation options.",
  },
  SecurityAndAccountAccessSection: {
    title: "Security and Account Access",
    description:
      "Manage your account security and track your account usage, including apps connected to your account.",
  },
  PrivacyAndSafetySection: {
    title: "Privacy and Safety",
    description: "Manage the information shared and displayed on PlayGround.",
    heading1: "My PlayGround Activity",
    heading2: "Data Sharing and Customization",
  },
  NotificationsSection: {
    title: "Notifications",
    description:
      "Choose the types of notifications you receive about activities, interests, and recommendations.",
  },
  AccessibiltyAndDisplayAndLanguagesSection: {
    title: "Accessibility, Display, Language",
    description: "Manage how content is displayed on PlayGround.",
  },
  SettingsSearch: {
    placeholder: "Search settings",
  },
  BackIcon: {
    title: "Go back",
  },
  AccountInfoSection: {
    title: "Account Information",
  },
  ChangePasswordSection: {
    title: "Change Password",
    expl: (numOfSession: number) =>
      `Changing your password will log you out of all active X sessions except the one you are currently using. ${numOfSession} applications with access to your account will not be affected.`,
  },
};

export default settings;
