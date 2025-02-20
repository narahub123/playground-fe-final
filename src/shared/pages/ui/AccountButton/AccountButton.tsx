import { defaultProfileImage } from "@shared/@common/assets";
import styles from "./AccountButton.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { joinClassNames } from "@shared/@common/utils";
import { useCallback, useEffect, useRef, useState } from "react";
import { Button, Dropdown } from "@shared/@common/ui/components";
import AccountItem from "../AccountItem/AccountItem";
import { Icon } from "@shared/@common/ui/icons";
import { useAppDispatch } from "@app/store";
import { useNavigate } from "react-router-dom";
import { onParallelModalOpen } from "@shared/@common/models/slices/modalSlice";

interface AccountButtonProps {
  className?: string;
  disabled?: boolean;
}

const AccountButton = ({ className, disabled = false }: AccountButtonProps) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [rect, setRect] = useState<{
    top?: number;
    bottom?: number;
    left?: number;
    right?: number;
    height: number;
  }>({ height: 0 });

  const onOpen = () => {
    setIsOpen(!isOpen);
  };

  const onClose = () => {
    setIsOpen(false);
  };

  const updateRect = useCallback(() => {
    if (!buttonRef.current) return;

    const { top, bottom, left, right, height } =
      buttonRef.current.getBoundingClientRect();

    setRect({
      top,
      bottom,
      left,
      right,
      height,
    });
  }, []);

  // 부모 요소의 위치 정보 업데이트
  useEffect(() => {
    updateRect();

    window.addEventListener("resize", updateRect);

    // containerRef.current와 그 상위 부모 요소에서 스크롤 이벤트 리스닝
    let currentElement: HTMLElement | null = buttonRef.current;
    while (currentElement) {
      currentElement.addEventListener("scroll", updateRect);
      currentElement = currentElement.parentElement;
    }

    return () => {
      window.removeEventListener("resize", updateRect);

      // scroll 이벤트 리스너 제거 (상위 요소들을 포함하여)
      currentElement = buttonRef.current;
      while (currentElement) {
        currentElement.removeEventListener("scroll", updateRect);
        currentElement = currentElement.parentElement;
      }
    };
  }, []);

  // 언어 설정
  const { title, add, manage, logout, profile } = useLanguageContent([
    "components",
    "AccountButton",
  ]);

  const classNames = joinClassNames([styles["account__button"], className]);

  const currentUser = "test1234";
  const accounts = [
    {
      profileImage: defaultProfileImage,
      username: "몰러",
      userId: "test1234",
    },
    {
      profileImage: defaultProfileImage,
      username: "몰러",
      userId: "test1232",
    },
  ];

  return (
    <button
      className={classNames}
      title={title}
      ref={buttonRef}
      onClick={onOpen}
    >
      <Dropdown
        name="account"
        isOpen={isOpen}
        onClose={onClose}
        lastClickedRef={buttonRef}
        left={rect.left}
        bottom={
          rect.bottom && window.innerHeight - rect.bottom + rect.height + 20
        }
        className={styles["account__dropdown"]}
      >
        <ul className={styles["account__dropdown__list"]}>
          {accounts.map((account) => {
            const currentCond = currentUser === account.userId;
            return (
              <li
                className={joinClassNames([
                  styles["account__dropdown__item"],
                  !currentCond
                    ? styles["account__dropdown__item--unselected"]
                    : "",
                ])}
                key={account.userId}
              >
                <AccountItem account={account} />
                {currentCond && (
                  <Icon iconName="valid" style={{ color: "green" }} />
                )}
              </li>
            );
          })}
        </ul>
        <section className={styles["account__dropdown__section"]}>
          <Button
            onClick={() => {
              dispatch(onParallelModalOpen("login"));
              navigate("/i/flow/login");
            }}
            variant="plain"
            className={styles["account__dropdown__section__item"]}
          >
            {add}
          </Button>
          <Button
            onClick={() => {
              dispatch(onParallelModalOpen("account"));
              navigate("/account/manage");
            }}
            variant="plain"
            className={styles["account__dropdown__section__item"]}
          >
            {manage}
          </Button>
          <Button
            onClick={() => {
              navigate("/logout");
            }}
            variant="plain"
            className={styles["account__dropdown__section__item"]}
          >
            {`@${currentUser} ${logout}`}
          </Button>
        </section>
      </Dropdown>
      <img
        src={defaultProfileImage}
        alt={`${currentUser} ${profile}`}
        className={styles[`account__button__image`]}
      />
    </button>
  );
};

export default AccountButton;
