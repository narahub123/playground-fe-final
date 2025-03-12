const isPlainSegment = (node: Node | HTMLElement): boolean => {
  return Boolean(
    node.nodeName === "SPAN" && (node as HTMLElement).dataset["offset"]
  );
};

const isInlineSegment = (node: Node | HTMLElement): boolean => {
  return Boolean(
    node.nodeName === "SPAN" && !(node as HTMLElement).dataset["offset"]
  );
};

export { isPlainSegment, isInlineSegment };
