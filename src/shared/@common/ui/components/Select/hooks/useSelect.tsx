import styles from "@shared/@common/ui/components/Select/ui/SelectOption/SelectOption.module.css";
import { useEffect, useState } from "react";
import { useAppDispatch } from "@app/store";
import { SELECT_LISTBOX_SCROLL_STEP } from "@shared/@common/constants";

interface useSelectProps {
  value: string;
  data: {
    text: string;
    value: string;
  }[];
  updateFunc:
    | ((value: any) => { type: string; payload: any })
    | React.Dispatch<React.SetStateAction<string>>;
  setIsValid: React.Dispatch<
    React.SetStateAction<
      | {
          [key: string]: boolean; // 각 필드에 대한 유효성 상태를 업데이트하는 함수입니다. 필드 이름을 키로 하고, boolean 값을 업데이트합니다.
        }
      | boolean // 전체 유효성 상태를 업데이트하는 함수입니다. 모든 입력 필드에 대한 유효성 상태를 한 번에 업데이트할 수 있습니다.
    >
  >; // `isValid`의 값을 업데이트하는 함수입니다. 객체일 경우, 각 필드의 유효성 상태를 개별적으로 업데이트하거나, boolean 값일 경우 전체 유효성 상태를 한 번에 업데이트할 수 있습니다.
  field: string;
}

const useSelect = ({
  data,
  value,
  updateFunc,
  setIsValid,
  field,
}: useSelectProps) => {
  const dispatch = useAppDispatch();

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (value === "") {
      setIsValid((prev) => {
        // typeof null도 "object"로 나오기 때문에, null을 체크하는 조건을 추가하여 예기치 않은 상황을 방지
        if (typeof prev === "object" && prev !== null) {
          // 기존 값과 동일한지 확인 후 값이 다르면 업데이트
          if (prev[field] !== false) {
            return { ...prev, [field]: false };
          }
          return prev; // 값이 같으면 기존 객체 그대로 반환
        }
        // 객체가 아니면 false로 설정
        return false;
      });
    } else {
      setIsValid((prev) => {
        // typeof null도 "object"로 나오기 때문에, null을 체크하는 조건을 추가하여 예기치 않은 상황을 방지
        if (typeof prev === "object" && prev !== null) {
          // 기존 값과 동일한지 확인 후 값이 다르면 업데이트
          if (prev[field] !== true) {
            return { ...prev, [field]: true };
          }
          return prev; // 값이 같으면 기존 객체 그대로 반환
        }
        // 객체가 아니면 true 설정
        return true;
      });
    }
  }, [value]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const index = data.findIndex((item) => item.value === value);

    if (e.key === "ArrowDown") {
      e.preventDefault();
      const nextIndex = index + 1 > data.length - 1 ? 0 : index + 1;

      const update = updateFunc(data[nextIndex].value);
      if (
        typeof update === "object" &&
        "type" in update &&
        "payload" in update
      ) {
        dispatch(update);
      } else {
        updateFunc(data[nextIndex].value);
      }
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      const prevIndex = index - 1 < 0 ? data.length - 1 : index - 1;

      const update = updateFunc(data[prevIndex].value);
      if (
        typeof update === "object" &&
        "type" in update &&
        "payload" in update
      ) {
        dispatch(update);
      } else {
        updateFunc(data[prevIndex].value);
      }
    } else if (e.key === "Enter") {
      setIsOpen(!isOpen);
    } else if (e.key === "Escape") {
      setIsOpen(false);
    } else if (e.key === "PageUp") {
      e.preventDefault();
      const prevIndex =
        index - SELECT_LISTBOX_SCROLL_STEP < 0
          ? 0
          : index - SELECT_LISTBOX_SCROLL_STEP;

      const update = updateFunc(data[prevIndex].value);
      if (
        typeof update === "object" &&
        "type" in update &&
        "payload" in update
      ) {
        dispatch(update);
      } else {
        updateFunc(data[prevIndex].value);
      }
    } else if (e.key === "PageDown") {
      e.preventDefault();
      const nextIndex =
        index + SELECT_LISTBOX_SCROLL_STEP > data.length - 1
          ? data.length - 1
          : index + SELECT_LISTBOX_SCROLL_STEP;

      const update = updateFunc(data[nextIndex].value);
      if (
        typeof update === "object" &&
        "type" in update &&
        "payload" in update
      ) {
        dispatch(update);
      } else {
        updateFunc(data[nextIndex].value);
      }
    }
  };

  const toggleListbox = () => {
    setIsOpen(!isOpen);
  };

  const onClose = () => {
    setIsOpen(false);
  };

  const updateValue = (e: React.MouseEvent<HTMLLIElement>, value: string) => {
    e.preventDefault();
    const update = updateFunc(value);
    if (typeof update === "object" && "type" in update && "payload" in update) {
      dispatch(update);
    } else {
      updateFunc(value);
    }

    setIsOpen(false);
  };

  const optionSelected = styles[`select__option--selected`];

  return {
    isOpen,
    handleKeyDown,
    toggleListbox,
    onClose,
    updateValue,
    optionSelected,
  };
};

export default useSelect;
