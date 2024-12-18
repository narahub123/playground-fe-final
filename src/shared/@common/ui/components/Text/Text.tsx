import styles from "./Text.module.css";

interface TextProps {
  text: string; // 내용
  type?: "heading" | "expl" | "normal"; // 타입
}

const Text = ({ text, type = "normal" }: TextProps) => {
  // 태그 결정
  const Comp = type === "heading" ? "h3" : "p";
  // 스타일 결정
  const style =
    type === "heading"
      ? styles.heading
      : type === "expl"
      ? styles.expl
      : styles.normal;

  return <Comp className={`${style}`}>{text}</Comp>;
};

export default Text;
