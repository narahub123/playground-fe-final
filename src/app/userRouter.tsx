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
import { PRIMARY_LINK, SETTINGS_LINKS } from "@shared/@common/constants";
import {
  AccountInfoSection,
  ChangePasswordSection,
} from "@features/settings/account/ui";
import { SecurityAndAccountAccessSection } from "@features/settings/security-and-account-access/ui";
import { PrivacyAndSafetySection } from "@features/settings/privacy-and-safety/ui";
import { NotificationsSection } from "@features/settings/notifications/ui";
import { AccessibiltyAndDisplayAndLanguagesSection } from "@features/settings/accessibilty-and-display-languages/ui";
import { AccountSection } from "@features/settings/account/pages";

const userRouter = createBrowserRouter([
  {
    path: "/",
    element: <PagesLayout />,
    children: [
      {
        path: PRIMARY_LINK.HOME,
        element: <HomePage />,
      },
      {
        path: PRIMARY_LINK.EXPLORE,
        element: <ExplorePage />,
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
            element: <></>,
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
        ],
      },
      {
        path: PRIMARY_LINK.COMPOSE_POST,
        element: <WritePostModal />,
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
