import components from "./components";
import countryNames from "./countryNames";
import ERRORS from "./errors";
import hooks from "./hooks";
import pages from "./pages";
import {
  settings_lang,
  sectionTextMap_all,
} from "@features/settings/common/data";
import auths from "./auths";
import { home_lang } from "@features/home/data";
import { post_lang } from "@shared/pages/ui/Post/data";
import { postpage_lang } from "@features/post-page/data";

const settings = settings_lang["us"];
const sectionTextMap = sectionTextMap_all["us"];
const home = home_lang["us"];
const post = post_lang["us"];
const postpage = postpage_lang["us"];

const en_US = {
  pages,
  countryNames,
  components,
  hooks,
  ERRORS,
  settings,
  sectionTextMap,
  auths,
  home,
  post,
  postpage,
};

export default en_US;
