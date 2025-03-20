import {
  EmojiDropdown,
  EmojiSearch,
  EmojiTabs,
  EmojiRecent,
  EmojiList,
  EmojiTab,
  Emoji,
  EmojiListContainer,
  EmojiPreview,
  SkintonePicker,
  SkintoneDot,
} from "./ui";

import { IEmoji, IEmojiData, SkintoneType, ISkinTone } from "./types";

import { useEmojiData } from "./hooks";

import { emojiData, skinTones, defaultEmojiPreviews } from "./data";

import { getEmojiWithSkinTone } from "./utils";

export {
  EmojiDropdown,
  EmojiSearch,
  EmojiTabs,
  EmojiRecent,
  EmojiListContainer,
  EmojiList,
  EmojiTab,
  Emoji,
  EmojiPreview,
  SkintonePicker,
  SkintoneDot,

  // hooks
  useEmojiData,

  // data
  emojiData,
  skinTones,
  defaultEmojiPreviews,

  // utils
  getEmojiWithSkinTone,
};

export type { IEmoji, IEmojiData, SkintoneType, ISkinTone };
