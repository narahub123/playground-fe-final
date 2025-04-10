import { createContext } from "react";
import { IPostContext } from "@shared/pages/ui/Post";

const PostContext = createContext<IPostContext | null>(null);

export default PostContext;
