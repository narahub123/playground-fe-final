import styles from "./PostVideo.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { joinClassNames } from "@shared/@common/utils";
import { usePostContext } from "@shared/pages/ui/Post";
import Video from "@shared/pages/ui/Video/Video";
import { Link } from "react-router-dom";

interface PostVideoProps {
  className?: string;
  medium: string;
  index: number;
}

const PostVideo = ({ className, medium, index }: PostVideoProps) => {
  // 언어 설정
  const { videoTitle } = useLanguageContent(["post", "PostVideo"]);
  const classNames = joinClassNames([styles["post__video"], className]);

  const { author, _id } = usePostContext();
  const { userId } = author;

  return (
    <div className={classNames}>
      <Link to={`/${userId}/status/${_id}/video/${index}`}>
        <Video
          src={medium}
          fit="contain"
          rounded="25px"
          className={styles["video"]}
          title={videoTitle}
        />
      </Link>
    </div>
  );
};

export default PostVideo;
