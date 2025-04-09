import { IVote } from "../types";
import convertDurationToDate from "./convertDurationToDate";

const convertVoteFormat = (vote: IVote) => {
  const { options, duration } = vote;
  if (!duration || options.length < 2) return undefined;

  const newDuration = convertDurationToDate(duration);

  return {
    options,
    duration: newDuration,
  };
};

export default convertVoteFormat;
