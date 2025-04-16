const formatVideoTime = (time: number): string => {
  let target = Math.ceil(time);

  const secs = target % 60;

  const mins = Math.floor((target % 3600) / 60);

  const hours = Math.floor(target / 3600);

  return `${hours > 0 ? hours + ":" : ""}${mins}:${secs
    .toString()
    .padStart(2, "0")}`;
};

export default formatVideoTime;
