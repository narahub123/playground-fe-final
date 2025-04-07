import { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectCaretPosition } from "../../../models/selectors";
import { useAppDispatch } from "@app/store";
import { setPostEditorTextLength } from "../../../models/slices/postEditorSlice";

interface useTextLengthProps {
  textEditorRef: React.RefObject<HTMLDivElement>;
}

const useTextLength = ({ textEditorRef }: useTextLengthProps) => {
  const dispatch = useAppDispatch();
  const caretPosition = useSelector(selectCaretPosition);
  useEffect(() => {
    if (!textEditorRef.current) return;
    const textEditor = textEditorRef.current;

    const text = textEditor.innerText;

    dispatch(setPostEditorTextLength(text.length));
  }, [caretPosition]);
};

export default useTextLength;
