import styles from "./LogoutPage.module.css";
import { joinClassNames } from "@shared/@common/utils";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { getStandAloneModal } from "@shared/@common/models/selectors";
import { useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch } from "@app/store";
import {
  onStandAlonClose,
  onStandAlonOpen,
} from "@shared/@common/models/slices/modalSlice";
import { LogoutModal } from "@features/auth-logout/ui";

interface LogoutPageProps {
  className?: string;
}

const LogoutPage = ({ className }: LogoutPageProps) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const classNames = joinClassNames([styles["logout__page"], className]);
  const onClose = () => {
    dispatch(onStandAlonClose("logout"));
    navigate(-1);
  };

  const isOpen = useSelector(getStandAloneModal("logout"));

  useEffect(() => {
    if (pathname.includes("logout")) {
      dispatch(onStandAlonOpen("logout"));
    }
  }, [isOpen]);

  return (
    <div className={classNames}>
      <LogoutModal onClose={onClose} />
    </div>
  );
};

export default LogoutPage;
