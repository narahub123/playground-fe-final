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
        <Input.Main>d</Input.Main>
        <Input.Error></Input.Error>
        <Input.Dropdown></Input.Dropdown>
      </Input>
    </div>
  );
};

export default TestPage;
