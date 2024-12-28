import { Icon } from "@shared/@common/ui/components/";
import { useInputActionIconProps } from "../../hooks";

interface InputActionIconProps {}

const InputActionIcon = ({}: InputActionIconProps) => {
  const { iconName, iconTitle, handleClick, subClassName } =
    useInputActionIconProps();

  // iconName이 undefined인 경우 표시 안하기
  if (!iconName) return null;

  return (
    <Icon
      iconName={iconName}
      iconTitle={iconTitle}
      onClick={handleClick}
      subClassName={subClassName}
    />
  );
};

export default InputActionIcon;
