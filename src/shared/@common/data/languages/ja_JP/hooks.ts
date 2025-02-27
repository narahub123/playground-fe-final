const hooks = {
  useInputContext: {
    error: `InputContextが提供されていません。`,
  },
  useLightboxContext: {
    error: `LightboxContextが提供されていません。`,
  },
  useContext: {
    error: (context: string) =>
      `use${context}は必ず${context}Provider内で使用する必要があります。`,
  },
  useValidateChildren: {
    error: (childTypeName: string) =>
      `エラー: ${childTypeName}は子として使用できません。`,
  },
  useGenderLabel: {
    male: "男性",
    female: "女性",
    bigender: "両性",
    nonbinary: "ノンバイナリー",
  },
  useInternationalAge: {
    yearOld: "歳",
    monthOld: "か月",
    dateOld: "日",
    birthDate: "今日誕生!!",
  },
  useAccountInfo: {
    yes: "はい",
    no: "いいえ",
    birth: {
      year: "年",
      month: "月",
      date: "日",
    },
    profile: "プロフィール",
    text: "に生年月日を追加します。",
  },
};

export default hooks;
