import styles from "./PostMedia.module.css";
import { joinClassNames } from "@shared/@common/utils";
import {
  detectMedia,
  MediaType,
  PostImage,
  PostVideo,
  usePostContext,
} from "@shared/pages/ui/Post";

interface PostMediaProps {
  className?: string;
}

const PostMedia = ({ className }: PostMediaProps) => {
  const classNames = joinClassNames([styles["post__media"], className]);

  const { media } = usePostContext();

  if (!media || media.length === 0) return null;

  return (
    <div className={classNames}>
      {(media as MediaType[]).map((medium, index) => {
        if (detectMedia(medium) === "image") {
          return <PostImage key={index} medium={medium} index={index} />;
        } else if (detectMedia(medium) === "video") {
          return <PostVideo key={index} medium={medium} index={index} />;
        } else {
          return null;
        }
      })}
    </div>
  );
};

export default PostMedia;
