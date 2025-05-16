import { VideoQuality, VideoSpeed } from "@shared/pages/ui/Post";
import { post_lang } from "./languages";
import { moreOptions, moreMyOptions } from "./moreOptions";
import postVideoIcons from "./postVideoIcons";
import postActionIcons from "./postActionIcons";

const imageTypes = ["jpg", "gif", "webp", "png"];
const videoTypes = ["mp4"];

const videoSpeedOptions: VideoSpeed[] = [
  0.25, 0.5, 0.75, 1, 1.25, 1.5, 1.75, 2,
];
const videoQualityOptions: VideoQuality[] = [
  "auto",
  "320p",
  "480p",
  "720p",
  "1080p",
];

export {
  post_lang,
  moreOptions,
  moreMyOptions,
  imageTypes,
  videoTypes,
  postVideoIcons,
  videoSpeedOptions,
  videoQualityOptions,
  postActionIcons,
};
