import {
  IEmoji,
  SkintoneType,
} from "@shared/pages/ui/PostEditor/ui/PostEditorToolbar/EmojiButton";

const getEmojiWithSkinTone = (emoji: IEmoji, curSkinTone: SkintoneType) => {
  const selectedEmoji =
    !emoji.skintone || curSkinTone === "default"
      ? emoji.char
      : curSkinTone === "light"
      ? emoji.skintone[0]
      : curSkinTone === "mediumLight"
      ? emoji.skintone[1]
      : curSkinTone === "medium"
      ? emoji.skintone[2]
      : curSkinTone === "mediumDark"
      ? emoji.skintone[3]
      : emoji.skintone[4];

  return selectedEmoji;
};

export { getEmojiWithSkinTone };
