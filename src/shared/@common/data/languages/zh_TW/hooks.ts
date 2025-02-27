const hooks = {
  useInputContext: {
    error: `未提供InputContext。`,
  },
  useLightboxContext: {
    error: `LightboxContext未提供。`,
  },
  useContext: {
    error: (context: string) => `use${context}必須在${context}Provider內使用。`,
  },
  useValidateChildren: {
    error: (childTypeName: string) =>
      `錯誤: ${childTypeName}不能作為子元素使用。`,
  },
  useGenderLabel: {
    male: "男性",
    female: "女性",
    bigender: "雙性",
    nonbinary: "非二元",
  },
  useInternationalAge: {
    yearOld: "歲",
    monthOld: "個月",
    dateOld: "天",
    birthDate: "今天出生!!",
  },
  useAccountInfo: {
    yes: "是",
    no: "否",
    birth: {
      year: "年",
      month: "月",
      date: "日",
    },
    profile: "個人資料",
    text: "新增出生日期至",
  },
};

export default hooks;
