import styles from "./SchdulePostForm.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { joinClassNames } from "@shared/@common/utils";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Modal, Text } from "@shared/@common/ui/components";
import { Icon } from "@shared/@common/ui/icons";
import { PRIMARY_LINK } from "@shared/@common/constants";
import {
  SelectSchedule,
  scheduleDate,
  ISchedule,
  useScheduleData,
} from "@shared/pages/ui/PostEditor/ui/PostEditorToolbar/ScheduleButton";

interface SchdulePostFormProps {
  className?: string;
}

const SchdulePostForm = ({ className }: SchdulePostFormProps) => {
  const navigate = useNavigate();

  const getInitialSchedule = (): ISchedule => {
    const today = new Date();

    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const date = today.getDate();
    const hour = today.getHours();
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

  // 언어 설정
  const { header, scheduleDay, scheduleTime, timeZone } = useLanguageContent([
    "components",
    "SchdulePostForm",
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
          isValid
        >
          {header.btn}
        </Button>
      </Modal.Header>
      <Modal.Body className={styles["schedule__form__body"]}>
        <div className={styles["schedule__form__body__indicator"]}>
          <Text>2025년 4월에 전송 예정</Text>
        </div>
        <div className={styles["schedule__form__body__date"]}>
          <Text type="expl">날짜</Text>
          <div className={styles["schedule__form__body__select__wrapper"]}>
            {["year", "month", "date"].map((item) => (
              <SelectSchedule
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
        </div>
        <div className={styles["schedule__form__body__hour"]}>
          <Text type="expl">시간</Text>
          <div className={styles["schedule__form__body__select__wrapper"]}>
            {["hour", "minute", "amPm"].map((item) => (
              <SelectSchedule
                label={scheduleTime[item]}
                field={item}
                options={scheduleData[item as keyof typeof scheduleData]}
                setFunc={setSchedule}
                setIsValid={setIsValid}
                value={schedule[item as keyof ISchedule]}
              />
            ))}
          </div>
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

export default SchdulePostForm;
