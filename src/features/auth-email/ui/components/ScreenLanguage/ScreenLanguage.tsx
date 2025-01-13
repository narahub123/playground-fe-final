import { Button, Input, Modal, Text } from "@shared/@common/ui/components";
import styles from "./ScreenLanguage.module.css";
import {
  useLanguageContent,
  useValidationChecker,
} from "@shared/@common/models/hooks";
import { joinClassNames } from "@shared/@common/utils";
import { useSelector } from "react-redux";
import { setLanguage } from "@shared/@common/models/slices/displaySlice";
import { getDisplay } from "@shared/@common/models/selectors";
import { useModalContext } from "@shared/@common/ui/components/Modal/hooks";
import { useEffect, useState } from "react";
import { getUserInSignup } from "@features/auth-setting/models/selectors";

interface ScreenLanguageProps {
  className?: string;
}

const ScreenLanguage = ({ className }: ScreenLanguageProps) => {
  const [canSubmit, setCanSubmit] = useState(false);
  const display = useSelector(getDisplay);
  const user = useSelector(getUserInSignup);

  const { screenValidations, setScreenValidations } = useModalContext();

  const { setIsValid } = useValidationChecker({
    fields: ["language"],
    sliceState: display,
    setScreenValidations,
    screenName: "ScreenLanguage",
  });

  useEffect(() => {
    setIsValid(true);
  }, []);

  useEffect(() => {
    if (!screenValidations) return;
    const result = Object.values(screenValidations).every((item) => item);

    setCanSubmit(result);
  }, [screenValidations]);

  // 언어 설정
  const { title, expl, button, label, langList } = useLanguageContent([
    "components",
    "ScreenLanguage",
  ]);

  const classNames = joinClassNames([styles["screen__language"], className]);

  const handleSubmit = () => {
    const submit = { ...user, language: display.language };

    console.log(submit);
  };

  return (
    <div className={classNames}>
      <Modal.Body className={styles[`screen__language__body`]}>
        <div className={styles[`screen__language__body__header`]}>
          <Text text={title} type="heading2" />
          <Text text={expl} type="expl" />
          <Input
            field="language"
            label={label}
            inputValue={display.language}
            setInputValue={setLanguage}
            list={langList}
          >
            <Input.Main>
              <Input.Top>
                <Input.Label />
              </Input.Top>
              <Input.Bottom>
                <Input.Field />
              </Input.Bottom>
            </Input.Main>
            <Input.Dropdown />
          </Input>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleSubmit} isValid={canSubmit}>
          {button}
        </Button>
      </Modal.Footer>
    </div>
  );
};

export default ScreenLanguage;
