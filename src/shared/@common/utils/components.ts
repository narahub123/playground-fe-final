const joinClassNames = (classNames: (string | undefined)[]) => {
  return classNames.filter(Boolean).join(" ");
};

export { joinClassNames };
