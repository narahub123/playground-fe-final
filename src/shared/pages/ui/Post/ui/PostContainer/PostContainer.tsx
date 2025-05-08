import styles from "./PostContainer.module.css";
import { ReactNode, useState } from "react";
import { joinClassNames } from "@shared/@common/utils";
import { PostContextProvider } from "../../context";
import { IPostContext, PostType } from "../../types";
import { IPost } from "@shared/@common/types";
import { useNavigate } from "react-router-dom";

interface PostContainerProps {
  className?: string;
  post: IPost | undefined;
  children: ReactNode;
  linkDisabled?: boolean;
  postType: PostType;
}

const PostContainer = ({
  className,
  children,
  post,
  linkDisabled = false,
  postType,
}: PostContainerProps) => {
  const classNames = joinClassNames([styles["post__container"], className]);
  const [mentions, setMentions] = useState<string[]>([]);
  const navigate = useNavigate();

  if (!post) return null;

  const value: IPostContext = { ...post, mentions, setMentions, postType };

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();

    navigate(`/${post.author.userId}/status/${post._id}`);
  };

  return (
    <PostContextProvider value={value}>
      <article
        className={classNames}
        onClick={linkDisabled ? undefined : (e) => handleClick(e)}
      >
        {children}
      </article>
    </PostContextProvider>
  );
};

export default PostContainer;
