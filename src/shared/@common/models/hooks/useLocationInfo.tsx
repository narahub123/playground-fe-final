import { fetchLocationAPI } from "@shared/@common/apis";
import { useEffect, useState } from "react";

const useLocationInfo = () => {
  const [location, setLocation] = useState({
    county: "",
    city: "",
    state: "",
    country: "",
  });

  useEffect(() => {
    const geolocation = window.navigator.geolocation;

    const success = async (pos: GeolocationPosition) => {
      const { latitude, longitude } = pos.coords;

      try {
        const data = await fetchLocationAPI(latitude, longitude);

        const { country, county, city, state, suburb, borough } = data.address;

        setLocation({
          country: country,
          state: state || city,
          city: city,
          county: county || borough || suburb,
        });
      } catch (error) {
        console.error("위치정보 취득 실패", error);
      }
    };

    const error = (error: GeolocationPositionError) => {
      console.error("Geolocation 에러", error);
    };

    const options = {
      maximumAge: 0,
      timeout: 5000,
      enableHighAccuracy: true,
    };

    geolocation.getCurrentPosition(success, error, options);
  }, []); // 한 번만 실행되도록 빈 배열로 설정

  return location; // location만 반환
};

export default useLocationInfo;
