const hooks = {
  useInputContext: {
    error: `未提供InputContext。`,
  },
  useLightboxContext: {
    error: `LightboxContext未提供。`,
  },

  useContext: {
    error: (context: string) => `use${context}必须在${context}Provider内使用。`,
  },
  useValidateChildren: {
    error: (childTypeName: string) =>
      `错误: ${childTypeName}不能作为子元素使用。`,
  },
  useGenderLabel: {
    male: "男性",
    female: "女性",
    bigender: "双性",
    nonbinary: "非二元",
  },
  useInternationalAge: {
    yearOld: "岁",
    monthOld: "个月",
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
    profile: "个人资料",
    text: "添加出生日期到",
  },
};

export default hooks;
