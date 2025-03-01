import { settings_account_lang } from "./languages";
import { settings_account_info } from "../pages/account-info/data";

const combineSettingsAccount = (
  countryCode: keyof typeof settings_account_lang
) => {
  return {
    ...settings_account_lang[countryCode],
    ...settings_account_info[countryCode],
  };
};

const settings_account = {
  us: combineSettingsAccount("us"),
  jp: combineSettingsAccount("jp"),
  kr: combineSettingsAccount("kr"),
  cn: combineSettingsAccount("cn"),
  tw: combineSettingsAccount("tw"),
};

export { settings_account };
