import { ReactNode } from "react";
import { IPostContext, PostContext } from "@shared/pages/ui/Post";

interface PostContextProviderProps {
  children: ReactNode;
  value: IPostContext;
}

const PostContextProvider = ({ children, value }: PostContextProviderProps) => {
  return <PostContext.Provider value={value}>{children}</PostContext.Provider>;
};

export default PostContextProvider;
