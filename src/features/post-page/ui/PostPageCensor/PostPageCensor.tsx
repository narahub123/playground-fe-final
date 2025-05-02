import { useEffect, useRef, useState } from "react";
import styles from "./PostPageCensor.module.css";
import { joinClassNames } from "@shared/@common/utils";
import { useSelector } from "react-redux";
import {
  selectIsCommentLoading,
  selectIsEnd,
  selectSkip,
  setCommentLoading,
  setComments,
  setIsEnd,
  setSkip,
} from "@features/post-page/models";
import { useLocation } from "react-router-dom";
import { useAppDispatch } from "@app/store";
import { fetchWithAuth } from "@shared/pages";
import { COMMENT_LENGTH } from "@shared/@common/constants";

interface PostPageCensorProps {
  className?: string;
}

const PostPageCensor = ({ className }: PostPageCensorProps) => {
  const classNames = joinClassNames([styles["post__page__censor"], className]);
  const dispatch = useAppDispatch();
  const censorRef = useRef<HTMLDivElement>(null);
  const observerRef = useRef<IntersectionObserver | undefined>();
  const { pathname } = useLocation();
  const [isShowing, setIsShowing] = useState(false);
  const isLoading = useSelector(selectIsCommentLoading);
  const isEnd = useSelector(selectIsEnd);
  const skip = useSelector(selectSkip);

  // 댓글 
  const getComments = async (skip: number) => {
    dispatch(setCommentLoading(true));

    const postId = pathname.split("status/")[1];
    try {
      const result = await fetchWithAuth(
        `/posts/${postId}/comments?skip=${skip}`
      );
      if (result.success) {
        const comments = result.data.comments;

        dispatch(setComments(comments));

        // 반환 값이 최대 댓글 값 보다 작은 경우 isEnd를 true로 변경함
        if (comments.length < COMMENT_LENGTH) {
          dispatch(setIsEnd(true));
        } else {
          // 반환 값이 최대 댓글 값과 같은 경우 skip 설정
          dispatch(setSkip());
        }
      } else {
        console.error("댓글 조회 실패");
      }
    } catch (error) {
      console.error("댓글 조회 중 에러 발생", error);
    } finally {
      dispatch(setCommentLoading(false));
    }
  };

  const observeCensor = (skip: number) => {
    if (!censorRef.current) return;

    const censor = censorRef.current;

    const options: IntersectionObserverInit = {
      threshold: 1,
    };

    const callback: IntersectionObserverCallback = async (entries) => {
      if (entries[0].isIntersecting) {
        await getComments(skip);
      }
    };

    const observer = new IntersectionObserver(callback, options);

    observer.observe(censor);

    return observer;
  };

  // 센셔 표시 여부 결정 및 지연
  useEffect(() => {
    if (isLoading) {
      // loading 이면 숨기기
      setIsShowing((prev) => (prev === true ? false : prev));
      return;
    }

    // isEnd 이면 숨기기
    if (isEnd) {
      setIsShowing((prev) => (prev === true ? false : prev));
      return;
    }

    const timer = setTimeout(() => {
      setIsShowing((prev) => (prev === false ? true : prev));
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [isLoading, isEnd]);

  // 센서 감지
  useEffect(() => {
    if (!censorRef.current) return;

    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    observerRef.current = observeCensor(skip);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [isShowing, skip]);

  if (!isShowing) return;

  return <div className={classNames} ref={censorRef} />;
};

export default PostPageCensor;
