import { createContext } from "react";
import { ICalendarDropdown } from "@shared/pages/ui/PostEditor/ui/PostEditorToolbar/ScheduleButton";

const CalendarDropdownContext = createContext<ICalendarDropdown | null>(null);

export default CalendarDropdownContext;
