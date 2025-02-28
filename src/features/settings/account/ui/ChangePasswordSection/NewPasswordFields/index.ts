import InputNewPassword from "../InputNewPassword/InputNewPassword";
import InputPasswordConfirm from "../InputPasswordConfirm/InputPasswordConfirm";
import NewPasswordFieldsContainer from "./NewPasswordFields";

const NewPasswordFields = Object.assign(NewPasswordFieldsContainer, {
  New: InputNewPassword,
  Confirm: InputPasswordConfirm,
});

export default NewPasswordFields;
