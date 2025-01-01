const hooks = {
  useInputContext: {
    error: `InputContextが提供されていません。`,
  },
  useContext: {
    error: (context: string) =>
      `use${context}は必ず${context}Provider内で使用する必要があります。`,
  },
  useValidateChildren: {
    error: (childTypeName: string) =>
      `エラー: ${childTypeName}は子として使用できません。`,
  },
};

export default hooks;
