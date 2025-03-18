interface IVoteOption {
  text: string;
  visible: boolean;
}

interface IVoteOptions {
  option0: IVoteOption;
  option1: IVoteOption;
  option2: IVoteOption;
  option3: IVoteOption;
}

export type { IVoteOption, IVoteOptions };
