import { useAppDispatch } from "@app/store";
import styles from "./ProfilePageMedia.module.css";
import { joinClassNames } from "@shared/@common/utils";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  selectPage,
  selectPosts,
  selectUser,
} from "@shared/@common/models/selectors";
import {
  setIsFeedLoaing,
  setPosts,
} from "@shared/@common/models/slices/feedSlice";
import { fetchWithAuth } from "@shared/pages";
import { useEffect } from "react";
import { IPost } from "@shared/@common/types";
import { MediaRow } from "@features/profile-page/ui";

interface ProfilePageMediaProps {
  className?: string;
}

const ProfilePageMedia = ({ className }: ProfilePageMediaProps) => {
  const classNames = joinClassNames([
    styles["profile__page__media"],
    className,
  ]);

  const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  const { userId: userHandle } = useSelector(selectUser);
  const posts = useSelector(selectPosts);
  const page = useSelector(selectPage);

  const getPosts = async (userId: string) => {
    const isCurrentUser = userId === userHandle;
    dispatch(setIsFeedLoaing(true));
    dispatch(setPosts([]));

    try {
      const api = isCurrentUser
        ? `/posts/me/media?skip=${page}`
        : `/posts/${userId}/media?skip=${page}`;

      const result = await fetchWithAuth(api);

      if (result.success) {
        dispatch(setPosts(result.data.posts));
      } else {
        console.error("포스트 가져오기 실패");
      }
    } catch (error) {
      console.error("포스트 가져오기 도중 에러 발생", error);
    } finally {
      dispatch(setIsFeedLoaing(false));
    }
  };

  useEffect(() => {
    const userId = pathname.split("/")[1];

    getPosts(userId);
  }, [pathname]);

  const rows = posts.reduce<IPost[][]>((acc, row, index) => {
    const rowIndex = Math.floor(index / 3);
    if (!acc[rowIndex]) {
      acc[rowIndex] = [];
    }
    acc[rowIndex].push(row);
    return acc;
  }, []);

  return (
    <div className={classNames}>
      {rows.map((row, index) => {
        return <MediaRow key={index} row={row} />;
      })}
    </div>
  );
};

export default ProfilePageMedia;
