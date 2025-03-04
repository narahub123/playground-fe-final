import components from "./components";
import countryNames from "./countryNames";
import hooks from "./hooks";
import pages from "./pages";
import ERRORS from "./errors";
import {
  settings_lang,
  sectionTextMap_all,
} from "@features/settings/common/data";
import { home_lang } from "@features/home/data";
const home = home_lang["kr"];
const settings = settings_lang["kr"];
const sectionTextMap = sectionTextMap_all["kr"];
import auths from "./auths";

const ko_kR = {
  pages,
  countryNames,
  components,
  hooks,
  ERRORS,
  settings,
  sectionTextMap,
  auths,
  home,
};

export default ko_kR;
