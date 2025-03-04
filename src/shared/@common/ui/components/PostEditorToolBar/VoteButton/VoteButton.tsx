import { useLanguageContent } from "@shared/@common/models/hooks";
import ToolbarButton from "../ToolbarButton/ToolbarButton";
import { RiListRadio } from "react-icons/ri";

interface VoteButtonProps {}

const VoteButton = ({}: VoteButtonProps) => {
  // 언어 설정
  const { title } = useLanguageContent(["components", "VoteButton"]);

  return (
    <ToolbarButton onClick={() => {}} title={title}>
      <RiListRadio fontSize={"1.25rem"} />
    </ToolbarButton>
  );
};

export default VoteButton;
