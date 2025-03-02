import components from "./components";
import countryNames from "./countryNames";
import hooks from "./hooks";
import pages from "./pages";
import ERRORS from "./errors";
import {
  settings_lang,
  sectionTextMap_all,
} from "@features/settings/common/data";
const settings = settings_lang["tw"];
const sectionTextMap = sectionTextMap_all["tw"];
import auths from "./auths";

const zh_TW = {
  pages,
  countryNames,
  components,
  hooks,
  ERRORS,
  settings,
  sectionTextMap,
  auths,
};

export default zh_TW;
