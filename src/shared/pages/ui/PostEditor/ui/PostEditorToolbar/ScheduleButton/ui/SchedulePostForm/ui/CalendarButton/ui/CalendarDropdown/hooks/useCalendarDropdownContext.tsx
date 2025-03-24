import { useLanguageContent } from "@shared/@common/models/hooks";
import { useContext } from "react";
import { CalendarDropdownContext } from "@shared/pages/ui/PostEditor/ui/PostEditorToolbar/ScheduleButton";

const useCalendarDropdownContext = () => {
  // 언어 설정
  const { error } = useLanguageContent(["hooks", "useContext"]);

  const context = useContext(CalendarDropdownContext);

  if (!context) {
    throw new Error(error("CalendarDropdownContext"));
  }

  return context;
};

export default useCalendarDropdownContext;
