import styles from "./SearchFilterModal.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { getStandAloneModal } from "@shared/@common/models/selectors";
import { Modal, Text } from "@shared/@common/ui/components";
import { joinClassNames } from "@shared/@common/utils";
import { useSelector } from "react-redux";
import { useAppDispatch } from "@app/store";
import { onStandAlonClose } from "@shared/@common/models/slices/modalSlice";
import { Icon } from "@shared/@common/ui/icons";
import { useNavigate } from "react-router-dom";
import { PRIMARY_LINK } from "@shared/@common/constants";

interface SearchFilterModalProps {
  className?: string;
  filter: ISearchFilter;
  setFilter: React.Dispatch<React.SetStateAction<ISearchFilter>>;
}

interface ISearchFilter {
  people: boolean;
  location: boolean;
}

const SearchFilterModal = ({
  className,
  filter,
  setFilter,
}: SearchFilterModalProps) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

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

  const setPeopelFilter = (isOn: boolean) => {
    setFilter((prev) => ({
      ...prev,
      people: isOn,
    }));

    onClose();
  };
  const setLocationFilter = (isOn: boolean) => {
    setFilter((prev) => ({
      ...prev,
      location: isOn,
    }));

    onClose();
  };

  return (
    <Modal
      domId="search-filter"
      isOpen={isOpen}
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
              <div
                className={styles["radio__wrapper"]}
                onClick={() => setPeopelFilter(false)}
              >
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
              <div
                className={styles["radio__wrapper"]}
                onClick={() => setPeopelFilter(true)}
              >
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
              <div
                className={styles["radio__wrapper"]}
                onClick={() => setLocationFilter(false)}
              >
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
              <div
                className={styles["radio__wrapper"]}
                onClick={() => setLocationFilter(true)}
              >
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
