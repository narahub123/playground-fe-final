import { useAppDispatch } from "@app/store";
import { RiListRadio } from "react-icons/ri";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { ToolbarButton } from "@shared/pages/ui/PostEditor/ui/PostEditorToolbar";
import { postEditorToolbarButtonOn } from "@shared/pages/ui/PostEditor/models/slices";

interface VoteButtonProps {
  disabled?: boolean;
}

const VoteButton = ({ disabled = false }: VoteButtonProps) => {
  const dispatch = useAppDispatch();
  // 언어 설정
  const { title } = useLanguageContent(["components", "VoteButton"]);

  const handleClick = () => {
    dispatch(postEditorToolbarButtonOn("vote"));
  };
  return (
    <ToolbarButton onClick={handleClick} title={title} disabled={disabled}>
      <RiListRadio fontSize={"1.25rem"} />
    </ToolbarButton>
  );
};

export default VoteButton;
