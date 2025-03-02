import components from "./components";
import countryNames from "./countryNames";
import ERRORS from "./errors";
import hooks from "./hooks";
import pages from "./pages";
import {
  settings_lang,
  sectionTextMap_all,
} from "@features/settings/common/data";
const settings = settings_lang["us"];
const sectionTextMap = sectionTextMap_all["us"];
import auths from "./auths";

const en_US = {
  pages,
  countryNames,
  components,
  hooks,
  ERRORS,
  settings,
  sectionTextMap,
  auths,
};

export default en_US;
