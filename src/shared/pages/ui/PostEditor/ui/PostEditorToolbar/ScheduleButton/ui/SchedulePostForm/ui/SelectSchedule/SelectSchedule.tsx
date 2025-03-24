import Select, { useSelect } from "@shared/@common/ui/components/Select";
import { useScheduleContext } from "../../hooks";
import React from "react";

interface SelectScheduleProps {
  className?: string;
  value: number | string;
  disabled?: boolean;
  setIsValid: React.Dispatch<
    React.SetStateAction<
      | {
          [key: string]: boolean;
        }
      | boolean
    >
  >;
  setFunc: React.Dispatch<React.SetStateAction<any>>;
  field: string;
  options: { text: string; value: number | string }[];
  label: string;
}

const SelectSchedule = ({
  className,
  disabled = false,
  value,
  setIsValid,
  setFunc,
  field,
  options,
  label,
}: SelectScheduleProps) => {
  const { schedule } = useScheduleContext();

  const { isOpen, setIsOpen, onClose, optionSelected, toggleListbox } =
    useSelect({
      value,
      options,
      field,
      setFunc,
      setIsValid,
    });

  const updateFunc = (field: string, value: number | string) => {
    if (field === "year") {
      const newSchedule = new Date(schedule);
      newSchedule.setFullYear(value as number);

      setFunc(newSchedule);
    } else if (field === "month") {
      const newSchedule = new Date(schedule);
      newSchedule.setMonth((value as number) - 1);

      setFunc(newSchedule);
    } else if (field === "date") {
      const newSchedule = new Date(schedule);
      newSchedule.setDate(value as number);

      setFunc(newSchedule);
    } else if (field === "hour") {
      const newSchedule = new Date(schedule);
      newSchedule.setHours(value as number);

      setFunc(newSchedule);
    } else if (field === "minute") {
      const newSchedule = new Date(schedule);
      newSchedule.setMinutes(value as number);

      setFunc(newSchedule);
    } else if (field === "amPm") {
      const newSchedule = new Date(schedule);

      if (value === "am") newSchedule.setHours(newSchedule.getHours() - 12);
      else if (value === "pm")
        newSchedule.setHours(newSchedule.getHours() + 12);

      setFunc(newSchedule);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const key = e.key;
    const index = options.findIndex((option) => option.value === value);
    if (key === "ArrowUp") {
      e.preventDefault();

      const prevIndex = index - 1 < 0 ? options.length - 1 : index - 1;

      updateFunc(field, options[prevIndex].value as number);
    } else if (key === "ArrowDown") {
      e.preventDefault();
      const nextIndex = index + 1 > options.length - 1 ? 0 : index + 1;

      updateFunc(field, options[nextIndex].value as number);
    } else if (key === "Enter") {
      setIsOpen(!isOpen);
    } else if (key === "Escape") {
      e.preventDefault();
      e.stopPropagation();
      setIsOpen(false);
    }
  };

  return (
    <Select
      className={className}
      label={label}
      field={field}
      isOpen={isOpen}
      handleKeyDown={handleKeyDown}
      toggleListbox={toggleListbox}
      onClose={onClose}
      value={value}
      disabled={disabled}
      numberOfOptions={options.length}
    >
      {options.map((option) => {
        const selectCond = option.value === value;
        return (
          <Select.Option
            className={selectCond ? optionSelected : undefined}
            key={option.value}
            ariaSelected={selectCond}
            onMouseDown={() => {
              updateFunc(field, option.value as number);
            }}
            value={value}
          >
            {option.text}
          </Select.Option>
        );
      })}
    </Select>
  );
};

export default SelectSchedule;
