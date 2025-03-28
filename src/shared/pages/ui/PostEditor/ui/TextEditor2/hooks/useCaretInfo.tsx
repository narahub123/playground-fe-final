import { useEffect, useState } from "react";
import {
  handleSelectionChange,
  ICaretInfo,
} from "@shared/pages/ui/PostEditor/ui/TextEditor";

const useCaretInfo = (): ICaretInfo | undefined => {
  const [caretInfo, setCaretInfo] = useState<ICaretInfo>();

  useEffect(() => {
    document.addEventListener("selectionchange", () =>
      handleSelectionChange(setCaretInfo)
    );

    return () => {
      document.removeEventListener("selectionchange", () =>
        handleSelectionChange(setCaretInfo)
      );
    };
  }, []);

  return caretInfo;
};

export default useCaretInfo;
