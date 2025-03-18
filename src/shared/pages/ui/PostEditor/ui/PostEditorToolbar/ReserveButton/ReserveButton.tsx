import { useLanguageContent } from "@shared/@common/models/hooks";
import ToolbarButton from "../ToolbarButton/ToolbarButton";
import { RiCalendarScheduleLine } from "react-icons/ri";

interface ReserveButtonProps {
  disabled?: boolean;
}

const ReserveButton = ({ disabled = false }: ReserveButtonProps) => {
  // 언어 설정
  const { title } = useLanguageContent(["components", "ReserveButton"]);

  return (
    <ToolbarButton onClick={() => {}} title={title} disabled={disabled}>
      <RiCalendarScheduleLine fontSize={"1.25rem"} />
    </ToolbarButton>
  );
};

export default ReserveButton;
