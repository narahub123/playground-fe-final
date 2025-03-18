import { useLanguageContent } from "@shared/@common/models/hooks";
import ToolbarButton from "../ToolbarButton/ToolbarButton";
import { RiListRadio } from "react-icons/ri";

interface VoteButtonProps {
  disabled?: boolean;
}

const VoteButton = ({ disabled = false }: VoteButtonProps) => {
  // 언어 설정
  const { title } = useLanguageContent(["components", "VoteButton"]);

  return (
    <ToolbarButton onClick={() => {}} title={title} disabled={disabled}>
      <RiListRadio fontSize={"1.25rem"} />
    </ToolbarButton>
  );
};

export default VoteButton;
