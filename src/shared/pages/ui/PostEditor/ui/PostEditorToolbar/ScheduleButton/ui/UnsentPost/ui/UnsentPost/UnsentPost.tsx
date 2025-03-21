import styles from "./UnsentPost.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { Modal, Text } from "@shared/@common/ui/components";
import { joinClassNames } from "@shared/@common/utils";
import { Outlet } from "react-router-dom";
import UnsentPostTab from "../UnsentPostTab/UnsentPostTab";
import { IUnsentPostTab } from "../../types";

const UnsentPost = () => {
  // 언어 설정
  const { header, tabs } = useLanguageContent(["components", "UnsentPost"]);

  const classNames = joinClassNames([styles["schedule__unsent"]]);

  return (
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
  );
};

export default UnsentPost;
