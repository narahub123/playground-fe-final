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
};

export default hooks;
