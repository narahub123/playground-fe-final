import { joinClassNames } from "@shared/@common/utils";
import { useInputContext } from "../../context";
import styles from "./InputDropdown.module.css";
import Portal from "../../../Portal/Portal";
import { useEffect, useRef, useState } from "react";

const InputDropdown = () => {
  const itemsRef = useRef<(HTMLLIElement | null)[]>([]);
  // InpuContext를 통해 상태 및 참조 가져오기
  const {
    list, // 드롭다운 목록
    isDropdownOpen, // 드롭다운 여닫기 상태
    mainRef, // mainRef 가져오기
    inputValue, // 선택 항목을 알기 위해서
  } = useInputContext();

  // InputMain의 위치와 크기를 저장할 상태 정의
  const [mainRect, setMainRect] = useState<{
    top: number;
    left: number;
    width: number;
    height: number;
  } | null>(null);

  // 드롭다운의 높이를 저장할 상태
  const [dropdownHeight, setDropdownHeight] = useState(0);

  // InputMain의 위치와 크기를 계산하여 상태에 저장
  useEffect(() => {
    // mainRef가 유효하지 않으면 함수 실행 중단
    if (!mainRef || !mainRef.current) return;

    // InputMain의 위치와 크기를 갱신하는 함수
    const updateMainPosition = () => {
      const main = mainRef.current as HTMLElement; // mainRef에서 DOM 노드 가져오기
      const mainRect = main.getBoundingClientRect(); // DOM 위치와 크기 계산

      // 계산된 위치와 크기를 상태에 저장
      setMainRect({
        top: mainRect.top, // 화면의 위쪽 기준 위치
        left: mainRect.left, // 화면의 왼쪽 기준 위치
        width: mainRect.width, // 요소의 너비
        height: mainRect.height, // 요소의 높이
      });
    };

    // 브라우저 창 크기 변경 또는 스크롤 이벤트 발생 시 위치와 크기를 업데이트
    window.addEventListener("resize", updateMainPosition); // 브라우저 창 크기 변화 감지
    window.addEventListener("scroll", updateMainPosition); // 스크롤 이벤트 감지

    // 초기 위치와 크기를 계산
    updateMainPosition();

    // 컴포넌트 언마운트 시 이벤트 리스너 제거
    return () => {
      window?.removeEventListener("resize", updateMainPosition); // resize 이벤트 제거
      window?.removeEventListener("scroll", updateMainPosition); // scroll 이벤트 제거
    };
  }, [mainRef, mainRef?.current]); // mainRef가 변경될 때마다 효과 실행

  // InputMain의 위치를 통한 dropdown 높이 동적 적용
  useEffect(() => {
    if (!mainRef || !mainRef.current) return;

    const updateDropdownHeight = () => {
      const main = mainRef.current as HTMLElement;

      const bottom = main.getBoundingClientRect().bottom || 0;
      const height = window.innerHeight - bottom;

      setDropdownHeight(height);
    };

    // 브라우저 창 크기 변경 또는 스크롤 이벤트 발생 시 높이 업데이트
    window.addEventListener("resize", updateDropdownHeight); // 브라우저 창 크기 변화 감지
    window.addEventListener("scroll", updateDropdownHeight); // 스크롤 이벤트 감지

    updateDropdownHeight();

    return () => {
      window?.removeEventListener("resize", updateDropdownHeight); // resize 이벤트 제거
      window?.removeEventListener("scroll", updateDropdownHeight); // scroll 이벤트 제거
    };
  }, [mainRef]);

  // 선택 항목으로 스크롤 이동
  useEffect(() => {
    if (!isDropdownOpen) return; // 드롭다운이 열려있을 때만 실행

    const timer = setTimeout(() => {
      const curIndex =
        list?.findIndex((item) => item.value === inputValue) || 0; // 선택 항목의 현재 위치

      const selected = itemsRef.current[curIndex]; // 선택된 항목 가져오기

      if (!selected) return; // 선택된 항목이 없다면 종료

      selected?.scrollIntoView({
        behavior: "smooth", // 부드러운 스크롤 효과
        block: "center", // 항목을 화면 중앙에 위치하도록 스크롤
      });
    }, 0); // 렌더링 직후에 실행되도록 0ms 지연 후 호출

    return () => clearTimeout(timer); // 컴포넌트 언마운트 시 타이머 제거
  }, [inputValue, isDropdownOpen]); // inputValue나 isDropdownOpen이 변경될 때마다 실행

  // 드롭다운에 사용할 리스트가 없으면 표시하지 않음
  if (!list) return;

  // mainRect가 유효하지 않으면 표시하지 않음
  if (!mainRect) return;
  const { top, left, width, height } = mainRect; // 위치와 크기 정보를 구조 분해 할당

  return (
    // Portal을 통해 드롭다운을 외부 DOM에 렌더링
    <Portal id="dropdown">
      <div
        className={joinClassNames([
          styles["input__dropdown"], // 기본 드롭다운 스타일
          isDropdownOpen
            ? styles["input__dropdown--open"] // 드롭다운 열림 상태
            : styles["input__dropdown--close"], // 드롭다운 닫힘 상태
        ])}
        style={{
          top: top + height + 2, // 드롭다운의 Y 위치: InputMain 바로 아래
          left, // 드롭다운의 X 위치: InputMain과 동일
          width, // 드롭다운의 너비: InputMain과 동일
        }}
      >
        <ul
          className={styles[`input__list`]}
          style={{
            maxHeight: isDropdownOpen ? dropdownHeight : 0, // 드롭다운이 열릴 때 높이를 적용
          }}
        >
          {list?.map((item, index) => {
            const selectedCond = inputValue === item.value;
            return (
              <li
                key={index}
                className={joinClassNames([
                  styles[`input__item`],
                  selectedCond ? styles[`input__item--selected`] : "",
                ])}
                ref={(el) => (itemsRef.current[index] = el)} // 각 항목에 Ref 설정
              >
                {item.text} {/* 리스트 항목 텍스트 표시 */}
              </li>
            );
          })}
        </ul>
      </div>
    </Portal>
  );
};

export default InputDropdown;
