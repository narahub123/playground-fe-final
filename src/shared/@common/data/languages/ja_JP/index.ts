import components from "./components";
import countryNames from "./countryNames";
import hooks from "./hooks";
import pages from "./pages";
import ERRORS from "./errors";
import {
  settings_lang,
  sectionTextMap_all,
} from "@features/settings/common/data";
const settings = settings_lang["jp"];
const sectionTextMap = sectionTextMap_all["jp"];
import auths from "./auths";

const ja_JP = {
  pages,
  countryNames,
  components,
  hooks,
  ERRORS,
  settings,
  sectionTextMap,
  auths,
};

export default ja_JP;
