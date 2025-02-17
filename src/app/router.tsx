import { SignupModal } from "@features/auth-email/ui/components";
import { LoginModal } from "@features/auth-login/ui";
import {
  AuthPage,
  FlowPage,
  HomePage,
  OauthCallback,
  PlayGround,
  TestPage,
} from "@pages";
import { ModalLayout } from "@shared/@common/layouts";
import { FlowModal } from "@shared/flow/ui";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PlayGround />,
    children: [
      {
        path: "/",
        element: <AuthPage />,
        children: [
          {
            path: "i/flow",
            element: <ModalLayout />,
            children: [
              {
                path: "signup",
                element: <SignupModal />,
              },
              {
                path: "login",
                element: <LoginModal />,
              },
            ], // 병렬 라우트를 적용할 모달
          },
        ],
      },
      {
        path: "i/flow",
        element: <FlowPage />,
        children: [
          {
            path: "password_reset",
            element: <FlowModal />,
          },
        ],
      },
      { path: "/test", element: <TestPage /> },
      {
        path: "/home",
        element: <HomePage />,
      },
    ],
  },

  {
    path: "/oauth/callback",
    element: <OauthCallback />,
  },
]);

export default router;
