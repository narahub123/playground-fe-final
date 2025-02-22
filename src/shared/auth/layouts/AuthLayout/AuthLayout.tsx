import styles from "./AuthLayout.module.css";
import { useDisplaySetup } from "@shared/@common/models/hooks";
import { Outlet } from "react-router";
import { ToastContextProvider } from "@shared/@common/ui/components/Toast/context";
import { AlertContextProvider } from "@shared/@common/ui/components/Alert/context";
import { TextHeader } from "@test/ui/components";

const AuthLayout = () => {
  useDisplaySetup();
  return (
    <ToastContextProvider>
      <AlertContextProvider>
        <TextHeader />
        <div className={styles[`auth-layout`]}>
          <Outlet />
        </div>
      </AlertContextProvider>
    </ToastContextProvider>
  );
};

export default AuthLayout;
