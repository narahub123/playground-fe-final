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
import LineConnector from "./LineConnector/LineConnector";
import MoreMenu from "./MoreMenu/MoreMenu";
import MoreButton from "./MoreButton/MoreButton";
import MoreDropdown from "./MoreDropdown/MoreDropdown";
import MoreOption from "./MoreOption/MoreOption";
import MoreOptionIcon from "./MoreOptionIcon/MoreOptionIcon";
import ProfileDropdown from "./ProfileDropdown/ProfileDropdown";
import StatusButton from "./StatusButton/StatusButton";
import CoFollowers from "./CoFollowers/CoFollowers";
import LinkPreview from "./LinkPreview/LinkPreview";
import PostImage from "./PostImage/PostImage";
import PostVideo from "./PostVideo/PostVideo";
import PostVideoControls from "./PostVideoControls/PostVideoControls";
import PostVideoIcon from "./PostVideoIcon/PostVideoIcon";
import Progressbar from "./Progressbar/Progressbar";
import PostVideoSettingsDropdown from "./PostVideoSettingsDropdown/PostVideoSettingsDropdown";
import DialDropdown from "./DialDropdown/DialDropdown";
import PostVoteOption from "./PostVoteOption/PostVoteOption";
import PostVoteResult from "./PostVoteResult/PostVoteResult";
import PostActionIcon from "./PostActionIcon/PostActionIcon";
import PostAction from "./PostAction/PostAction";
import RepostDropdown from "./RepostDropdown/RepostDropdown";
import ShareDropdown from "./ShareDropdown/ShareDropdown";

const Post = Object.assign(PostContainer, {
  Content: PostContent,
  CommentEditor: PostCommentEditor,
  CommentContainer: PostCommentContainer,
  Header: PostHeader,
  Main: PostMain,
  Footer: PostFooter,
  Left: PostLeft,
  Right: PostRight,
  Meta: PostMeta,
  Text: PostText,
  Media: PostMedia,
  Vote: PostVote,
  Stats: PostStats,
  Actions: PostActions,
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
  LineConnector,
  MoreMenu,
  MoreButton,
  MoreDropdown,
  MoreOption,
  MoreOptionIcon,
  ProfileDropdown,
  StatusButton,
  CoFollowers,
  LinkPreview,
  PostImage,
  PostVideo,
  PostVideoControls,
  PostVideoIcon,
  Progressbar,
  PostVideoSettingsDropdown,
  DialDropdown,
  PostVoteOption,
  PostVoteResult,
  PostActionIcon,
  PostAction,
  RepostDropdown,
  ShareDropdown,
};
