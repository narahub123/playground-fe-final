import { VOTE_OPTION_MAX } from "@shared/@common/constants";
import styles from "./Vote.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { Text } from "@shared/@common/ui/components";
import { joinClassNames } from "@shared/@common/utils";
import {
  IVoteDuration,
  IVoteOptions,
  SelectVoteDuration,
  VoteOption,
  VoteOptions,
} from "@shared/pages/ui/PostEditor/ui/Vote";
import { useState } from "react";

interface VoteProps {
  className?: string;
}

const initialVoteOptions: IVoteOptions = {
  option0: {
    text: "",
    visible: true,
  },
  option1: {
    text: "",
    visible: true,
  },
  option2: {
    text: "",
    visible: false,
  },
  option3: {
    text: "",
    visible: false,
  },
};

const Vote = ({ className }: VoteProps) => {
  // 언어 설정
  const { voteDuration, label } = useLanguageContent(["components", "Vote"]);

  const [options, setOptions] = useState<IVoteOptions>(initialVoteOptions);

  const initialVoteDuration: IVoteDuration = {
    date: 0,
    hour: 0,
    minute: 0,
  };

  const [duration, setDuration] = useState<IVoteDuration>(initialVoteDuration);

  const [isValid, setIsValid] = useState<{ [key: string]: boolean } | boolean>({
    date: false,
    hour: false,
    minute: false,
  });

  const classNames = joinClassNames([styles["vote"], className]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const value = e.target.value;

    if (value.length > VOTE_OPTION_MAX) return;

    setOptions((prev) => ({
      ...prev,
      [`option${index}`]: {
        ...prev[`option${index}` as keyof IVoteOptions],
        text: value,
      },
    }));
  };

  const handleAddOption = (index: number) => {
    if (index === 1 || index === 2) {
      setOptions((prev) => ({
        ...prev,
        [`option${index + 1}`]: {
          ...prev[`option${index + 1}` as keyof IVoteOptions],
          visible: true,
        },
      }));
    }
  };

  const durationArr = ["date", "hour", "minute"];

  return (
    <div className={classNames}>
      <section className={styles["vote__options"]}>
        {Object.values(options).map((option, index) => (
          <VoteOption
            handleChange={(e) => handleChange(e, index)}
            handleClick={() => handleAddOption(index)}
            option={option}
            index={index}
            key={index}
          />
        ))}
      </section>
      <section className={styles["vote__duration"]}>
        <Text>{voteDuration}</Text>
        <div className={styles["selectors__wrapper"]}>
          {durationArr.map((key) => (
            <SelectVoteDuration
              key={key}
              value={duration[key as keyof typeof duration]}
              setIsValid={setIsValid}
              setFunc={setDuration}
              field={key}
              options={VoteOptions(key)}
              label={label[key]}
            />
          ))}
        </div>
      </section>
      <div className={styles["vote__button"]}>버튼</div>
    </div>
  );
};

export default Vote;
