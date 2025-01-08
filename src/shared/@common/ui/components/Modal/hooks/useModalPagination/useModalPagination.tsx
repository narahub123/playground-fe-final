import useModalContext from "../useModalContext/useModalContext";

/**
 * 모달 내에서 페이지 이동을 관리하는 훅입니다.
 * 이 훅은 현재 페이지, 페이지 수, 그리고 페이지 이동을 위한 함수를 제공합니다.
 *
 * @returns {object} 페이지 이동 관련 함수들
 * @returns {function} moveNext - 다음 페이지로 이동하는 함수
 * @returns {function} movePrev - 이전 페이지로 이동하는 함수
 * @returns {function} moveTo - 특정 페이지로 이동하는 함수
 */
const useModalPagination = () => {
  const { curPage, setCurPage, lengthOfList } = useModalContext();

  const isValidateState =
    setCurPage && curPage !== undefined && lengthOfList !== undefined;

  /**
   * 페이지를 한 칸 앞으로 이동합니다.
   * @description curPage가 undefined일 때나 lengthOfList가 0일 경우 이동을 막습니다.
   */
  const moveNext: () => void = () => {
    // 상태가 유효하지 않으면 함수 종료
    if (!isValidateState) return;

    // 마지막 페이지를 넘지 않도록 처리
    if (curPage + 1 > lengthOfList - 1) return;

    // setCurPage를 이용해 페이지를 1 증가시킵니다.
    setCurPage((prev) => prev + 1);
  };

  /**
   * 페이지를 한 칸 뒤로 이동합니다.
   * @description curPage가 0일 경우 이동을 막습니다.
   */
  const movePrev: () => void = () => {
    // 상태가 유효하지 않으면 함수 종료
    if (!isValidateState) return;

    // 첫 페이지를 넘지 않도록 처리
    if (curPage - 1 < 0) return;

    // setCurPage를 이용해 페이지를 1 감소시킵니다.
    setCurPage((prev) => prev - 1);
  };

  /**
   * 특정 페이지 번호로 이동합니다.
   * @param {number} pageNum 이동할 페이지 번호
   * @description 페이지 번호가 유효하지 않거나 범위를 벗어날 경우 이동을 막습니다.
   */
  const moveTo: (pageNum: number) => void = (pageNum) => {
    // 상태가 유효하지 않으면 함수 종료
    if (!isValidateState) return;

    // 유효하지 않은 페이지 번호를 넘지 않도록 처리
    if (pageNum > lengthOfList - 1 || pageNum < 0) return;

    // setCurPage를 이용해 특정 페이지로 이동합니다.
    setCurPage(pageNum);
  };

  return {
    moveNext,
    movePrev,
    moveTo,
  };
};

export default useModalPagination;
