import {
  IEmoji,
  ISkinTone,
} from "@shared/pages/ui/PostEditor/ui/PostEditorToolbar/EmojiButton";

const skinTones: ISkinTone[] = [
  { name: "default", color: "255, 213, 165" }, // 기본 스킨톤
  { name: "light", color: "255, 223, 193" }, // 🏻 Light Skin Tone
  { name: "mediumLight", color: "242, 192, 156" }, // 🏼 Medium-Light Skin Tone
  { name: "medium", color: "229, 160, 115" }, // 🏽 Medium Skin Tone
  { name: "mediumDark", color: "199, 111, 65" }, // 🏾 Medium-Dark Skin Tone
  { name: "dark", color: "146, 77, 37" }, // 🏿 Dark Skin Tone
];

const defaultEmojiPreviews: IEmoji[] = [
  { name: "default", char: "👋" }, // 기본 스킨톤
  { name: "light", char: "👋🏻" }, // 🏻 Light Skin Tone
  { name: "mediumLight", char: "👋🏼" }, // 🏼 Medium-Light Skin Tone
  { name: "medium", char: "👋🏽" }, // 🏽 Medium Skin Tone
  { name: "mediumDark", char: "👋🏾" }, // 🏾 Medium-Dark Skin Tone
  { name: "dark", char: "👋🏿" }, // 🏿 Dark Skin Tone
];

export { skinTones, defaultEmojiPreviews };
