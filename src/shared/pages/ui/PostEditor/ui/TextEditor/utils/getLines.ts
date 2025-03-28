const getLines = (target: HTMLDivElement): string[] => {
  console.log("----------------- getLines 시작 -----------------------");

  const lines = Array.from(target.children).map(
    (child) => (child as HTMLElement).innerText
  );

  console.log("----------------- getLines 종료 -----------------------");
  return lines;
};

export default getLines;
