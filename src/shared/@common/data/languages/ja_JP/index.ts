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

const settings = settings_lang["jp"];
const sectionTextMap = sectionTextMap_all["jp"];
const home = home_lang["jp"];
const post = post_lang["jp"];
const postpage = postpage_lang["jp"];
const profilepage = profilepage_lang["jp"];
const explore = explore_lang["jp"];

const ja_JP = {
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

export default ja_JP;
