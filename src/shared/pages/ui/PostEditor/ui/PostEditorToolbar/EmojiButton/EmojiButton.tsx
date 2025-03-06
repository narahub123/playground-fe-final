import { useLanguageContent } from "@shared/@common/models/hooks";
import ToolbarButton from "../ToolbarButton/ToolbarButton";
import { RiUserSmileLine } from "react-icons/ri";

interface EmojiButtonProps {}

const EmojiButton = ({}: EmojiButtonProps) => {
  // 언어 설정
  const { title } = useLanguageContent(["components", "EmojiButton"]);

  return (
    <ToolbarButton onClick={() => {}} title={title}>
      <RiUserSmileLine fontSize={"1.25rem"} />
    </ToolbarButton>
  );
};

export default EmojiButton;
