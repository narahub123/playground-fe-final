const hooks = {
  useInputContext: {
    error: `未提供InputContext。`,
  },
  useContext: {
    error: (context: string) => `use${context}必須在${context}Provider內使用。`,
  },
  useValidateChildren: {
    error: (childTypeName: string) =>
      `錯誤: ${childTypeName}不能作為子元素使用。`,
  },
};

export default hooks;
