import { useState } from "react";
import { useAppDispatch } from "@app/store";

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
    }
  };

  const handleMouseDown = () => {
    setIsOpen(!isOpen);
  };

  const onClose = () => {
    setIsOpen(false);
  };

  const handleOnMouseDown = (
    e: React.MouseEvent<HTMLLIElement>,
    value: string
  ) => {
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
    handleMouseDown,
    onClose,
    handleOnMouseDown,
  };
};

export default useSelect;
