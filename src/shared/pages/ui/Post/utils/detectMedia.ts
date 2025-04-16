import { imageTypes, MediaType, videoTypes } from "..";

const detectMedia = (medium: string): MediaType | undefined => {
  const parts = medium.split(".");

  const type = parts[parts.length - 1];

  if (imageTypes.includes(type)) return "image";
  else if (videoTypes.includes(type)) return "video";
  else return undefined;
};

export default detectMedia;
