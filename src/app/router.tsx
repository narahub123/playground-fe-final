import { AuthModal } from "@features/auth-email/ui/components";
import { AuthPage, FlowPage, OauthCallback, PlayGround } from "@pages";
import { ModalLayout } from "@shared/@common/layouts";
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
            ], // 병렬 라우트를 적용할 모달
          },
        ],
      },
      {
        path: "i/flow",
        element: <FlowPage />,
      },
    ],
  },
  {
    path: "/oauth/callback",
    element: <OauthCallback />,
  },
]);

export default router;
