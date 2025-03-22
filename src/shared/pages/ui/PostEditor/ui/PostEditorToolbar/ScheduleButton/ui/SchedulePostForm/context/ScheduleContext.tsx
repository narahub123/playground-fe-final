import { createContext } from "react";
import { IScheduleContext } from "@shared/pages/ui/PostEditor/ui/PostEditorToolbar/ScheduleButton";

const ScheduleContext = createContext<IScheduleContext | null>(null);

export default ScheduleContext;
