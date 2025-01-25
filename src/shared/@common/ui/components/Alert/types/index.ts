type AlertContextType = {
  addAlert: (alert: AlertOptions) => void;
  removeAlert: () => void;
  alert: AlertOptions;
};

type AlertStatus = "error" | "success" | "warning" | "info";

type AlertOptions = {
  title?: string;
  description: string;
  status?: AlertStatus;
};

export type { AlertOptions, AlertContextType, AlertStatus };
