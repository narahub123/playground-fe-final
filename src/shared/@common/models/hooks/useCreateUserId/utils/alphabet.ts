const isAlphabet = (char: string) => {
  return /^[a-zA-Z]$/.test(char);
};

export { isAlphabet };
