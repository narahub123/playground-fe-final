import { VOTE_OPTION_MAX } from "@shared/@common/constants";
import styles from "./Vote.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { Text } from "@shared/@common/ui/components";
import { joinClassNames } from "@shared/@common/utils";
import { IVoteOptions, VoteOption } from "@shared/pages/ui/PostEditor/ui/Vote";
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
  const {} = useLanguageContent(["components", "Vote"]);

  const [options, setOptions] = useState<IVoteOptions>(initialVoteOptions);

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

  return (
    <div className={classNames}>
      <div className={styles["vote__options"]}>
        {Object.values(options).map((option, index) => (
          <VoteOption
            handleChange={(e) => handleChange(e, index)}
            handleClick={() => handleAddOption(index)}
            option={option}
            index={index}
            key={index}
          />
        ))}
      </div>
      <div className={styles["vote__duration"]}>
        <Text>투표기간</Text>
        <div className={styles["selectors__wrapper"]}>
          <input type="text" style={{ width: "100%" }} />
          <input type="text" style={{ width: "100%" }} />
          <input type="text" style={{ width: "100%" }} />
        </div>
      </div>
      <div className={styles["vote__button"]}>버튼</div>
    </div>
  );
};

export default Vote;
