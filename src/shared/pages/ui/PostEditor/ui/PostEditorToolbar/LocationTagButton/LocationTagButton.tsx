import { useLanguageContent } from "@shared/@common/models/hooks";
import ToolbarButton from "../ToolbarButton/ToolbarButton";
import { TfiLocationPin } from "react-icons/tfi";

interface LocationTagButtonProps {
  disabled?: boolean;
}

const LocationTagButton = ({ disabled }: LocationTagButtonProps) => {
  // 언어 설정
  const { title } = useLanguageContent(["components", "LocationTagButton"]);

  return (
    <ToolbarButton disabled={disabled} onClick={() => {}} title={title}>
      <TfiLocationPin fontSize={"1.25rem"} />
    </ToolbarButton>
  );
};

export default LocationTagButton;
