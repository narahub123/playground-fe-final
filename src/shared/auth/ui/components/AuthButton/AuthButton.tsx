import styles from "./AuthButton.module.css";
import { Text } from "@shared/@common/ui/components";
import { Link } from "react-router-dom";
import { useAppDispatch } from "@app/store";
import { useCallback } from "react";
import { AuthButtonItemType } from "@shared/auth/types";

interface AuthButtonProps {
  item: AuthButtonItemType;
  handleClick?: () => void;
  subClassName?: string;
}

const AuthButton = ({ item, handleClick, subClassName }: AuthButtonProps) => {
  const dispatch = useAppDispatch();

  const { text, path, img, reducer, colorTheme } = item;

  // 클릭 이벤트 핸들러
  const clickHandler = useCallback(() => {
    if (reducer) dispatch(reducer);
    if (handleClick) handleClick();
  }, [reducer, handleClick, dispatch]);

  // 컴포넌트 태그 결정
  const Comp = path ? Link : "button";

  // 컴포넌트 속성
  const compProps = path
    ? { to: path } // Link 속성
    : { type: "button", onClick: clickHandler }; // button 속성

  return (
    <Comp
      className={`${styles[`auth-button`]} ${
        colorTheme
          ? styles[`auth-button-color-theme`]
          : styles[`auth-button-normal`]
      } `}
      {...(compProps as any)}
    >
      <div
        className={`${styles[`auth-button-container`]} ${subClassName || ""}`}
      >
        {img && (
          <img
            src={img}
            alt="로고 이미지"
            className={styles[`auth-button-img`]}
          />
        )}
        <Text>{text}</Text>
      </div>
    </Comp>
  );
};

export default AuthButton;
