import styles from "./PreviewBadge.module.css";

interface PreviewBadgeProps {
  url: string;
}

const PreviewBadge = ({ url }: PreviewBadgeProps) => {
  return (
    <div className={styles["preview__badge"]}>
      {url.split(";base64")[0].split("image/")[1].toUpperCase()}
    </div>
  );
};

export default PreviewBadge;
