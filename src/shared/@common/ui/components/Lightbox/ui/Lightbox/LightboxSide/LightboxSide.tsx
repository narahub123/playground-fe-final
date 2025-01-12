import styles from "./LightboxSide.module.css";
import { ReactNode } from "react";
import { joinClassNames } from "@shared/@common/utils";
import { useLightboxContext } from "../../../hooks";

interface LightboxSideProps {
  children: ReactNode;
  className?: string;
}

const LightboxSide = ({ children, className }: LightboxSideProps) => {
  const { isLightboxPostOpen } = useLightboxContext();

  if (isLightboxPostOpen === undefined) return null;

  const classNames = joinClassNames([
    styles["lightbox__side"],
    isLightboxPostOpen
      ? styles["lightbox__side--open"]
      : styles["lightbox__side--close"],
    className,
  ]);

  return <div className={classNames}>{children}</div>;
};

export default LightboxSide;
