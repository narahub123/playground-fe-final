import styles from "./PostActions.module.css";
import { joinClassNames } from "@shared/@common/utils";
import { PostAction, PostActionType } from "@shared/pages/ui/Post";
import { useState } from "react";

interface PostActionsProps {
  className?: string;
}

const postActions: PostActionType[] = [
  "comments",
  "reposts",
  "likes",
  "views",
  "extra",
];

interface IPostAction {}

const PostActions = ({ className }: PostActionsProps) => {
  const classNames = joinClassNames([styles["post__actions"], className]);

  const [actions, setActions] = useState();

  return (
    <div className={classNames}>
      {postActions.map((action, index) => (
        <PostAction key={index} action={action} />
      ))}
    </div>
  );
};

export default PostActions;
