import { ReactNode } from "react";
import { ICalendarDropdown } from "../types";
import { CalendarDropdownContext } from "@shared/pages/ui/PostEditor/ui/PostEditorToolbar/ScheduleButton";

interface CalendarDropdownContextProviderProps {
  children: ReactNode;
  value: ICalendarDropdown;
}

const CalendarDropdownContextProvider = ({
  children,
  value,
}: CalendarDropdownContextProviderProps) => {
  return (
    <CalendarDropdownContext.Provider value={value}>
      {children}
    </CalendarDropdownContext.Provider>
  );
};

export default CalendarDropdownContextProvider;
