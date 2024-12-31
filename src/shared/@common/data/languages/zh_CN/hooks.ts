const hooks = {
  useInputContext: {
    error: `未提供InputContext。`,
  },
  useValidateChildren: {
    error: (childTypeName: string) =>
      `错误: ${childTypeName}不能作为子元素使用。`,
  },
};

export default hooks;
