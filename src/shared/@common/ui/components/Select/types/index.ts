type SelectOptionType = {
  value: string;
  text: string;
};
type SelectContextType = {
  field: string;
  selectRef: React.RefObject<HTMLDivElement>;
  numberOfOptions: number;
};

export type { SelectContextType, SelectOptionType };
