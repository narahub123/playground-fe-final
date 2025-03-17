import { useLanguageContent } from "@shared/@common/models/hooks";
import ToolbarButton from "../ToolbarButton/ToolbarButton";
import { RiImage2Line } from "react-icons/ri";

interface ImageButtonProps {}

const MediaButton = ({}: ImageButtonProps) => {
  // 언어 설정
  const { title } = useLanguageContent(["components", "MediaButton"]);

  

  return (
    <ToolbarButton onClick={() => {}} title={title}>
      <RiImage2Line fontSize={"1.25rem"} />
    </ToolbarButton>
  );
};

export default MediaButton;
