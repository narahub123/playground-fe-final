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
import auths from "./auths";
import { post_lang } from "@shared/pages/ui/Post/data";
import { postpage_lang } from "@features/post-page";
import profilepage_lang from "@features/profile-page/data/language";
import { explore_lang } from "@features/explore";

const home = home_lang["kr"];
const settings = settings_lang["kr"];
const sectionTextMap = sectionTextMap_all["kr"];
const post = post_lang["kr"];
const postpage = postpage_lang["kr"];
const profilepage = profilepage_lang["kr"];
const explore = explore_lang["kr"];

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
  post,
  postpage,
  profilepage,
  explore,
};

export default ko_kR;
