const isAlphabetOrBlank = (char: string) => {
  return char === " " || /^[a-zA-Z]$/.test(char);
};

export { isAlphabetOrBlank };
