import { settings_account_lang } from "./languages";
import { settings_account_info } from "../pages/account-info/data";
import { change_password } from "../pages/change-password/data";

const combineSettingsAccount = (
  countryCode: keyof typeof settings_account_lang
) => {
  return {
    ...settings_account_lang[countryCode],
    ...settings_account_info[countryCode],
    ...change_password[countryCode],
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
