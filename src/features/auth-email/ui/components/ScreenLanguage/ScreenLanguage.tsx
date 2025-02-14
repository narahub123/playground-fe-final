import {
  Button,
  Modal,
  SelectLanguage,
  Text,
} from "@shared/@common/ui/components";
import styles from "./ScreenLanguage.module.css";
import {
  useLanguageContent,
  useValidationChecker,
} from "@shared/@common/models/hooks";
import { joinClassNames } from "@shared/@common/utils";
import { useSelector } from "react-redux";
import { getDisplay } from "@shared/@common/models/selectors";
import { useModalContext } from "@shared/@common/ui/components/Modal/hooks";
import { useEffect, useState } from "react";
import { getUserInSignup } from "@shared/auth/models/selectors";
import { registerUserAPI } from "@shared/auth/apis/signup";
import { useToast } from "@shared/@common/ui/components/Toast/hooks";

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
  const { title, expl, button, success, errors } = useLanguageContent([
    "components",
    "ScreenLanguage",
  ]);

  const classNames = joinClassNames([styles["screen__language"], className]);

  const handleSubmit = async () => {
    const submit = { ...user, language: display.language };

    console.log(submit);

    const toast = useToast();

    const result = await registerUserAPI(submit);

    if (result.success) {
      toast({
        type: "success",
        title: success.title,
        description: success.description,
      });
      // slice를 비우기 위해서 리프레시가 되면서 이동되는 location.href 사용
      window.location.href = "/";
    } else {
      for (const error of Object.values(result.data.details))
        toast({
          title: errors.title(result.code),
          description: errors.description(error),
          type: "error",
        });
    }
  };

  return (
    <div className={classNames}>
      <Modal.Body className={styles[`screen__language__body`]}>
        <div className={styles[`screen__language__body__header`]}>
          <Text type="heading2">{title}</Text>
          <Text type="expl">{expl}</Text>
        </div>
        <SelectLanguage setIsValid={setIsValid} />
      </Modal.Body>
      <Modal.Footer>
        <Button
          onClick={handleSubmit}
          isValid={canSubmit}
          variant="solid"
          bgColor="colorTheme"
          width="100%"
          rounded="2xl"
          type="submit"
        >
          {button}
        </Button>
      </Modal.Footer>
    </div>
  );
};

export default ScreenLanguage;
