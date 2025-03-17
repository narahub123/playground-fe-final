import styles from "./VideoPreview.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";

interface VideoPreviewProps {
  video: string;
}

const VideoPreview = ({}: VideoPreviewProps) => {
  // 언어 설정
  //   const {} = useLanguageContent(["", "VideoPreview"]);

  return <div className={styles["video__preview"]}>VideoPreview</div>;
};

export default VideoPreview;
