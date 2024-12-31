const hooks = {
  useInputContext: {
    error: `InputContextが提供されていません。`,
  },
  useValidateChildren: {
    error: (childTypeName: string) =>
      `エラー: ${childTypeName}は子として使用できません。`,
  },
};

export default hooks;
