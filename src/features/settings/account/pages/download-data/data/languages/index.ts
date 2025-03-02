import { download_data_us } from "./en_US";
import { download_data_jp } from "./ja_JP";
import { download_data_kr } from "./ko_KR";
import { download_data_cn } from "./zh_CN";
import { download_data_tw } from "./zh_TW";

const download_data = {
  us: download_data_us,
  jp: download_data_jp,
  kr: download_data_kr,
  cn: download_data_cn,
  tw: download_data_tw,
};

export { download_data };
