import AlertContent from "./ui/AlertContent/AlertContent";
import AlertDescription from "./ui/AlertDescription/AlertDescription";
import AlertIndicator from "./ui/AlertIndicator/AlertIndicator";
import AlertRoot from "./ui/AlertRoot/AlertRoot";
import AlertTitle from "./ui/AlertTitle/AlertTitle";

const Alert = Object.assign(AlertRoot, {
  Indicator: AlertIndicator,
  Content: AlertContent,
  Title: AlertTitle,
  Description: AlertDescription,
});

export default Alert;
