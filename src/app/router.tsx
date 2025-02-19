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
import { getAccessToken } from "@shared/pages/utils";
import { createBrowserRouter } from "react-router-dom";

const login = getAccessToken();

const router = createBrowserRouter([
  {
    path: "/",
    element: <PlayGround />,
    children: login
      ? [
          {
            path: "home",
            element: <HomePage />,
          },
          {
            path: "compose/pose",
          },
        ]
      : [
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
        ],
  },

  {
    path: "/oauth/callback",
    element: <OauthCallback />,
  },
]);

export default router;
