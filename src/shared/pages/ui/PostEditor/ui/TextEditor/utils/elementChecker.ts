const isInlineSegment = (elem: Node | HTMLElement) => {
  return (elem as HTMLElement).className.includes("inline");
};

const isSegment = (elem: Node | HTMLElement) => {
  const wrapperElem = elem.parentElement!;

  return (
    (elem as HTMLElement).className.includes("segment") &&
    !(wrapperElem as HTMLElement).className.includes("inline")
  );
};

const isLine = (elem: Node | HTMLElement) => {
  return (
    (elem as HTMLElement).className.includes("line") &&
    !(elem as HTMLElement).className.includes("inline")
  );
};

export { isInlineSegment, isSegment, isLine };
