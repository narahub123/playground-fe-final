import ConfirmMain from "./ConfirmMain/ConfirmMain";
import ConfirmContainer from "./ConfirmContainer/ConfirmContainer";
import ConfirmTitle from "./ConfirmTitle/ConfirmTitle";
import ConfirmDescription from "./ConfirmDescription/ConfirmDescription";
import ConfirmButton from "./ConfirmButton/ConfirmButton";

const Confirm = Object.assign(ConfirmMain, {
  Container: ConfirmContainer,
  Title: ConfirmTitle,
  Description: ConfirmDescription,
  Button: ConfirmButton,
});

export default Confirm;
