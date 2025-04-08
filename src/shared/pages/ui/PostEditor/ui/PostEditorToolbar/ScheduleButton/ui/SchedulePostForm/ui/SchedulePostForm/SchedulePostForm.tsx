import styles from "./SchedulePostForm.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { joinClassNames } from "@shared/@common/utils";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Modal, Text } from "@shared/@common/ui/components";
import { PRIMARY_LINK } from "@shared/@common/constants";
import {
  SelectSchedule,
  scheduleDate,
  useScheduleData,
  ScheduleText,
  CalendarButton,
  ScheduleContextProvider,
  distructDate,
} from "@shared/pages/ui/PostEditor/ui/PostEditorToolbar/ScheduleButton";
import { useAppDispatch } from "@app/store";
import { setPostEditorSchedule } from "@shared/pages/ui/PostEditor/models/slices/postEditorSlice";
import { useSelector } from "react-redux";
import { selectPostEditor } from "@shared/pages/ui/PostEditor/models/selectors";

interface SchedulePostFormProps {
  className?: string;
}

const SchedulePostForm = ({ className }: SchedulePostFormProps) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const initialSchedule = () => {
    const targetDate = new Date();

    targetDate.setDate(targetDate.getDate() + 5);

    return targetDate;
  };

  const { post } = useSelector(selectPostEditor);

  const [schedule, setSchedule] = useState<Date>(
    post.schedule ? post.schedule : initialSchedule()
  );

  const [isValid, setIsValid] = useState<{ [key: string]: boolean } | boolean>(
    true
  );

  const [error, setError] = useState<{ date: string; time: string }>({
    date: "",
    time: "",
  });

  // 언어 설정
  const { header, scheduleDay, scheduleTime, timeZone } = useLanguageContent([
    "components",
    "SchedulePostForm",
  ]);

  useEffect(() => {
    const today = new Date();

    const {
      year: thisYear,
      month: thisMonth,
      date: thisDate,
      hour: thisHour,
      minute: thisMinute,
    } = distructDate(today);

    const { year, month, date, hour, minute } = distructDate(schedule);

    if (thisYear === year && thisMonth === month && thisDate > date) {
      setError({ date: "게시일을 과거 날짜로 예약할 수 없습니다.", time: "" });

      return;
    }

    if (
      thisYear === year &&
      thisMonth === month &&
      thisDate === date &&
      (thisHour > hour || (thisHour === hour && thisMinute > minute))
    ) {
      setError({
        date: "",
        time: "게시일을 과거 날짜로 예약할 수 없습니다.",
      });

      return;
    }

    setError({ date: "", time: "" });
  }, [schedule]);

  const scheduleData = useScheduleData();

  const classNames = joinClassNames([styles["schedule__form"], className]);

  const moveToUnsent = () => {
    navigate(PRIMARY_LINK.SCHEDULED_POST);
  };

  const distructureDate = () => {
    const year = schedule.getFullYear();
    const month = schedule.getMonth() + 1;
    const date = schedule.getDate();
    const hour = schedule.getHours();
    const minute = schedule.getMinutes();
    const amPm = hour > 12 ? "pm" : "am";

    return {
      year,
      month,
      date,
      hour,
      minute,
      amPm,
    };
  };

  const handleConfirm = () => {
    dispatch(setPostEditorSchedule(schedule));
    navigate(-1);
  };

  const handleDelete = () => {
    dispatch(setPostEditorSchedule(undefined));
    navigate(-1);
  };

  const handleUpdate = () => {
    dispatch(setPostEditorSchedule(schedule));
    navigate(-1);
  };

  return (
    <ScheduleContextProvider value={{ schedule, setSchedule }}>
      <Modal.Container width={85}>
        <Modal.CloseButton location="left" />
        <Modal.Content className={classNames}>
          <Modal.Header className={styles["schedule__form__header"]}>
            <Text type="heading3">{header.title}</Text>
            {post.schedule ? (
              <div className={styles["schedule__form__header__btns"]}>
                <Button
                  onClick={handleDelete}
                  className={styles["schedule__form__header__btn"]}
                  rounded="2xl"
                  variant="plain"
                  isValid={isValid as boolean}
                >
                  {header.btn.delete}
                </Button>
                <Button
                  onClick={handleUpdate}
                  className={styles["schedule__form__header__btn"]}
                  rounded="2xl"
                  isValid={isValid as boolean}
                >
                  {header.btn.update}
                </Button>
              </div>
            ) : (
              <Button
                onClick={handleConfirm}
                className={styles["schedule__form__header__btn"]}
                rounded="2xl"
                isValid={isValid as boolean}
              >
                {header.btn.confirm}
              </Button>
            )}
          </Modal.Header>
          <Modal.Body className={styles["schedule__form__body"]}>
            <div className={styles["schedule__form__body__indicator"]}>
              <ScheduleText schedule={schedule} />
            </div>
            <div className={styles["schedule__form__body__date"]}>
              <Text type="expl">날짜</Text>
              <div className={styles["schedule__form__body__select__wrapper"]}>
                {["year", "month", "date"].map((item) => (
                  <SelectSchedule
                    key={item}
                    label={scheduleDay[item]}
                    field={item}
                    options={
                      item === "date"
                        ? scheduleDate(
                            schedule.getFullYear(),
                            schedule.getMonth() + 1
                          )
                        : scheduleData[item as keyof typeof scheduleData]
                    }
                    setFunc={setSchedule}
                    setIsValid={setIsValid}
                    value={
                      distructureDate()[item as keyof typeof distructureDate]
                    }
                  />
                ))}
                <CalendarButton />
              </div>
              {error.date && <Text status="error">{error.date}</Text>}
            </div>
            <div className={styles["schedule__form__body__hour"]}>
              <Text type="expl">시간</Text>
              <div className={styles["schedule__form__body__select__wrapper"]}>
                {["hour", "minute", "amPm"].map((item) => (
                  <SelectSchedule
                    key={item}
                    label={scheduleTime[item]}
                    field={item}
                    options={scheduleData[item as keyof typeof scheduleData]}
                    setFunc={setSchedule}
                    setIsValid={setIsValid}
                    value={
                      distructureDate()[item as keyof typeof distructureDate]
                    }
                  />
                ))}
              </div>
              {error.time && <Text status="error">{error.time}</Text>}
            </div>
            <div className={styles["schedule__form__body__time__zone"]}>
              <Text type="expl">{timeZone}</Text>
              <Text>{Intl.DateTimeFormat().resolvedOptions().timeZone}</Text>
            </div>
          </Modal.Body>
          <Modal.Footer className={styles["schedule__form__footer"]}>
            <Button
              onClick={moveToUnsent}
              variant="plain"
              isValid
              fontColor="colorTheme"
              type="button"
            >
              예약 게시물
            </Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal.Container>
    </ScheduleContextProvider>
  );
};

export default SchedulePostForm;
