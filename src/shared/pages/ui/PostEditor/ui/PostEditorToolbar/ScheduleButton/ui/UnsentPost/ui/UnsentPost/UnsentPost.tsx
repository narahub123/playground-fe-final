import styles from "./UnsentPost.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { Modal, Text } from "@shared/@common/ui/components";
import { joinClassNames } from "@shared/@common/utils";
import { Outlet, useNavigate } from "react-router-dom";
import UnsentPostTab from "../UnsentPostTab/UnsentPostTab";
import { IUnsentPostTab } from "../../types";
import { LuChevronLeft } from "react-icons/lu";
import { Icon } from "@shared/@common/ui/icons";
import { PRIMARY_LINK } from "@shared/@common/constants";

const UnsentPost = () => {
  const navigate = useNavigate();
  // 언어 설정
  const { header, tabs } = useLanguageContent(["components", "UnsentPost"]);

  const classNames = joinClassNames([styles["schedule__unsent"]]);

  const handleClick = () => {
    navigate(PRIMARY_LINK.SCHEDULE_POST);
  };

  return (
    <Modal.Container width={85}>
      <Icon
        iconName="arrowLeft"
        onClick={handleClick}
        className={styles["schedule__unsent__forward__icon"]}
      />
      <Modal.Content className={classNames}>
        <Modal.Header className={styles["schedule__unsent__header"]}>
          <Text type="heading3">{header.title}</Text>
        </Modal.Header>
        <Modal.Body className={styles["schedule__unsent__body"]}>
          <div className={styles["schedule__unsent__tabs"]}>
            {(tabs as IUnsentPostTab[]).map((tab) => (
              <UnsentPostTab key={tab.path} tab={tab} />
            ))}
          </div>
          <Outlet />
        </Modal.Body>
        <Modal.Footer className={styles["schedule__unsent__footer"]}>
          adfasf
        </Modal.Footer>
      </Modal.Content>
    </Modal.Container>
  );
};

export default UnsentPost;
