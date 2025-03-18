import { VOTE_OPTION_MAX } from "@shared/@common/constants";
import styles from "./Vote.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { Button, Text } from "@shared/@common/ui/components";
import { joinClassNames } from "@shared/@common/utils";
import {
  IVoteDuration,
  IVoteOptions,
  SelectVoteDuration,
  VoteOption,
  VoteOptions,
} from "@shared/pages/ui/PostEditor/ui/Vote";
import { useEffect, useState } from "react";
import { useAppDispatch } from "@app/store";
import { postEditorToolbarButtonOff } from "@shared/pages/ui/PostEditor/models/slices";
import { IVote } from "@shared/pages/ui/PostEditor/types";
import { setPostEditorVote } from "@shared/pages/ui/PostEditor/models/slices/postEditorSlice";

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
  const dispatch = useAppDispatch();
  // 언어 설정
  const { voteDuration, label, deleteBtn } = useLanguageContent([
    "components",
    "Vote",
  ]);

  const [options, setOptions] = useState<IVoteOptions>(initialVoteOptions);

  const initialVoteDuration: IVoteDuration = {
    date: 0,
    hour: 0,
    minute: 0,
  };

  const [duration, setDuration] = useState<IVoteDuration>(initialVoteDuration);

  const [isValid, setIsValid] = useState<{ [key: string]: boolean } | boolean>(
    {}
  );

  useEffect(() => {
    // 유효성 검사
    const validArray = Object.values(isValid);

    // 모든 유효성이 true이고 유효성 검사를 5 필드 이상 한 경우
    const isAllValid = validArray.every(Boolean) && validArray.length >= 5;

    // 값 검사
    const durationArray = Object.values(duration);
    // 하나 이상의 값이 0보다 크면 통과
    const isValueValid = durationArray.some((d) => d > 0);

    // 통과한 경우 postEditorSlice에 저장 통과하지 못한 경우 삭제
    const canSave = isAllValid && isValueValid;

    if (canSave) {
      const newVote: IVote = {
        options: Object.values(options)
          .filter((option) => option.text !== "")
          .map((o) => o.text),
        duration,
      };

      dispatch(setPostEditorVote(newVote));
    } else {
      const initialVote: IVote = {
        options: [],
        duration: null,
      };

      dispatch(setPostEditorVote(initialVote));
    }
    console.log(canSave);
  }, [isValid, options, duration]);

  const classNames = joinClassNames([styles["vote"], className]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const value = e.target.value;

    if (value.length > VOTE_OPTION_MAX) return;

    // 값 추가
    setOptions((prev) => ({
      ...prev,
      [`option${index}`]: {
        ...prev[`option${index}` as keyof IVoteOptions],
        text: value,
      },
    }));

    // 유효성 추가
    setIsValid((prev) => {
      const boolean = Boolean(value);

      if (typeof prev === "object") {
        if (prev[`option${index}` as keyof typeof prev] !== boolean) {
          return {
            ...prev,
            [`option${index}`]: boolean,
          };
        } else return prev;
      } else {
        if (prev !== boolean) return boolean;
        else return prev;
      }
    });
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

  const handleDeleteVote = () => {
    // 값 초기화
    setOptions(initialVoteOptions);
    setDuration(initialVoteDuration);
    setIsValid({});

    // toolbar에서 vote를 false로
    dispatch(postEditorToolbarButtonOff("vote"));

    // 투표 데이터 삭제
    const initialVote: IVote = {
      options: [],
      duration: null,
    };

    dispatch(setPostEditorVote(initialVote));
  };

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
      <div className={styles["vote__button__wrapper"]}>
        <Button
          onClick={handleDeleteVote}
          isValid
          variant="ghost"
          className={styles["vote__button"]}
        >
          {deleteBtn}
        </Button>
      </div>
    </div>
  );
};

export default Vote;
