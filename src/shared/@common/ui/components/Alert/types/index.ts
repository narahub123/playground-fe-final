type AlertContextType = {
  addAlert: (alert: AlertOptions) => void;
  removeAlert: () => void;
  alert: AlertOptions;
};
type AlertOptions = {
  title?: string;
  description: string;
};

export type { AlertOptions, AlertContextType };
