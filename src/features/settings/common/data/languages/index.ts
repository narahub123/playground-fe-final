import { sectionTextMap_us, settings_common_us } from "./en_US";
import { sectionTextMap_jp, settings_common_jp } from "./ja_JP";
import { sectionTextMap_kr, settings_common_kr } from "./ko_KR";
import { sectionTextMap_cn, settings_common_cn } from "./zh_CN";
import { sectionTextMap_tw, settings_common_tw } from "./zh_TW";

const settings_common = {
  kr: settings_common_kr,
  us: settings_common_us,
  jp: settings_common_jp,
  cn: settings_common_cn,
  tw: settings_common_tw,
};

const sectionTextMap_all = {
  kr: sectionTextMap_kr,
  us: sectionTextMap_us,
  jp: sectionTextMap_jp,
  cn: sectionTextMap_cn,
  tw: sectionTextMap_tw,
};

export { settings_common, sectionTextMap_all };
