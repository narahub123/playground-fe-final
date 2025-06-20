import styles from "./AccountButton.module.css";
import { defaultProfileImage } from "@shared/@common/assets";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { joinClassNames, setPlayGroundData } from "@shared/@common/utils";
import { useCallback, useEffect, useRef, useState } from "react";
import { Button, Dropdown, Text } from "@shared/@common/ui/components";
import AccountItem from "../AccountItem/AccountItem";
import { Icon } from "@shared/@common/ui/icons";
import { useAppDispatch } from "@app/store";
import { useNavigate } from "react-router-dom";
import { onParallelModalOpen } from "@shared/@common/models/slices/modalSlice";
import { useSelector } from "react-redux";
import { selectUser } from "@shared/@common/models/selectors";
import { useToast } from "@shared/@common/ui/components/Toast/hooks";
import { fetchWithAuth } from "@shared/pages/utils";
import { PRIMARY_LINK } from "@shared/@common/constants";

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

  const user = useSelector(selectUser);

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
  const { title, add, manage, logout, profile, errors } = useLanguageContent([
    "components",
    "AccountButton",
  ]);

  const classNames = joinClassNames([styles["account__button"], className]);

  const toast = useToast();

  // 계정 전환
  const switchAccount = async (userId: string) => {
    const result = await fetchWithAuth(
      "/users/switch",
      {},
      { targetUserId: userId }
    );

    if (result.success) {
      setPlayGroundData({
        accessToken: result.data.accessToken,
        activeSessionId: result.data.activeSessionId,
      });

      window.location.href = "PRIMARY_LINK.HOME";
    } else {
      // false 시 toast 사용
      for (const error of Object.values(result.error.details)) {
        toast({
          title: `${errors.title(result.code)}`,
          description: `${errors.description(error)}`,
          type: "error",
        });
      }
    }
  };

  return (
    <button
      className={classNames}
      title={title}
      ref={buttonRef}
      onClick={onOpen}
    >
      <div className={styles[`account__button__profile`]}>
        <div className={styles[`account__button__profile__wrapper`]}>
          <img
            src={user.profileImage || defaultProfileImage}
            alt={`${user.userId} ${profile}`}
            className={styles[`account__button__profile__image`]}
          />
          <div className={styles[`account__button__profile__info`]}>
            <Text className={styles["account__button__profile__username"]}>
              {user.username}
            </Text>
            <Text
              className={styles["account__button__profile__userid"]}
            >{`@${user.userId}`}</Text>
          </div>
        </div>
        <Icon
          iconName="more"
          className={styles[`account__button__profile__more`]}
          bgColor="transparent"
        />
      </div>
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
          {user.accountGroup.map((account) => {
            const currentCond = user.userId === account.userId;
            return (
              <li
                className={joinClassNames([
                  styles["account__dropdown__item"],
                  !currentCond
                    ? styles["account__dropdown__item--unselected"]
                    : "",
                ])}
                key={account.userId}
                onClick={
                  currentCond ? undefined : () => switchAccount(account.userId)
                }
                tabIndex={currentCond ? -1 : 0}
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
              navigate(PRIMARY_LINK.LOGIN, { state: { api: "addAccount" } });
            }}
            variant="plain"
            className={styles["account__dropdown__section__item"]}
          >
            {add}
          </Button>
          <Button
            onClick={() => {
              dispatch(onParallelModalOpen("account"));
              navigate(PRIMARY_LINK.ACCOUNT_MANAGE);
            }}
            variant="plain"
            className={styles["account__dropdown__section__item"]}
          >
            {manage}
          </Button>
          <Button
            onClick={() => {
              navigate(PRIMARY_LINK.LOGOUT);
            }}
            variant="plain"
            className={styles["account__dropdown__section__item"]}
          >
            {`@${user.userId} ${logout}`}
          </Button>
        </section>
      </Dropdown>
    </button>
  );
};

export default AccountButton;
