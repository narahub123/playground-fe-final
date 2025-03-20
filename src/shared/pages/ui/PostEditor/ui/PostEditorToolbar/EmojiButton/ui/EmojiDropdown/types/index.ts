interface IEmoji {
  char: string;
  name: string;
  skintone?: string[];
}

interface IEmojiData {
  codes: string; // 유니코드 코드 포인트
  char: string; // 실제 이모지 문자
  name: string; // 이모지 이름
  category: string; // 카테고리 (예: Smileys & Emotion)
  group: string; // 그룹 (예: Smileys & Emotion)
  subgroup: string; // 서브 그룹 (예: face-smiling)
  skintone?: string[];
}

type SkintoneType =
  | "default"
  | "light"
  | "mediumLight"
  | "medium"
  | "mediumDark"
  | "dark";

interface ISkinTone {
  name: SkintoneType;
  color: string;
  code: string;
}

interface IEmojiContext {}

export type { IEmoji, IEmojiData, SkintoneType, ISkinTone, IEmojiContext };
