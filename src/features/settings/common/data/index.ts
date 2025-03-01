import { settings_common, sectionTextMap } from "./languages";
import { settings_account } from "../../account/data";
import { privacy_and_safety } from "../../privacy-and-safety/data";
import sectionDataMap from "./sectionDataMap";

const combineSettings = (countryCode: keyof typeof settings_common) => {
  return {
    ...settings_common[countryCode],
    ...settings_account[countryCode],
    ...privacy_and_safety[countryCode],
  };
};

const settings_lang = {
  us: combineSettings("us"),
  jp: combineSettings("jp"),
  kr: combineSettings("kr"),
  cn: combineSettings("cn"),
  tw: combineSettings("tw"),
};

export { sectionTextMap, sectionDataMap, settings_lang };
