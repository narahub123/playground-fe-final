import { ReactNode } from "react";
import {
  EmojiContext,
  IEmojiContext,
} from "@shared/pages/ui/PostEditor/ui/PostEditorToolbar/EmojiButton";

interface EmojiContextProviderProps {
  children: ReactNode;
  value: IEmojiContext;
}

const EmojiContextProvider = ({
  children,
  value,
}: EmojiContextProviderProps) => {
  return (
    <EmojiContext.Provider value={value}>{children}</EmojiContext.Provider>
  );
};

export default EmojiContextProvider;
