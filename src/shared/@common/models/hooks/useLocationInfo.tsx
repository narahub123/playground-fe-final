import { useAppDispatch } from "@app/store";
import { fetchLocationAPI } from "@shared/@common/apis";
import { useEffect, useState } from "react";

const useLocationInfo = (
  reducer: (value?: any) => { type: string; payload: any }
) => {
  const dispatch = useAppDispatch();
  const [loaded, setLoaded] = useState(false); // 요청 완료 여부 상태

  useEffect(() => {
    if (loaded) return; // 이미 요청이 완료되었으면 실행 안 함

    const geolocation = window.navigator.geolocation;

    const success = async (pos: GeolocationPosition) => {
      const location = {
        county: "",
        city: "",
        state: "",
        country: "",
      };
      const { latitude, longitude } = pos.coords;

      try {
        const data = await fetchLocationAPI(latitude, longitude);

        const { country, county, city, state, suburb, borough } = data.address;

        location.country = country || "";
        location.state = state || city || "";
        location.city = city || "";
        location.county = county || borough || suburb || "";

        dispatch(reducer(location));
        setLoaded(true); // 요청 완료 상태 갱신
      } catch (error) {
        console.error("위치정보 취득 실패", error);
        setLoaded(true); // 에러가 발생해도 요청 완료로 간주
      }
    };

    const error = (error: GeolocationPositionError) => {
      console.error("Geolocation 에러", error);
      setLoaded(true); // 에러 시에도 요청 완료 처리
    };

    const options = {
      maximumAge: 0,
      timeout: 5000,
      enableHighAccuracy: true,
    };

    geolocation.getCurrentPosition(success, error, options);
  }, [dispatch, reducer, loaded]); // 의존성에 따라 재실행 여부 결정
};

export default useLocationInfo;
