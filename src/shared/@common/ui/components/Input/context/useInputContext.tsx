import { useContext } from "react";
import InputContext from "./InputContext";

const useInputContext = () => {
  const context = useContext(InputContext);

  if (!context) {
    throw new Error(`InputContext가 제공되지 않았습니다.`);
  }
  return context;
};

export default useInputContext;
