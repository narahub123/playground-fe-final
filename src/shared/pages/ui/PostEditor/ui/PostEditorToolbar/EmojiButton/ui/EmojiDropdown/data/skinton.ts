import {
  IEmoji,
  ISkinTone,
} from "@shared/pages/ui/PostEditor/ui/PostEditorToolbar/EmojiButton";

const skinTones: ISkinTone[] = [
  { name: "default", color: "255, 213, 165", code: "" }, // 기본 스킨톤
  { name: "light", color: "255, 223, 193", code: "1F3FB" }, // 🏻 Light Skin Tone
  { name: "mediumLight", color: "242, 192, 156", code: "1F3FC" }, // 🏼 Medium-Light Skin Tone
  { name: "medium", color: "229, 160, 115", code: "1F3FD" }, // 🏽 Medium Skin Tone
  { name: "mediumDark", color: "199, 111, 65", code: "1F3FE" }, // 🏾 Medium-Dark Skin Tone
  { name: "dark", color: "146, 77, 37", code: "1F3FF" }, // 🏿 Dark Skin Tone
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
