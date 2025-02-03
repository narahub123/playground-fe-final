import { useState } from "react";
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
}

const useSelect = ({ data, value, updateFunc }: useSelectProps) => {
  const dispatch = useAppDispatch();

  const [isOpen, setIsOpen] = useState(false);

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

  return {
    isOpen,
    handleKeyDown,
    toggleListbox,
    onClose,
    updateValue,
  };
};

export default useSelect;
