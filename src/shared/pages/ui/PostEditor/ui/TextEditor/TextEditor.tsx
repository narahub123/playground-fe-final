import { ReactNode, useEffect, useRef, useState } from "react";
import styles from "./TextEditor.module.css";
import { joinClassNames } from "@shared/@common/utils";

interface TextEditorProps {
  className?: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
}

interface ITextLine {
  id: string;
  content: ReactNode;
}

const TextEditor = ({ className }: TextEditorProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const linesRef = useRef<(HTMLDivElement | null)[]>([]);
  const handleInput = (e: React.FormEvent<HTMLDivElement>) => {
    const text = e.currentTarget.innerText;
    console.log(text);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLSpanElement>) => {
    const key = e.key;

    if (key === "Enter") {
      e.preventDefault();
      handleEnter();
    } else if (key === "Backspace") {
      handleBackspace();
    }
  };

  const [lines, setLines] = useState<ITextLine[]>([
    {
      id: "0",
      content: (
        <span
          contentEditable={true}
          onInput={handleInput}
          className={styles["text__editor__item"]}
          data-placeholder={"작성해라"}
          onKeyDown={handleKeyDown}
        />
      ),
    },
  ]);

  console.log(lines);

  // 줄바꿈
  const handleEnter = () => {
    setLines((prev) => {
      return [
        ...prev,
        {
          id: prev.length.toString(),
          content: (
            <span
              contentEditable={true}
              onInput={handleInput}
              className={styles["text__editor__item"]}
              onKeyDown={handleKeyDown}
            />
          ),
        },
      ];
    });
  };

  // 삭제
  const handleBackspace = () => {
    const selection = window.getSelection();
    if (!selection) return;
    const { focusNode, focusOffset, isCollapsed } = selection;

    // 선택 영역의 마지막이 0이고 선택 영역의 시작과 끝이 같은 경우
    if (focusOffset === 0 && isCollapsed) {
      console.log("조건 만족");

      //
      const targetNode =
        focusNode?.nodeType === Node.TEXT_NODE
          ? focusNode.parentNode
          : focusNode;
      // 커서 요소가 span인지 확인
      if (targetNode instanceof HTMLSpanElement) {
        console.log("조건 만족 22");
        // 형제 요소가 있는지 확인
        const prevSiblingSpan = targetNode.previousElementSibling;
        console.log("이전 형제 요소 존재 확인", prevSiblingSpan);

        // 이전 형제 요소 있음
        if (prevSiblingSpan) {
          console.log("이전 형제 있음");
          // 현재 노드의 문자열
          const targetNodeContext = targetNode.textContent;

          // 이전 형제 노드에 문자열을 삽입
          (prevSiblingSpan.textContent as string) += targetNodeContext;

          // 현재 노드 삭제
          targetNode.remove();

          // 이후 노드
          const nextSiblingSpan = targetNode.nextElementSibling;
          console.log("이후 형제 요소", nextSiblingSpan);

          // 이후 형제 요소가 존재하는 경우
          if (nextSiblingSpan) {
            const nextDataType = nextSiblingSpan.getAttribute("data-type");
            const prevDataType = prevSiblingSpan.getAttribute("data-type");

            // 이전 형제 요소와 이후 형제 요소의 타입 확인
            if (nextDataType === prevDataType) {
              // 이후 형제 요소의 텍스트를 이전 형제 요소에 삽입
              (prevSiblingSpan.textContent as string) +=
                nextSiblingSpan.textContent;

              // 이후 형제 요소 삭제
              nextSiblingSpan.remove();

              // 이전 형제 요소의 타입 삭제
              prevSiblingSpan.removeAttribute("data-type");

              // 이후 이후 형제 요소 존재 확인
              const nextNextSibilingSpan = nextSiblingSpan.nextElementSibling;
              console.log("이후 이후 형제 요소", nextNextSibilingSpan);

              // 이후 이후 형제 요소가 존재하는 경우
              if (nextNextSibilingSpan) {
                const nextNextDataType =
                  nextNextSibilingSpan.getAttribute("data-type");

                // 이전 형제 노드의 타입과 이후 이후 노드의 타입이 일치하는 경우
                if (prevDataType === nextNextDataType) {
                  const nextNextContext = nextNextSibilingSpan.textContent;

                  (prevSiblingSpan.textContent as string) += nextNextContext;

                  nextNextSibilingSpan.remove();
                }

                const prevPrevSiblingSpan =
                  prevSiblingSpan.previousElementSibling;
                console.log("이전 이전 형제 노드", prevPrevSiblingSpan);

                // 이전 이전 형제 노드가 존재하는 경우
                if (prevPrevSiblingSpan) {
                  const prevPrevDataType =
                    prevPrevSiblingSpan.getAttribute("data-type");

                  // 이전 형제 노드와 이전 이전 형제 노드의 타입이 일치하는 경우
                  if (prevDataType === prevPrevDataType) {
                    // 이전 형제 노드의 텍스트를 이전 이전 노드에 삽입
                    (prevPrevSiblingSpan.textContent as string) +=
                      prevSiblingSpan.textContent;

                    // 이전 노드 삭제
                    prevSiblingSpan.remove();
                  }
                }
              }
            }
          }

          // 이전 형제 요소 없음
        } else {
          console.log("이전 형제 없음");
          // 이전 줄이 있는지 확인
          const parent = targetNode.parentElement;
          console.log("부모 요소", parent);
          const prevSiblingLine = parent?.previousElementSibling;
          console.log("이전 줄 확인", prevSiblingLine);
          // 이전 줄이 있는 경우
          if (prevSiblingLine) {
            console.log("이전 줄 있음");
            // 현재 줄을 없애고 현재 요소를 이전 줄의 마지막 요소로 삽입함(현재 줄의 모든 요소가 같이 이동해야 함)
            const children = parent.children;
            console.log("부모가 가진 자식 요소", children);

            // 부모(현재 줄)의 모든 요소를 이전 줄의 뒤에 추가함
            for (let i = 0; i < children.length; i++) {
              const child = children[i];

              // 이전 줄의 마지막 요소
              const lastChild =
                prevSiblingLine.lastElementChild as HTMLSpanElement;

              // 이전 줄의 마지막 요소의 텍스트
              const lastChildContent = lastChild.textContent;

              // 이전 줄의 마지막 요소가 빈문자열인 경우
              if (!lastChildContent) {
                console.log("이전 줄의 마지막 요소가 빈문자열인 경우");

                // 이전 줄의 마지막 요소를 삭제
                lastChild.remove();

                // 이전 줄의 마지막 요소가 빈문자열이 아닌 경우
              } else {
                console.log("이전 줄의 마지막 요소가 빈문자열이 아닌 경우");
                // 현재 줄의 첫째 요소만 확인
                if (i === 0) {
                  // 현재 요소의 텍스트
                  const childContext = child.textContent;
                  // 현재 요소가 빈문자열인 경우
                  if (!childContext) {
                    console.log("현재 요소가 빈문자열인 경우");

                    // 현재 요소 삭제
                    child.remove();
                    break;
                    // 현재 요소가 빈문자열이 아닌 경우
                  } else {
                    console.log("현재 요소가 빈문자열이 아닌 경우");
                    // 현재 요소의 텍스트를 이전 요소에 삽입(타입 변경이 필요한 경우가 있음)
                    const lastChildDataType =
                      lastChild.getAttribute("data-type");
                    const childDataType = child.getAttribute("data-type");
                    // 타입 일치 여부 확인
                    const isSameType = lastChildDataType === childDataType;

                    // 현재 요소의 타입과 이전 요소의 타입이 일치하는 경우 (삽입만)
                    if (isSameType) {
                      console.log("현재요소와 이전 요소의 타입이 일치");
                      // 현재 요소의 텍스트를 이전 요소에 삽입
                      lastChild.textContent += childContext;

                      // 현재 요소 삭제
                      child.remove();

                      break;
                      // 현재 요소의 타입과 이전 요소의 타입이 일치하지 않는 경우 (삽입 + 타입 변경)
                    } else {
                      console.log("현재요소와 이전 요소의 타입이 불일치");
                    }
                  }
                }
              }

              prevSiblingLine.appendChild(child);
            }

            // 현재 부모(현재 줄) 삭제
            const id = parent.id;
            const restLines = lines.filter((line) => line.id !== id);
            setLines(restLines);

            // 이전 줄이 없는 경우
          } else {
            console.log("이전 줄 없음");
          }
        }
      }
    }

    console.log(focusNode, focusOffset, isCollapsed);
  };

  // 커서 이동
  useEffect(() => {
    if (!linesRef.current) return;
    const lengthOflines = lines.length;
    console.log("줄 개수", lengthOflines);

    const lastLine = linesRef.current[lengthOflines - 1];
    console.log("마지막줄", lastLine);

    // 첫번째 span
    const firstSpan = lastLine?.firstElementChild as HTMLSpanElement;
    console.log("마지막 줄 첫번째 요소", firstSpan);

    // 첫번재 요소에 포커스
    firstSpan.focus();
  }, [lines]);

  const classNames = joinClassNames([styles["text__editor"], className]);

  return (
    <div className={classNames} ref={containerRef}>
      {lines.map((line, index) => (
        <div
          key={line.id}
          className={styles["text__editor__line"]}
          ref={(el) => (linesRef.current[index] = el)}
          id={index.toString()}
        >
          {line.content}
        </div>
      ))}
    </div>
  );
};

export default TextEditor;
