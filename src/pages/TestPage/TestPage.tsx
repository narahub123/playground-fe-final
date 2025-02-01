import { Input } from "@test/ui/components";
import styles from "./TestPage.module.css";
import { joinClassNames } from "@shared/@common/utils";

interface TestPageProps {
  className?: string;
  disabled?: boolean;
}

const TestPage = ({ className, disabled = false }: TestPageProps) => {
  const classNames = joinClassNames([styles["testpage"], className]);

  return (
    <div className={classNames}>
      <Input>
        <Input.Main>
          <Input.Top />
          <Input.Bottom>
            <Input.Field />
          </Input.Bottom>
        </Input.Main>
        <Input.Error>에러</Input.Error>
        <Input.Dropdown>드롭다운</Input.Dropdown>
      </Input>
    </div>
  );
};

export default TestPage;
