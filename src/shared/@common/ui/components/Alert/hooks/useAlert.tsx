import { AlertOptions } from "../types";
import useAlertContext from "./useAlertContext";

const useAlert = () => {
  const alertContext = useAlertContext();

  const alert = ({ title, description }: AlertOptions) => {
    alertContext.addAlert({
      title,
      description,
    });
  };

  return alert;
};

export default useAlert;
