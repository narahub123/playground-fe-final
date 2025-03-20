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

import {
  IEmoji,
  IEmojiData,
  SkintoneType,
  ISkinTone,
  IEmojiContext,
} from "./types";

import { useEmojiData, useEmojiContext } from "./hooks";

import { emojiData, skinTones, defaultEmojiPreviews } from "./data";

import { getEmojiWithSkinTone } from "./utils";
import { EmojiContext, EmojiContextProvider } from "./context";

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
  useEmojiContext,

  // data
  emojiData,
  skinTones,
  defaultEmojiPreviews,

  // utils
  getEmojiWithSkinTone,

  // context
  EmojiContext,
  EmojiContextProvider,
};

export type { IEmoji, IEmojiData, SkintoneType, ISkinTone, IEmojiContext };
