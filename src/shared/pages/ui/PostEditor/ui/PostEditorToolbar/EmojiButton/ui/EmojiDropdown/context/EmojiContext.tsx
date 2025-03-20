import { createContext } from "react";
import { IEmojiContext } from "@shared/pages/ui/PostEditor/ui/PostEditorToolbar/EmojiButton";

const EmojiContext = createContext<IEmojiContext | null>(null);

export default EmojiContext;
