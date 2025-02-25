import { createBrowserRouter, Navigate } from "react-router-dom";
import {
  ExplorePage,
  HomePage,
  LogoutPage,
  MessagesPage,
  NotificationsPage,
  ProfilePage,
  SettingsPage,
} from "@pages";
import { ModalLayout } from "@shared/@common/layouts";
import { AccountManageModal, WritePostModal } from "@shared/pages/ui";
import { LoginModal } from "@features/auth-login/ui";
import { PagesLayout } from "@shared/pages/layouts";
import { SETTINGS_LINKS } from "@shared/@common/constants";

const userRouter = createBrowserRouter([
  {
    path: "/",
    element: <PagesLayout />,
    children: [
      {
        path: "/home",
        element: <HomePage />,
      },
      {
        path: "/explore",
        element: <ExplorePage />,
      },
      {
        path: "/notifications",
        element: <NotificationsPage />,
      },
      {
        path: "/messages",
        element: <MessagesPage />,
      },
      {
        path: `/:userId`,
        element: <ProfilePage />,
      },
      {
        path: "/settings",
        element: <SettingsPage />,
        children: [
          {
            path: SETTINGS_LINKS.ACCOUNT,
            element: <></>,
          },
          {
            path: SETTINGS_LINKS.ACCOUNT_INFO,
            element: <></>,
          },
          {
            path: SETTINGS_LINKS.PASSWORD,
            element: <></>,
          },
          {
            path: SETTINGS_LINKS.DOWNLOAD_DATA,
            element: <></>,
          },
          {
            path: SETTINGS_LINKS.DEACTIVATE,
            element: <></>,
          },
          {
            path: SETTINGS_LINKS.SECURITY_AND_ACCOUNT_ACCESS,
            element: <></>,
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
            element: <></>,
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
            element: <></>,
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
            element: <></>,
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
        ],
      },
      {
        path: "compose/post",
        element: <WritePostModal />,
      },
      {
        path: "/logout",
        element: <LogoutPage />,
      },
      {
        path: "i/flow",
        element: <ModalLayout />,
        children: [
          {
            path: "login",
            element: <LoginModal />,
          },
        ],
      },
      {
        path: "account/manage",
        element: <AccountManageModal />,
      },
      {
        path: "*",
        element: <Navigate to={"/home"} />,
      },
    ],
  },
]);

export default userRouter;
