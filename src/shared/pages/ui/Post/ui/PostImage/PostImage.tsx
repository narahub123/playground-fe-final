import styles from "./PostImage.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { Image } from "@shared/@common/ui/components";
import { joinClassNames } from "@shared/@common/utils";
import { Link } from "react-router-dom";
import { usePostContext } from "@shared/pages/ui/Post";

interface PostImageProps {
  className?: string;
  medium: string;
  index: number;
  distance: number;
}

const PostImage = ({ className, medium, index, distance }: PostImageProps) => {
  // 언어 설정
  const { imageAlt } = useLanguageContent(["post", "PostImage"]);

  const classNames = joinClassNames([styles["post__image"], className]);

  const { author, _id } = usePostContext();
  const { userId } = author;

  return (
    <div
      className={classNames}
      style={{
        transform: `translateX(${-distance}px)`,
        transition: "transform 0.3s ease",
      }}
    >
      <Link to={`/${userId}/status/${_id}/photo/${index}`}>
        <Image
          src={medium}
          rounded="xl"
          fit="contain"
          className={styles["image"]}
          alt={imageAlt}
        />
      </Link>
    </div>
  );
};

export default PostImage;
