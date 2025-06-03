import { useAppDispatch } from "@app/store";
import styles from "./LocationModal.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { getParalleModal } from "@shared/@common/models/selectors";
import { joinClassNames } from "@shared/@common/utils";
import { useSelector } from "react-redux";
import {
  onParallelModalClose,
  onParallelModalOpen,
} from "@shared/@common/models/slices/modalSlice";
import { Modal, Text } from "@shared/@common/ui/components";
import { Icon } from "@shared/@common/ui/icons";
import { LuSearch } from "react-icons/lu";
import { ICountry } from "@shared/@common/types";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { fetchWithAuth } from "@shared/pages";
import { updateSelectedLocation } from "@shared/@common/models/slices/userSlice";

interface LocationModalProps {
  className?: string;
}

const LocationModal = ({ className }: LocationModalProps) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [countries, setCountries] = useState<ICountry[]>([]);
  const { pathname } = useLocation();
  // 언어 설정
  const { title, countryNames } = useLanguageContent([
    "explore",
    "LocationModal",
  ]);

  // 모달 열기
  useEffect(() => {
    if (!pathname) return;

    if (pathname.includes("/explore/location")) {
      dispatch(onParallelModalOpen("location"));
    } else {
      dispatch(onParallelModalClose("location"));
    }
  }, [pathname]);

  useEffect(() => {
    if (!countryNames) return;

    let countries = [];

    if (!search) {
      countries = countryNames;
    } else {
      countries = countryNames.filter((country: ICountry) =>
        country.name.startsWith(search)
      );
    }

    const filter = countries.sort((a: ICountry, b: ICountry) =>
      a.name.localeCompare(b.name)
    );

    setCountries(filter);
  }, [countryNames, search]);

  const isOpen = useSelector(getParalleModal("location"));

  const classNames = joinClassNames([styles["location__modal"], className]);

  const onClose = () => {
    dispatch(onParallelModalClose("location"));
    navigate("/explore");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const keyword = e.target.value;

    setSearch(keyword);
  };

  const handleSelection = async (lang: string) => {
    const country = lang.split("-")[1];

    try {
      const result = await fetchWithAuth(
        `/users/me`,
        {
          method: "PATCH",
        },
        {
          selectedLocation: country,
        }
      );

      if (result.success) {
        dispatch(updateSelectedLocation(country));
        setSearch("");
        onClose();
      } else {
        console.error("위치 지정 도중 에러 발생");
      }
    } catch (error) {
      console.error("위치 지정 도중 에러 발생", error);
    }
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
              <Icon iconName="arrowLeft" onClick={onClose} />
            </div>
            <Text type="heading3">{title}</Text>
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
                  onChange={handleChange}
                  value={search}
                />
              </div>
            </div>
            <div>
              {countries.map((country: ICountry) => (
                <div
                  className={styles["item"]}
                  onClick={() => handleSelection(country.lang[0])}
                  key={country.name}
                >
                  <button className={styles["country"]}>{country.name}</button>
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
