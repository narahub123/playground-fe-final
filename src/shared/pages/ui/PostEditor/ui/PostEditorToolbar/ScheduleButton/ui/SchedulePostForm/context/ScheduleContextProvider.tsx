import { ReactNode } from "react";
import {
  IScheduleContext,
  ScheduleContext,
} from "@shared/pages/ui/PostEditor/ui/PostEditorToolbar/ScheduleButton";

interface ScheduleContextProviderProps {
  children: ReactNode;
  value: IScheduleContext;
}

const ScheduleContextProvider = ({
  children,
  value,
}: ScheduleContextProviderProps) => {
  return (
    <ScheduleContext.Provider value={value}>
      {children}
    </ScheduleContext.Provider>
  );
};

export default ScheduleContextProvider;
