const hooks = {
  useInputContext: {
    error: `InputContext is not provided.`,
  },
  useLightboxContext: {
    error: `LightboxContext was not provided.`,
  },
  useContext: {
    error: (context: string) =>
      `use${context} must be used within the ${context}Provider.`,
  },
  useValidateChildren: {
    error: (childTypeName: string) =>
      `Error: ${childTypeName} cannot be used as a child.`,
  },
};

export default hooks;
