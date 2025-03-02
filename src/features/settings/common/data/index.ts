import { settings_common, sectionTextMap_all } from "./languages";
import { settings_account } from "../../account/data";
import { privacy_and_safety } from "../../privacy-and-safety/data";
import { security_and_account_access } from "../../security-and-account-access/data";
import { settings_notifications } from "../../notifications/data";
import { accessibilty_and_display_languages } from "../../accessibilty-and-display-languages/data";
import sectionDataMap from "./sectionDataMap";

const combineSettings = (countryCode: keyof typeof settings_common) => {
  return {
    ...settings_common[countryCode],
    ...settings_account[countryCode],
    ...security_and_account_access[countryCode],
    ...privacy_and_safety[countryCode],
    ...settings_notifications[countryCode],
    ...accessibilty_and_display_languages[countryCode],
  };
};

const settings_lang = {
  us: combineSettings("us"),
  jp: combineSettings("jp"),
  kr: combineSettings("kr"),
  cn: combineSettings("cn"),
  tw: combineSettings("tw"),
};

export { sectionTextMap_all, sectionDataMap, settings_lang };
