import { IPostVoteOption } from "@shared/@common/types";

const calculateTotalVotes = (options: IPostVoteOption[]): number => {
  return options.reduce((total, option) => total + option.voters.length, 0);
};

export default calculateTotalVotes;
