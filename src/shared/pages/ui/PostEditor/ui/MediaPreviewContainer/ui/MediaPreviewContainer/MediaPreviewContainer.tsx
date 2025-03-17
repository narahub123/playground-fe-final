import styles from "./MediaPreviewContainer.module.css";
import { useSelector } from "react-redux";
import { selectPostEditor } from "@shared/pages/ui/PostEditor/models/selectors";
import {
  ImagePreview,
  VideoPreview,
} from "@shared/pages/ui/PostEditor/ui/MediaPreviewContainer";

interface MediaPreviewContainerProps {}

const MediaPreviewContainer = ({}: MediaPreviewContainerProps) => {
  const { images, videos } = useSelector(selectPostEditor);
  return (
    <div className={styles["media__preview__container"]}>
      {images.map((image, index) => (
        <ImagePreview image={image} key={`image_${index + 1}`} />
      ))}
      {videos.map((video, index) => (
        <VideoPreview video={video} key={`video_${index + 1}`} />
      ))}
    </div>
  );
};

export default MediaPreviewContainer;
