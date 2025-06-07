interface IRadioGroupItem {
  text: string;
  value: string;
  expl?: string;
}

interface ITabItem {
  text: string;
  value: string;
  to: string;
}

export type { IRadioGroupItem, ITabItem };
