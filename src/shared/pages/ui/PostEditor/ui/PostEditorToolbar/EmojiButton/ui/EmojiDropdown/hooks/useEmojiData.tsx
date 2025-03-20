import { useEffect, useState } from "react";
import {
  IEmojiData,
  IEmoji,
  emojiData,
} from "@shared/pages/ui/PostEditor/ui/PostEditorToolbar/EmojiButton";

const useEmojiData = () => {
  const [emojiArr, setEmojiArr] = useState<IEmoji[][]>([]);
  useEffect(() => {
    const smileys__people: IEmojiData[] = [];
    const animals_nature: IEmoji[] = [];
    const food_drink: IEmoji[] = [];
    const travel_places: IEmoji[] = [];
    const activities: IEmoji[] = [];
    const objects: IEmoji[] = [];
    const symbols: IEmoji[] = [];
    const flags: IEmoji[] = [];

    const checkSkinTone = (emoji: IEmojiData) => {
      const splitCode = emoji.codes.split(" ");

      if (splitCode.length > 2) return;

      if (splitCode.length === 2) {
        const baseEmojiCode = splitCode[0];

        const baseEmoji = smileys__people.find(
          (emoji) => emoji.codes === baseEmojiCode
        );

        if (!baseEmoji) return;

        if (!baseEmoji.skintone) {
          baseEmoji.skintone = [];
        }

        if (emoji.codes.includes("1F3FB")) {
          console.log("light");

          baseEmoji.skintone[0] = emoji.char;

          return;
        } else if (emoji.codes.includes("1F3FC")) {
          console.log("mediumLight");

          baseEmoji.skintone[1] = emoji.char;

          return;
        } else if (emoji.codes.includes("1F3FD")) {
          console.log("medium");

          baseEmoji.skintone[2] = emoji.char;

          return;
        } else if (emoji.codes.includes("1F3FE")) {
          console.log("mediumDark");

          baseEmoji.skintone[3] = emoji.char;

          return;
        } else if (emoji.codes.includes("1F3FF")) {
          console.log("dark");

          baseEmoji.skintone[4] = emoji.char;

          return;
        }
      }

      smileys__people.push(emoji);
    };

    // IEmojiData를 IEmoji로 변경
    const filtering = (emoji: IEmojiData): IEmoji => {
      const { char, name, skintone } = emoji;

      return { char, name, skintone };
    };

    emojiData.forEach((emoji) => {
      if (emoji.codes.includes("FE0F")) return;
      if (
        emoji.category.includes("Smileys") ||
        emoji.category.includes("People")
      ) {
        checkSkinTone(emoji);
      } else if (emoji.category.includes("Animals")) {
        animals_nature.push(filtering(emoji));
      } else if (emoji.category.includes("Food")) {
        food_drink.push(filtering(emoji));
      } else if (emoji.category.includes("Travel")) {
        travel_places.push(filtering(emoji));
      } else if (emoji.category.includes("Activities")) {
        activities.push(filtering(emoji));
      } else if (emoji.category.includes("Objects")) {
        objects.push(filtering(emoji));
      } else if (emoji.category.includes("Symbols")) {
        symbols.push(filtering(emoji));
      } else if (emoji.category.includes("Flags")) {
        flags.push(filtering(emoji));
      }
    });

    console.log(
      smileys__people.length +
        animals_nature.length +
        food_drink.length +
        travel_places.length +
        activities.length +
        objects.length +
        symbols.length +
        flags.length
    );

    const modifedSmileysPeople = smileys__people.map((emoji) =>
      filtering(emoji)
    );

    setEmojiArr([
      modifedSmileysPeople,
      animals_nature,
      food_drink,
      travel_places,
      activities,
      objects,
      symbols,
      flags,
    ]);
  }, []);

  console.log(emojiArr);
  return emojiArr;
};

export default useEmojiData;
