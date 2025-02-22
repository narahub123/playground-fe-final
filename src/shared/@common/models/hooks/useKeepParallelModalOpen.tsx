import { useAppDispatch } from "@app/store";
import { ParallelModals } from "@shared/@common/types";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { onParallelModalOpen } from "../slices/modalSlice";

const useKeepParallelModalOpen = (path: string, modal: ParallelModals) => {
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname.includes(path)) {
      dispatch(onParallelModalOpen(modal));
    }
  }, [pathname]);
};

export default useKeepParallelModalOpen;
