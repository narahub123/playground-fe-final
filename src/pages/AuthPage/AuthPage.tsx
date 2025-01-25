import styles from "./AuthPage.module.css";
import { Text } from "@shared/@common/ui/components";
import { AuthButton } from "@shared/auth/ui/components";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { AuthButtonItemType, OauthType } from "@shared/auth/types";
import { generateSocialAuthUrl } from "@features/auth-social/utils";
import { useAppDispatch } from "@app/store";
import {
  setBirthInSignup,
  setEmailInSignup,
  setEmailOauthInSignup,
  setGenderInSignup,
  setPhoneInSignup,
  setPhoneOauthInSignup,
  setProfileImageInSignup,
  setUsernameInSignup,
} from "@shared/auth/models/slices/signupSlice";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { onParallelModalOpen } from "@shared/@common/models/slices/modalSlice";
import { ModalLayout } from "@shared/@common/layouts";
import { useSelector } from "react-redux";
import { getParallelModals } from "@shared/@common/models/selectors";
import { ParallelModals } from "@shared/@common/types";

const AuthPage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  // 모달창 상태 정보
  const { signup, login } = useSelector(getParallelModals);

  // 경로 정보 취득
  const { pathname } = useLocation();

  const onOpen = (type: ParallelModals) => {
    dispatch(onParallelModalOpen(type));
    navigate(`i/flow/${type}`);
  };

  // oauth 회원 가입 처리
  useEffect(() => {
    // 부모 페이지에서 전달된 메시지를 처리하는 함수
    const handleMessage = (e: MessageEvent) => {
      // 메시지의 출처가 현재 페이지와 동일한지 확인 (보안 체크)
      if (e.origin !== window.origin) return;

      // 메시지에서 전달된 데이터 구조 추출
      const { email, username, profileImage, gender, phone, birth } = e.data;

      // email과 username이 없으면 처리를 중단
      if (!email || !username) return;

      // 전달된 데이터가 존재할 경우 리덕스 상태 업데이트
      dispatch(setEmailInSignup(email)); // 이메일 저장
      dispatch(setEmailOauthInSignup(true)); // 이메일이 oauth에서 가져온 것임을 표시
      dispatch(setUsernameInSignup(username)); // 사용자 이름 저장
      dispatch(setProfileImageInSignup(profileImage)); // 프로필 이미지 저장

      // 성별이 있으면 저장
      if (gender) dispatch(setGenderInSignup(gender));

      // 전화번호가 있으면 저장
      if (phone) {
        dispatch(setPhoneInSignup(phone));
        dispatch(setPhoneOauthInSignup(true)); // 휴대폰이 oauth에서 가져온 것임을 표시
      }

      // 생일이 있으면 날짜 정보를 파싱하여 저장
      if (birth) {
        const year = (birth as string).slice(0, 4); // 연도 추출
        const month = (birth as string).slice(4, 6); // 월 추출
        const date = (birth as string).slice(6, 8); // 일 추출

        // 파싱된 생일 정보를 리덕스 상태에 저장
        dispatch(
          setBirthInSignup({
            year, // 연도 저장
            month, // 월 저장
            date, // 일 저장
          })
        );
      }

      // 유효한 데이터가 확인되면 모달을 열기 위해 onOpen 호출
      onOpen("signup");
    };

    // 부모 페이지에서 메시지가 오면 handleMessage를 실행
    window.addEventListener("message", handleMessage);

    // 컴포넌트 언마운트 시 메시지 리스너를 제거하여 메모리 누수를 방지
    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []); // 의존성 배열을 빈 배열로 설정하여 컴포넌트가 처음 렌더링될 때만 실행

  // 새로고침 시 모달창 유지
  useEffect(() => {
    if (pathname.includes("i/flow/signup") && !signup) {
      onOpen("signup");
    } else if (pathname.includes("i/flow/login") && !login) {
      onOpen("login");
    }
  }, [pathname]);

  // 언어 설정
  const { title, heading1, signupList, heading2, loginList } =
    useLanguageContent(["pages", "AuthPage"]);

  const handleOauth = (type: OauthType) => {
    const url = generateSocialAuthUrl(type);

    if (url) {
      window.open(url, "_blank", "width=800,height=600,top=100,left=100");
    }
  };

  return (
    <div className={styles[`auth-page`]}>
      <ModalLayout />
      <header className={styles.header}>
        <Text type="heading1">{title}</Text>
      </header>
      <main className={styles.main}>
        <div className={styles.section}>
          <Text type="heading3">{heading1}</Text>
          <ul className={styles.list}>
            {(signupList as AuthButtonItemType[]).map((item, idx) => (
              <AuthButton
                key={idx}
                item={item}
                handleClick={
                  item.type
                    ? () => handleOauth(item.type as OauthType)
                    : () => onOpen("signup")
                }
              />
            ))}
          </ul>
        </div>
        <div className={styles.section}>
          <Text type="heading3">{heading2}</Text>
          <ul className={styles.list}>
            {(loginList as AuthButtonItemType[]).map((item, idx) => (
              <AuthButton
                key={idx}
                item={item}
                handleClick={() => onOpen("login")}
              />
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
};

export default AuthPage;
