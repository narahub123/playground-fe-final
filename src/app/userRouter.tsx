import { createBrowserRouter, Navigate } from "react-router-dom";
import {
  ExplorePage,
  HomePage,
  LogoutPage,
  MessagesPage,
  NotificationsPage,
  PostPage,
  ProfilePage,
  SettingsPage,
} from "@pages";
import { ModalLayout } from "@shared/@common/layouts";
import {
  AccountManageModal,
  WritePost,
  WritePostModal,
} from "@shared/pages/ui";
import { LoginModal } from "@features/auth-login/ui";
import { PagesLayout } from "@shared/pages/layouts";
import { PRIMARY_LINK, SETTINGS_LINKS } from "@shared/@common/constants";
import { AccountSection } from "@features/settings/account/pages";
import AccountInfoSection from "@features/settings/account/pages/account-info/pages/AccountInfoSection/AccountInfoSection";
import { ChangePasswordSection } from "@features/settings/account/pages/change-password/pages";
import { PrivacyAndSafetySection } from "@features/settings/privacy-and-safety/pages";
import { SecurityAndAccountAccessSection } from "@features/settings/security-and-account-access/pages";
import { NotificationsSection } from "@features/settings/notifications/pages";
import { AccessibiltyAndDisplayAndLanguagesSection } from "@features/settings/accessibilty-and-display-languages/pages";
import { DownloadDataSection } from "@features/settings/account/pages/download-data/pages";
import { VerifyOwnershipModal } from "@features/auth/verify-ownership/ui";
import {
  ScheduledPostList,
  ScheduleDraftList,
  SchedulePostForm,
  UnsentPost,
} from "@shared/pages/ui/PostEditor/ui/PostEditorToolbar/ScheduleButton";
import {
  PostPageAnalytics,
  PostPageMain,
  PostPageQuotes,
} from "@features/post-page";
import {
  ProfilePageArticles,
  ProfilePageLikes,
  ProfilePageMedia,
  ProfilePageReplies,
} from "@features/profile-page";
import {
  LocationModal,
  SearchAdvancedModal,
  SearchSettingsModal,
} from "@features/explore";

const userRouter = createBrowserRouter([
  {
    path: "/",
    element: <PagesLayout />,
    children: [
      {
        path: PRIMARY_LINK.HOME,
        element: <HomePage />,
        children: [],
      },
      {
        path: PRIMARY_LINK.POSTPAGE,
        element: <PostPage />,
        children: [
          {
            index: true,
            element: <PostPageMain />,
          },
          {
            path: PRIMARY_LINK.POSTPAGE_QUOTES,
            element: <PostPageQuotes />,
          },
          {
            path: PRIMARY_LINK.POSTPAGE_ANALYTICS,
            element: <PostPageAnalytics />,
          },
        ],
      },
      {
        path: PRIMARY_LINK.EXPLORE,
        element: <ExplorePage />,
        children: [
          {
            path: "location",
            element: <LocationModal />,
          },
          {
            path: PRIMARY_LINK.EXPLORE_FORYOU,
          },
          {
            path: PRIMARY_LINK.EXPLORE_TRENDING,
          },
          {
            path: PRIMARY_LINK.EXPLORE_NEWS,
          },
          {
            path: PRIMARY_LINK.EXPLORE_SPORTS,
          },
          {
            path: PRIMARY_LINK.EXPLORE_ENTERTAINMENT,
          },
        ],
      },
      {
        path: PRIMARY_LINK.SEARCH,
        element: <ExplorePage />,
        children: [
          {
            path: PRIMARY_LINK.SEARCH_ADVANCED,
            element: <SearchAdvancedModal />,
          },
        ],
      },
      {
        path: PRIMARY_LINK.NOTIFICATIONS,
        element: <NotificationsPage />,
      },
      {
        path: PRIMARY_LINK.MESSAGES,
        element: <MessagesPage />,
      },
      {
        path: PRIMARY_LINK.PROFILE,
        element: <ProfilePage />,
        children: [
          {
            index: true,
            element: <ProfilePageArticles />,
          },
          {
            path: "with_replies",
            element: <ProfilePageReplies />,
          },
          {
            path: "media",
            element: <ProfilePageMedia />,
          },
          {
            path: "likes",
            element: <ProfilePageLikes />,
          },
        ],
      },
      {
        path: PRIMARY_LINK.SETTINGS,
        element: <SettingsPage />,
        children: [
          {
            path: SETTINGS_LINKS.ACCOUNT,
            element: <AccountSection />,
          },
          {
            path: SETTINGS_LINKS.ACCOUNT_INFO,
            element: <AccountInfoSection />,
          },
          {
            path: SETTINGS_LINKS.PASSWORD,
            element: <ChangePasswordSection />,
          },
          {
            path: SETTINGS_LINKS.DOWNLOAD_DATA,
            element: <DownloadDataSection />,
          },
          {
            path: SETTINGS_LINKS.DEACTIVATE,
            element: <></>,
          },
          {
            path: SETTINGS_LINKS.SECURITY_AND_ACCOUNT_ACCESS,
            element: <SecurityAndAccountAccessSection />,
          },
          {
            path: SETTINGS_LINKS.SECURITY,
            element: <></>,
          },
          {
            path: SETTINGS_LINKS.APPS_AND_SESSIONS,
            element: <></>,
          },
          {
            path: SETTINGS_LINKS.CONNECTED_ACCOUNTS,
            element: <></>,
          },
          {
            path: SETTINGS_LINKS.DELEGATE,
            element: <></>,
          },
          {
            path: SETTINGS_LINKS.PRIVACY_AND_SAFETY,
            element: <PrivacyAndSafetySection />,
          },
          {
            path: SETTINGS_LINKS.AUDIENCE_AND_TAGGING,
            element: <></>,
          },
          {
            path: SETTINGS_LINKS.MY_POSTS,
            element: <></>,
          },
          {
            path: SETTINGS_LINKS.CONTENT_I_SEE,
            element: <></>,
          },
          {
            path: SETTINGS_LINKS.MUTE_AND_BLOCK,
            element: <></>,
          },
          {
            path: SETTINGS_LINKS.DIRECT_MESSAGES,
            element: <></>,
          },
          {
            path: SETTINGS_LINKS.CONTACTS,
            element: <></>,
          },
          {
            path: SETTINGS_LINKS.ADS_PREFERENCES,
            element: <></>,
          },
          {
            path: SETTINGS_LINKS.LOCATION_INFORMATION,
            element: <></>,
          },
          {
            path: SETTINGS_LINKS.NOTIFICATIONS,
            element: <NotificationsSection />,
          },
          {
            path: SETTINGS_LINKS.NOTIFICATIONS_FILTERS,
            element: <></>,
          },
          {
            path: SETTINGS_LINKS.NOTIFICATIONS_PREFERENCES,
            element: <></>,
          },
          {
            path: SETTINGS_LINKS.ACCESSIBILITY_DISPLAY_AND_LANGUAGES,
            element: <AccessibiltyAndDisplayAndLanguagesSection />,
          },
          {
            path: SETTINGS_LINKS.ACCESSIBILITY,
            element: <></>,
          },
          {
            path: SETTINGS_LINKS.DISPLAY,
            element: <></>,
          },
          {
            path: SETTINGS_LINKS.LANGUAGE,
            element: <></>,
          },
          {
            path: SETTINGS_LINKS.DATA,
            element: <></>,
          },
          {
            path: PRIMARY_LINK.SEARCH_SETTINGS,
            element: <SearchSettingsModal />,
          },
        ],
      },

      {
        path: PRIMARY_LINK.COMPOSE_POST,
        element: <WritePostModal />,
        children: [
          {
            index: true,
            element: <WritePost />,
          },
          {
            path: PRIMARY_LINK.SCHEDULE_POST,
            element: <SchedulePostForm />,
          },
          {
            path: PRIMARY_LINK.UNSENT_POST,
            element: <UnsentPost />,
            children: [
              {
                path: PRIMARY_LINK.SCHEDULED_POST,
                element: <ScheduledPostList />,
              },
              {
                path: PRIMARY_LINK.DRAFT_POST,
                element: <ScheduleDraftList />,
              },
            ],
          },
        ],
      },
      {
        path: PRIMARY_LINK.VERIFY_OWNERSHIP,
        element: <VerifyOwnershipModal />,
      },
      {
        path: PRIMARY_LINK.LOGOUT,
        element: <LogoutPage />,
      },
      {
        path: PRIMARY_LINK.FLOW,
        element: <ModalLayout />,
        children: [
          {
            path: PRIMARY_LINK.LOGIN,
            element: <LoginModal />,
          },
        ],
      },
      {
        path: PRIMARY_LINK.ACCOUNT_MANAGE,
        element: <AccountManageModal />,
      },
      {
        path: "*",
        element: <Navigate to={PRIMARY_LINK.HOME} />,
      },
    ],
  },
]);

export default userRouter;
