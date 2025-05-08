import { useEffect, useRef, useState } from "react";
import styles from "./HomeCensor.module.css";
import { joinClassNames } from "@shared/@common/utils";
import { fetchWithAuth } from "@shared/pages";
import { useAppDispatch } from "@app/store";
import { useSelector } from "react-redux";
import { selectIsEnd, selectPage } from "@shared/@common/models/selectors";
import { Spinner } from "@shared/@common/ui/components";
import {
  addPage,
  addPosts,
  setIsEnd,
} from "@shared/@common/models/slices/feedSlice";

interface HomeCensorProps {
  className?: string;
}

const HomeCensor = ({ className }: HomeCensorProps) => {
  const dispatch = useAppDispatch();
  const censorRef = useRef<HTMLDivElement>(null);
  const observerRef = useRef<IntersectionObserver>();
  const classNames = joinClassNames([
    styles["home__censor__wrapper"],
    className,
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [isShowing, setIsShowing] = useState(false);

  const page = useSelector(selectPage);
  const isEnd = useSelector(selectIsEnd);

  const getPosts = async (page: number) => {
    setIsLoading(true);
    setIsShowing(false);
    try {
      const result = await fetchWithAuth(`/posts?skip=${page}`);

      if (result.success) {
        const posts = result.data.posts;

        dispatch(addPosts(posts));

        if (posts.length < 10) {
          dispatch(setIsEnd(true));
          setIsShowing(false);
        } else {
          dispatch(addPage());
        }
      } else {
        console.error("포스트 목록 조회 실패");
      }
    } catch (error) {
      console.error("포스트 목록 조회 중 에러 발생", error);
    } finally {
      setIsLoading(false);
    }
  };

  const observeCensor = (page: number) => {
    if (!censorRef.current) return;

    const censor = censorRef.current;

    const options: IntersectionObserverInit = {
      threshold: 1,
    };

    const callback: IntersectionObserverCallback = async (entries) => {
      if (entries[0].isIntersecting) {
        await getPosts(page);
      }
    };

    const observer = new IntersectionObserver(callback, options);

    observer.observe(censor);

    return observer;
  };

  // 센서 감지
  useEffect(() => {
    if (!censorRef.current) return;

    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    observerRef.current = observeCensor(page);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [isShowing, page]);

  // 지연
  useEffect(() => {
    if (isEnd || isLoading) return;

    const timer = setTimeout(() => {
      setIsShowing((prev) => (prev === false ? true : prev));
    }, 800);

    return () => {
      clearTimeout(timer);
    };
  }, [page, isLoading]);

  if (!isShowing || isEnd) return null;

  return (
    <div className={classNames}>
      {isLoading ? (
        <Spinner color="cornflowerblue" size={1.5} />
      ) : (
        <div className={styles["censor"]} ref={censorRef}>
          센서
        </div>
      )}
    </div>
  );
};

export default HomeCensor;
