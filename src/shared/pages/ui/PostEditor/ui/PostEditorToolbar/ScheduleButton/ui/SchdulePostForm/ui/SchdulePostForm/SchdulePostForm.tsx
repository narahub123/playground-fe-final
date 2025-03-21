import styles from "./SchdulePostForm.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { Button, Modal, Text } from "@shared/@common/ui/components";
import { joinClassNames } from "@shared/@common/utils";
import { LuCalendarDays } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import { PRIMARY_LINK } from "@shared/@common/constants";
import SelectSchedule from "../SelectSchedule/SelectSchedule";
import { useState } from "react";
import { scheduleMonth } from "../../data";
import {
  scheduleAmPm,
  scheduleDate,
  scheduleHour,
  scheduleMinute,
  scheduleYear,
} from "../../data/dates";
import { ISchedule } from "../../types";
import { Icon } from "@shared/@common/ui/icons";

interface SchdulePostFormProps {
  className?: string;
}

const SchdulePostForm = ({ className }: SchdulePostFormProps) => {
  const navigate = useNavigate();

  const getInitialSchedule = (): ISchedule => {
    const today = new Date();
    console.log(today);
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const date = today.getDate();
    const hour = today.getHours();
    const minute = today.getMinutes();
    const amPm = today.getHours() > 12 ? "pm" : "am";

    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    console.log(timeZone);

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
    false
  );

  // 언어 설정
  const { header } = useLanguageContent(["components", "SchdulePostForm"]);

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
            <SelectSchedule
              label="년"
              field="year"
              options={scheduleYear()}
              setFunc={setSchedule}
              setIsValid={setIsValid}
              value={schedule.year}
            />
            <SelectSchedule
              label="월"
              field="month"
              options={scheduleMonth()}
              setFunc={setSchedule}
              setIsValid={setIsValid}
              value={schedule.month}
            />
            <SelectSchedule
              label="일"
              field="date"
              options={scheduleDate(schedule.year, schedule.month)}
              setFunc={setSchedule}
              setIsValid={setIsValid}
              value={schedule.date}
            />
            <div className={styles["icon__container"]}>
              <Icon iconName="calendar" onClick={() => {}} />
            </div>
          </div>
        </div>
        <div className={styles["schedule__form__body__hour"]}>
          <Text type="expl">시간</Text>
          <div className={styles["schedule__form__body__select__wrapper"]}>
            <SelectSchedule
              label="시간"
              field="hour"
              options={scheduleHour()}
              setFunc={setSchedule}
              setIsValid={setIsValid}
              value={schedule.hour}
            />
            <SelectSchedule
              label="분"
              field="minute"
              options={scheduleMinute()}
              setFunc={setSchedule}
              setIsValid={setIsValid}
              value={schedule.minute}
            />
            <SelectSchedule
              label="Am/Pm"
              field="amPm"
              options={scheduleAmPm()}
              setFunc={setSchedule}
              setIsValid={setIsValid}
              value={schedule.amPm}
            />
          </div>
        </div>
        <div className={styles["schedule__form__body__time__zone"]}>
          <Text type="expl">시간대</Text>
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
