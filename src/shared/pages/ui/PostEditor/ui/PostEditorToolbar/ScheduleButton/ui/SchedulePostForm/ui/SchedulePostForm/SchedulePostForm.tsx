import styles from "./SchedulePostForm.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { joinClassNames } from "@shared/@common/utils";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Modal, Text } from "@shared/@common/ui/components";
import { Icon } from "@shared/@common/ui/icons";
import { PRIMARY_LINK } from "@shared/@common/constants";
import {
  SelectSchedule,
  scheduleDate,
  ISchedule,
  useScheduleData,
  ScheduleText,
} from "@shared/pages/ui/PostEditor/ui/PostEditorToolbar/ScheduleButton";

interface SchedulePostFormProps {
  className?: string;
}

const SchedulePostForm = ({ className }: SchedulePostFormProps) => {
  const navigate = useNavigate();

  const getInitialSchedule = (): ISchedule => {
    const today = new Date();

    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const date = today.getDate();
    const hour =
      today.getHours() > 12 ? today.getHours() - 12 : today.getHours();
    const minute = today.getMinutes();
    const amPm = today.getHours() > 12 ? "pm" : "am";
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    return {
      year,
      month,
      date: date + 5,
      hour,
      minute,
      amPm,
      timeZone,
    };
  };

  const initialSchedule = getInitialSchedule();

  const [schedule, setSchedule] = useState<ISchedule>(initialSchedule);
  const [isValid, setIsValid] = useState<{ [key: string]: boolean } | boolean>(
    true
  );
  const [error, setError] = useState<{ date: string; time: string }>({
    date: "",
    time: "",
  });

  // amPm 자동 변경
  useEffect(() => {
    if (schedule.hour === 12) {
      if (schedule.amPm === "am") {
        setSchedule((prev) => ({
          ...prev,
          amPm: "pm",
        }));
      } else {
        setSchedule((prev) => ({
          ...prev,
          amPm: "am",
        }));
      }
    }
  }, [schedule.hour]);

  useEffect(() => {
    const today = new Date();
    const thisMonth = today.getMonth() + 1;
    const thisDate = today.getDate();

    const { year, month, date, hour, minute, amPm } = schedule;
    const target = new Date(
      year,
      month - 1,
      date,
      amPm === "pm" ? hour + 12 : hour,
      minute
    );

    if (
      thisMonth > schedule.month ||
      (thisMonth === schedule.month && thisDate > schedule.date)
    ) {
      setError((prev) => {
        if (prev.date.length === 0) {
          return {
            time: "",
            date: "게시일을 과거 날짜로 예약할 수 없습니다.",
          };
        } else return prev;
      });
      setIsValid((prev) => {
        if (prev === true) return false;
        else return prev;
      });
      return;
    } else if (target.getTime() <= today.getTime()) {
      setError((prev) => {
        if (prev.time.length === 0) {
          return {
            date: "",
            time: "게시일을 과거 날짜로 예약할 수 없습니다.",
          };
        } else return prev;
      });
      setIsValid((prev) => {
        if (prev === true) return false;
        else return prev;
      });

      return;
    }

    setError((prev) => {
      if (prev.date.length !== 0 || prev.time.length !== 0) {
        return {
          date: "",
          time: "",
        };
      } else return prev;
    });
    setIsValid((prev) => {
      if (prev === false) return true;
      else return prev;
    });
  }, [schedule]);

  // 언어 설정
  const { header, scheduleDay, scheduleTime, timeZone } = useLanguageContent([
    "components",
    "SchedulePostForm",
  ]);

  const scheduleData = useScheduleData();

  const classNames = joinClassNames([styles["schedule__form"], className]);

  const moveToUnsent = () => {
    navigate(PRIMARY_LINK.UNSENT_POST);
  };

  return (
    <Modal.Content className={classNames}>
      <Modal.Header className={styles["schedule__form__header"]}>
        <Text type="heading3">{header.title}</Text>
        <Button
          onClick={() => {}}
          className={styles["schedule__form__header__btn"]}
          rounded="2xl"
          isValid={isValid as boolean}
        >
          {header.btn}
        </Button>
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
                    ? scheduleDate(schedule.year, schedule.month)
                    : scheduleData[item as keyof typeof scheduleData]
                }
                setFunc={setSchedule}
                setIsValid={setIsValid}
                value={schedule[item as keyof ISchedule]}
              />
            ))}
            <div className={styles["icon__container"]}>
              <Icon iconName="calendar" onClick={() => {}} />
            </div>
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
                value={schedule[item as keyof ISchedule]}
              />
            ))}
          </div>
          {error.time && <Text status="error">{error.time}</Text>}
        </div>
        <div className={styles["schedule__form__body__time__zone"]}>
          <Text type="expl">{timeZone}</Text>
          <Text>{schedule.timeZone}</Text>
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
  );
};

export default SchedulePostForm;
