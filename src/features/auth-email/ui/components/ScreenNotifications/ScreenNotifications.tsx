import { getUserInSignup } from "@features/auth-setting/models/selectors";
import styles from "./ScreenNotifications.module.css";
import {
  useLanguageContent,
  useValidationChecker,
} from "@shared/@common/models/hooks";
import { Button, Checkbox, Modal, Text } from "@shared/@common/ui/components";
import { joinClassNames } from "@shared/@common/utils";
import { useSelector } from "react-redux";
import {
  useModalContext,
  useModalPagination,
} from "@shared/@common/ui/components/Modal/hooks";
import {
  setNotificationCommentInSignup,
  setNotificationFollowingInSignup,
  setNotificationMessageInSignup,
  setNotificationNewPostInSignup,
} from "@features/auth-setting/models/slices/signupSlice";
import { useEffect } from "react";

interface ScreenNotificationsProps {
  className?: string;
}

const ScreenNotifications = ({ className }: ScreenNotificationsProps) => {
  const user = useSelector(getUserInSignup);

  const { setScreenValidations } = useModalContext();
  const { moveNext } = useModalPagination();

  // 언어 설정
  const { title, expl, button } = useLanguageContent([
    "components",
    "ScreenNotifications",
  ]);

  const classNames = joinClassNames([
    styles["screen__notifications"],
    className,
  ]);

  const { setIsValid, validationResult } = useValidationChecker({
    fields: ["notifications"],
    sliceState: user,
    setScreenValidations,
    screenName: "ScreenNotifications",
  });

  useEffect(() => {
    setIsValid(true);
  }, []);

  return (
    <div className={classNames}>
      <Modal.Body className={styles[`screen__notifications__body`]}>
        <div className={styles[`screen__notifications__body__header`]}>
          <Text type="heading2">{title}</Text>
          <Text type="expl">{expl}</Text>
        </div>
        <div className={styles[`screen__notifications__body__main`]}>
          <Checkbox
            text="메시지"
            expl="새로운 메시지를 받은 경우 알림을 받습니다."
            inputValue={user.notifications.message}
            setInputValue={setNotificationMessageInSignup}
          />
          <Checkbox
            text="댓글"
            expl="새로운 댓글를 받은 경우 알림을 받습니다."
            inputValue={user.notifications.comment}
            setInputValue={setNotificationCommentInSignup}
          />
          <Checkbox
            text="팔로우"
            expl="새로운 팔로우가 있는 경우 알림을 받습니다."
            inputValue={user.notifications.following}
            setInputValue={setNotificationFollowingInSignup}
          />
          <Checkbox
            text="새 글"
            expl="팔로우 중 새 글이 있는 경우 알림을 받습니다."
            inputValue={user.notifications.newPost}
            setInputValue={setNotificationNewPostInSignup}
          />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button
          onClick={moveNext}
          variant="outline"
          isValid={validationResult}
          colorPalette="default"
        >
          {button.skip}
        </Button>
      </Modal.Footer>
    </div>
  );
};

export default ScreenNotifications;
