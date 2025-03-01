import { notifications_lang } from "./languages";

const combineNotifications = (countryCode: keyof typeof notifications_lang) => {
  return {
    ...notifications_lang[countryCode],
  };
};

const settings_notifications = {
  us: combineNotifications("us"),
  jp: combineNotifications("jp"),
  kr: combineNotifications("kr"),
  cn: combineNotifications("cn"),
  tw: combineNotifications("tw"),
};

export { settings_notifications };
