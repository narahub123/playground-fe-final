import { Icon } from "@shared/@common/ui/components/";
import { useInputActionIconProps } from "../../hooks";

interface InputActionIconProps {}

const InputActionIcon = ({}: InputActionIconProps) => {
  const { iconName, iconTitle, handleClick, subClassName } =
    useInputActionIconProps();

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
