const hooks = {
  useInputContext: {
    error: `InputContext is not provided.`,
  },
  useValidateChildren: {
    error: (childTypeName: string) =>
      `Error: ${childTypeName} cannot be used as a child.`,
  },
};

export default hooks;
