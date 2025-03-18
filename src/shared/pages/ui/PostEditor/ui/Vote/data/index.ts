const VoteOptions = (field: string) => {
  const length: number = field === "date" ? 8 : field === "hour" ? 24 : 60;

  return Array.from({ length }).map((_, index) => ({
    text: index.toString(),
    value: index,
  }));
};

export { VoteOptions };
