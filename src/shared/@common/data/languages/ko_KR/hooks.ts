const hooks = {
  useInputContext: {
    error: `InputContext가 제공되지 않았습니다.`,
  },
  useValidateChildren: {
    error: (childTypeName: string) =>
      `에러: ${childTypeName}는 자식으로 사용할 수 없습니다.`,
  },
};

export default hooks;
