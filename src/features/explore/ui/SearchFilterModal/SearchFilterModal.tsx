import { getStandAloneModal } from "@shared/@common/models/selectors";
import styles from "./SearchFilterModal.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { Modal, Text } from "@shared/@common/ui/components";
import { joinClassNames } from "@shared/@common/utils";
import { useSelector } from "react-redux";
import { useAppDispatch } from "@app/store";
import { onStandAlonClose } from "@shared/@common/models/slices/modalSlice";
import { Icon } from "@shared/@common/ui/icons";
import { useNavigate } from "react-router-dom";
import { PRIMARY_LINK } from "@shared/@common/constants";
import { useState } from "react";

interface SearchFilterModalProps {
  className?: string;
}

interface ISearchFilter {
  people: boolean;
  location: boolean;
}

const SearchFilterModal = ({ className }: SearchFilterModalProps) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [filter, setFilter] = useState<ISearchFilter>({
    people: false,
    location: false,
  });
  // 언어 설정
  const { title, footer, heading1, radio1, radio2, heading2, radio3, radio4 } =
    useLanguageContent(["explore", "SearchFilterModal"]);

  const classNames = joinClassNames([
    styles["search__filter__modal"],
    className,
  ]);

  const isOpen = useSelector(getStandAloneModal("search_filter"));

  const onClose = () => {
    dispatch(onStandAlonClose("search_filter"));
  };

  const moveToSearchAdvanced = () => {
    onClose();
    navigate(PRIMARY_LINK.SEARCH_ADVANCED);
  };

  return (
    <Modal
      domId="search-filter"
      isOpen={true}
      onClose={onClose}
      className={classNames}
    >
      <Modal.Overlay />
      <Modal.Container>
        <Modal.Content>
          <Modal.Header className={styles["header"]}>
            <div className={styles["close__wrapper"]}>
              <Icon
                iconName="close"
                className={styles["close__icon"]}
                onClick={onClose}
              />
            </div>
            <Text type="heading3">{title}</Text>
          </Modal.Header>
          <Modal.Body className={styles["body"]}>
            <div className={styles["radio__section__wrapper"]}>
              <Text status="bold" className={styles["heading"]}>
                {heading1}
              </Text>
              <div className={styles["radio__wrapper"]}>
                <Text>{radio1}</Text>
                {filter.people ? (
                  <Icon
                    iconName="roundCheckboxBlank"
                    className={joinClassNames([
                      styles["radio"],
                      styles["radio--unselected"],
                    ])}
                    iconSize="2xl"
                    tabIndex={0}
                  />
                ) : (
                  <Icon
                    iconName="roundCheckboxFill"
                    className={joinClassNames([
                      styles["radio"],
                      styles["radio--selected"],
                    ])}
                    iconSize="2xl"
                    iconColor="cornflowerblue"
                    tabIndex={0}
                  />
                )}
              </div>
              <div className={styles["radio__wrapper"]}>
                <Text>{radio2}</Text>
                {filter.people ? (
                  <Icon
                    iconName="roundCheckboxFill"
                    className={joinClassNames([
                      styles["radio"],
                      styles["radio--selected"],
                    ])}
                    iconSize="2xl"
                    iconColor="cornflowerblue"
                    tabIndex={0}
                  />
                ) : (
                  <Icon
                    iconName="roundCheckboxBlank"
                    className={joinClassNames([
                      styles["radio"],
                      styles["radio--unselected"],
                    ])}
                    iconSize="2xl"
                    tabIndex={0}
                  />
                )}
              </div>
            </div>
            <div className={styles["radio__section__wrapper"]}>
              <Text status="bold" className={styles["heading"]}>
                {heading2}
              </Text>
              <div className={styles["radio__wrapper"]}>
                <Text>{radio3}</Text>
                {filter.location ? (
                  <Icon
                    iconName="roundCheckboxBlank"
                    className={joinClassNames([
                      styles["radio"],
                      styles["radio--unselected"],
                    ])}
                    iconSize="2xl"
                    tabIndex={0}
                  />
                ) : (
                  <Icon
                    iconName="roundCheckboxFill"
                    className={joinClassNames([
                      styles["radio"],
                      styles["radio--selected"],
                    ])}
                    iconSize="2xl"
                    iconColor="cornflowerblue"
                    tabIndex={0}
                  />
                )}
              </div>
              <div className={styles["radio__wrapper"]}>
                <Text>{radio4}</Text>
                {filter.location ? (
                  <Icon
                    iconName="roundCheckboxFill"
                    className={joinClassNames([
                      styles["radio"],
                      styles["radio--selected"],
                    ])}
                    iconSize="2xl"
                    iconColor="cornflowerblue"
                    tabIndex={0}
                  />
                ) : (
                  <Icon
                    iconName="roundCheckboxBlank"
                    className={joinClassNames([
                      styles["radio"],
                      styles["radio--unselected"],
                    ])}
                    iconSize="2xl"
                    tabIndex={0}
                  />
                )}
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer className={styles["footer"]}>
            <button className={styles["link"]} onClick={moveToSearchAdvanced}>
              <Text>{footer}</Text>
            </button>
          </Modal.Footer>
        </Modal.Content>
      </Modal.Container>
    </Modal>
  );
};

export default SearchFilterModal;
