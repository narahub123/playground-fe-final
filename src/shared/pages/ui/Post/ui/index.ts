import PostContainer from "./PostContainer/PostContainer";
import PostContent from "./PostContent/PostContent";
import PostCommentEditor from "./PostCommentEditor/PostCommentEditor";
import PostCommentContainer from "./PostCommentContainer/PostCommentContainer";
import PostHeader from "./PostHeader/PostHeader";
import PostMain from "./PostMain/PostMain";
import PostFooter from "./PostFooter/PostFooter";
import PostLeft from "./PostLeft/PostLeft";
import PostRight from "./PostRight/PostRight";
import RepostInfo from "./RepostInfo/RepostInfo";
import ProfileConnector from "./ProfileConnector/ProfileConnector";
import PostMeta from "./PostMeta/PostMeta";
import PostText from "./PostText/PostText";
import PostMedia from "./PostMedia/PostMedia";
import PostVote from "./PostVote/PostVote";
import PostStats from "./PostStats/PostStats";
import PostActions from "./PostActions/PostActions";
import RepostIcon from "./RepostIcon/RepostIcon";

const Post = Object.assign(PostContainer, {
  Content: PostContent,
  CommentEditor: PostCommentEditor,
  CommentContainer: PostCommentContainer,
  Header: PostHeader,
  Main: PostMain,
  Footer: PostFooter,
  Left: PostLeft,
  Right: PostRight,
});

export default Post;
export {
  RepostInfo,
  ProfileConnector,
  PostText,
  PostMeta,
  PostMedia,
  PostVote,
  PostStats,
  PostActions,
  RepostIcon,
};
