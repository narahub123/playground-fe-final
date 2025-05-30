import { useAppDispatch } from "@app/store";
import styles from "./LocationModal.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { getParalleModal } from "@shared/@common/models/selectors";
import { joinClassNames } from "@shared/@common/utils";
import { useSelector } from "react-redux";
import { onParallelModalClose } from "@shared/@common/models/slices/modalSlice";
import { Modal, Text } from "@shared/@common/ui/components";
import { Icon } from "@shared/@common/ui/icons";
import { LuSearch } from "react-icons/lu";
import { ICountry } from "@shared/@common/types";

interface LocationModalProps {
  className?: string;
}

const LocationModal = ({ className }: LocationModalProps) => {
  const dispatch = useAppDispatch();
  // 언어 설정
  const { countryNames } = useLanguageContent(["explore", "LocationModal"]);

  const isOpen = useSelector(getParalleModal("location"));

  const classNames = joinClassNames([styles["location__modal"], className]);

  const onClose = () => {
    dispatch(onParallelModalClose("location"));
  };

  return (
    <Modal
      domId="location"
      isOpen={isOpen}
      onClose={onClose}
      className={classNames}
    >
      <Modal.Overlay />
      <Modal.Container>
        <Modal.Content>
          <Modal.Header className={styles["header"]}>
            <div>
              <Icon iconName="arrowLeft" onClick={() => {}} />
            </div>
            <Text type="heading3">위치</Text>
          </Modal.Header>
          <Modal.Body className={styles["body"]}>
            <div className={styles["search__container"]}>
              <div className={styles["search__wrapper"]}>
                <div className={styles["icon__wrapper"]}>
                  <LuSearch className={styles["icon"]} />
                </div>
                <input
                  type="text"
                  className={styles["input"]}
                  placeholder="위치 검색"
                />
              </div>
            </div>
            <div>
              {countryNames
                .sort((a: ICountry, b: ICountry) =>
                  a.name.localeCompare(b.name)
                )
                .map((country: ICountry) => (
                  <div>
                    <button className={styles["country"]}>
                      {country.name}
                    </button>
                  </div>
                ))}
            </div>
          </Modal.Body>
        </Modal.Content>
      </Modal.Container>
    </Modal>
  );
};

export default LocationModal;
