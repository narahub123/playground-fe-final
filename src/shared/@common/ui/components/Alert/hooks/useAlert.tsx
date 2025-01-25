import { AlertOptions } from "../types";
import useAlertContext from "./useAlertContext";

const useAlert = () => {
  const alertContext = useAlertContext();

  const alert = ({ title, description, status = "info" }: AlertOptions) => {
    alertContext.addAlert({
      title,
      description,
      status,
    });
  };

  return alert;
};

export default useAlert;
