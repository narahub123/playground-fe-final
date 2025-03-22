import { useLanguageContent } from "@shared/@common/models/hooks";
import { useContext } from "react";
import { ScheduleContext } from "@shared/pages/ui/PostEditor/ui/PostEditorToolbar/ScheduleButton";

const useScheduleContext = () => {
  const { error } = useLanguageContent(["hooks", "useContext"]);
  const context = useContext(ScheduleContext);

  if (!context) {
    throw new Error(error("useScheduleContext"));
  }
  return context;
};

export default useScheduleContext;
