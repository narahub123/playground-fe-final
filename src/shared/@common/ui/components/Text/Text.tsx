import styles from "./Text.module.css";

interface TextProps {
  text: string; // 내용
  type?: "heading1" | "heading2" | "heading3" | "expl" | "normal"; // 타입
  style?: string; // 스타일 추가
}

const Text = ({ text, type = "normal", style }: TextProps) => {
  //빈 텍스트 처리
  if (!text.trim()) return null;

  // 태그 결정
  const Comp =
    type === "heading1"
      ? "h1"
      : type === "heading2"
      ? "h2"
      : type === "heading3"
      ? "h3"
      : "p";

  // 스타일 결정
  const className = styles[type] || styles.normal;

  return <Comp className={`${className} ${style || ""}`}>{text}</Comp>;
};

export default Text;
