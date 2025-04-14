import { useEffect, useRef } from "react";
import { usePostContext } from "../../hooks";
import styles from "./PostText.module.css";
import { joinClassNames } from "@shared/@common/utils";

interface PostTextProps {
  className?: string;
}

const PostText = ({ className }: PostTextProps) => {
  const classNames = joinClassNames([styles["post__text"], className]);
  const textRef = useRef<HTMLDivElement>(null);

  const { text } = usePostContext();

  useEffect(() => {
    if (!textRef.current) return;

    const postText = textRef.current;

    if (text) postText.innerHTML = text;
  }, []);

  return <div className={classNames} ref={textRef}></div>;
};

export default PostText;
