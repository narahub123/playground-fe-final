const hooks = {
  useInputContext: {
    error: `InputContext가 제공되지 않았습니다.`,
  },
  useLightboxContext: {
    error: `LightboxContext가 제공되지 않았습니다.`,
  },
  useContext: {
    error: (context: string) =>
      `use${context}는 반드시 ${context}Provider 내에서 사용되어야 합니다.`,
  },
  useValidateChildren: {
    error: (childTypeName: string) =>
      `에러: ${childTypeName}는 자식으로 사용할 수 없습니다.`,
  },
  useCreateUserId: {},
  useInternationalAge: {
    yearOld: "살",
    monthOld: "개월",
    dateOld: "일",
    birthDate: "오늘 탄생!!",
  },
  useGenderLabel: {
    male: "남성",
    female: "여성",
    bigender: "양성",
    nonbinary: "중성",
  },
  useAccountInfo: {
    yes: "예",
    no: "아니오",
    birth: {
      year: "년",
      month: "월",
      date: "일",
    },
    profile: "프로필",
    text: "에 생년월일을 추가합니다.",
  },
};

export default hooks;
