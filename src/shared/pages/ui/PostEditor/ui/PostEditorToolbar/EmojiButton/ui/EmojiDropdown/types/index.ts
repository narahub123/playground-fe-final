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

interface IEmojiContext {
  curTab: number;
  setCurTab: React.Dispatch<React.SetStateAction<number>>;
  keyword: string;
  setKeyword: React.Dispatch<React.SetStateAction<string>>;
  curEmoji: IEmoji | null;
  setCurEmoji: React.Dispatch<React.SetStateAction<IEmoji | null>>;
  curSkinTone: ISkinTone;
  setCurSkinTon: React.Dispatch<React.SetStateAction<ISkinTone>>;
  headersRefs: React.MutableRefObject<(HTMLDivElement | null)[]>;
  tabs: IEmoji[];
}

export type { IEmoji, IEmojiData, SkintoneType, ISkinTone, IEmojiContext };
