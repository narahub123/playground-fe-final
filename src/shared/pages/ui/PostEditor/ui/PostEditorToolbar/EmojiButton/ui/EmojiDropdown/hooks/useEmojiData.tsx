import { useEffect, useState } from "react";
import {
  IEmojiData,
  IEmoji,
  emojiData,
} from "@shared/pages/ui/PostEditor/ui/PostEditorToolbar/EmojiButton";

const useEmojiData = () => {
  const [emojiArr, setEmojiArr] = useState<IEmoji[][]>([]);
  useEffect(() => {
    const smileys__people: IEmoji[] = [];
    const animals_nature: IEmoji[] = [];
    const food_drink: IEmoji[] = [];
    const travel_places: IEmoji[] = [];
    const activities: IEmoji[] = [];
    const objects: IEmoji[] = [];
    const symbols: IEmoji[] = [];
    const flags: IEmoji[] = [];

    console.log(emojiData.map((emoji) => emoji.char));

    const filtering = (emoji: IEmojiData) => {
      const { char, name } = emoji;
      return { char, name };
    };

    emojiData.forEach((emoji) => {
      if (
        emoji.category.includes("Smileys") ||
        emoji.category.includes("People")
      ) {
        smileys__people.push(filtering(emoji));
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

    setEmojiArr([
      smileys__people,
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
