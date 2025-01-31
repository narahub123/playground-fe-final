import { AuthModal } from "@features/auth-email/ui/components";
import { LoginModal } from "@features/auth-login/ui";
import { AuthPage, FlowPage, OauthCallback, PlayGround } from "@pages";
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
                element: <AuthModal />,
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
    ],
  },
  {
    path: "/oauth/callback",
    element: <OauthCallback />,
  },
]);

export default router;
