import components from "./components";
import countryNames from "./countryNames";
import hooks from "./hooks";
import pages from "./pages";
import ERRORS from "./errors";
import {
  settings_lang,
  sectionTextMap_all,
} from "@features/settings/common/data";
import auths from "./auths";
import { home_lang } from "@features/home/data";
import { post_lang } from "@shared/pages/ui/Post/data";
import { postpage_lang } from "@features/post-page";
import profilepage_lang from "@features/profile-page/data/language";
import { explore_lang } from "@features/explore";

const settings = settings_lang["cn"];
const sectionTextMap = sectionTextMap_all["cn"];
const home = home_lang["cn"];
const post = post_lang["cn"];
const postpage = postpage_lang["cn"];
const profilepage = profilepage_lang["cn"];
const explore = explore_lang["cn"];

const zh_CN = {
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
  profilepage,
  explore,
};

export default zh_CN;
