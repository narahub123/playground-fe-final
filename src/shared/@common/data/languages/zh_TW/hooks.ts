const hooks = {
  useInputContext: {
    error: `未提供InputContext。`,
  },
  useValidateChildren: {
    error: (childTypeName: string) =>
      `錯誤: ${childTypeName}不能作為子元素使用。`,
  },
};

export default hooks;
