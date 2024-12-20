import { joinClassNames } from "@shared/@common/utils";
import styles from "./Text.module.css";

interface TextProps {
  text: string | number; // 내용
  type?: "heading1" | "heading2" | "heading3" | "expl" | "normal"; // 타입
  status?: "default" | "error"; // 상태
  subClassName?: string; // 스타일 추가
}

const Text = ({
  text,
  type = "normal",
  status = "default",
  subClassName,
}: TextProps) => {
  //빈 텍스트 처리
  if (!(text as string).trim()) return null;

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

  const statusClassName = status === "error" ? styles.error : undefined;

  return (
    <Comp
      className={joinClassNames([className, statusClassName, subClassName])}
    >
      {text}
    </Comp>
  );
};

export default Text;
