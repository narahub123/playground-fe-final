import { useAppDispatch } from "@app/store";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { onParallelModalOpen } from "@shared/@common/models/slices/modalSlice";
import { ToolbarButton } from "@shared/pages/ui/PostEditor/ui/PostEditorToolbar";
import { RiCalendarScheduleLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

interface ReserveButtonProps {
  disabled?: boolean;
}

const ReserveButton = ({ disabled = false }: ReserveButtonProps) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  // 언어 설정
  const { title } = useLanguageContent(["components", "ReserveButton"]);

  const handleClick = () => {
    dispatch(onParallelModalOpen("schedule"));
    navigate("/compose/post/schedule");
  };

  return (
    <ToolbarButton onClick={handleClick} title={title} disabled={disabled}>
      <RiCalendarScheduleLine fontSize={"1.25rem"} />
    </ToolbarButton>
  );
};

export default ReserveButton;
