import styles from "./PreviewBadge.module.css";

interface PreviewBadgeProps {
  url: string;
}

const PreviewBadge = ({ url }: PreviewBadgeProps) => {
  const badgeText = url.split(";base64")[0].includes("image")
    ? url.split(";base64")[0].split("image/")[1].toUpperCase()
    : url.split(";base64")[0].split("video/")[1].toUpperCase();

  return <div className={styles["preview__badge"]}>{badgeText}</div>;
};

export default PreviewBadge;
