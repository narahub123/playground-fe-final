import {
  getStandAloneModal,
  selectExploreSettings,
} from "@shared/@common/models/selectors";
import styles from "./ExploreSettingModal.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { Modal, Text } from "@shared/@common/ui/components";
import { useSelector } from "react-redux";
import { useAppDispatch } from "@app/store";
import {
  onParallelModalOpen,
  onStandAlonClose,
} from "@shared/@common/models/slices/modalSlice";
import { Icon } from "@shared/@common/ui/icons";
import { joinClassNames } from "@shared/@common/utils";
import { LuChevronRight } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import {
  togglePersonalizeTrends,
  toggleUseDeviceLocation,
} from "@shared/@common/models/slices/userSlice";

interface ExploreSettingModalProps {}

const ExploreSettingModal = ({}: ExploreSettingModalProps) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  // 언어 설정
  const {
    title,
    heading1,
    option1,
    description1,
    heading2,
    option2,
    description2,
    exploreLocataion,
  } = useLanguageContent(["explore", "ExploreSettingModal"]);

  const { useDeviceLocation, personalizeTrends } = useSelector(
    selectExploreSettings
  );

  const isOpen = useSelector(getStandAloneModal("explore"));

  const onClose = () => {
    dispatch(onStandAlonClose("explore"));
  };

  return (
    <Modal domId="explore" isOpen={true} onClose={onClose}>
      <Modal.Overlay />
      <Modal.Container>
        <Modal.Content>
          <Modal.Header className={styles["header"]}>
            <div className={styles["close__wrapper"]}>
              <Icon
                iconName="close"
                onClick={onClose}
                className={styles["close"]}
                iconSize="xl"
              />
            </div>
            <Text type="heading3">{title}</Text>
          </Modal.Header>
          <Modal.Body className={styles["body"]}>
            <div className={styles["heading"]}>
              <Text type="heading3">{heading1}</Text>
            </div>
            <div className={styles["wrapper"]}>
              <div
                className={styles["checkbox__wrapper"]}
                onClick={() => {
                  dispatch(toggleUseDeviceLocation());
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    dispatch(toggleUseDeviceLocation());
                  }
                }}
              >
                <Text>{option1}</Text>
                <Icon
                  iconName={
                    useDeviceLocation ? "rectCheckboxFill" : "rectCheckboxBlank"
                  }
                  className={joinClassNames([
                    styles["checkbox__icon"],
                    useDeviceLocation ? styles["checked"] : styles["unchecked"],
                  ])}
                  iconSize="2xl"
                  tabIndex={0}
                />
              </div>
              <Text type="expl">{description1}</Text>
            </div>
            {!useDeviceLocation && (
              <div
                className={styles["location"]}
                onClick={() => {
                  navigate("location");
                  dispatch(onParallelModalOpen("location"));
                }}
              >
                <div>
                  <Text>{exploreLocataion}</Text>
                  <Text type="expl">{"대한민국"}</Text>
                </div>
                <LuChevronRight fontSize={"1.25rem"} />
              </div>
            )}
            <div style={{ borderBottom: "1px solid #f1f1f1" }} />
            <div className={styles["heading"]}>
              <Text type="heading3">{heading2}</Text>
            </div>
            <div className={styles["wrapper"]}>
              <div
                className={styles["checkbox__wrapper"]}
                onClick={() => {
                  dispatch(togglePersonalizeTrends());
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    dispatch(togglePersonalizeTrends());
                  }
                }}
              >
                <Text>{option2}</Text>
                <Icon
                  iconName={
                    personalizeTrends ? "rectCheckboxFill" : "rectCheckboxBlank"
                  }
                  iconSize="2xl"
                  className={joinClassNames([
                    styles["checkbox__icon"],
                    personalizeTrends ? styles["checked"] : styles["unchecked"],
                  ])}
                  tabIndex={0}
                />
              </div>
              <Text type="expl">{description2}</Text>
            </div>
            <div className={styles["empty"]} />
          </Modal.Body>
        </Modal.Content>
      </Modal.Container>
    </Modal>
  );
};

export default ExploreSettingModal;
