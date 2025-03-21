import { useAppDispatch } from "@app/store";
import { PRIMARY_LINK } from "@shared/@common/constants";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { onParallelModalOpen } from "@shared/@common/models/slices/modalSlice";
import { ToolbarButton } from "@shared/pages/ui/PostEditor/ui/PostEditorToolbar";
import { RiCalendarScheduleLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

interface ReserveButtonProps {
  disabled?: boolean;
}

const ScheduleButton = ({ disabled = false }: ReserveButtonProps) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  // 언어 설정
  const { title } = useLanguageContent(["components", "ScheduleButton"]);

  const handleClick = () => {
    dispatch(onParallelModalOpen("schedule"));
    navigate(PRIMARY_LINK.SCHEDULE_POST);
  };

  return (
    <ToolbarButton onClick={handleClick} title={title} disabled={disabled}>
      <RiCalendarScheduleLine fontSize={"1.25rem"} />
    </ToolbarButton>
  );
};

export default ScheduleButton;
