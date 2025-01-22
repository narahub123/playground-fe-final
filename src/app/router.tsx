import { AuthPage, OauthCallback, PlayGround } from "@pages";
import { ModalLayout } from "@shared/@common/layouts";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PlayGround />,
    children: [
      {
        index: true,
        element: <AuthPage />,
      },
      {
        path: "i/flow",
        element: <ModalLayout />,
        children: [], // 병렬 라우트를 적용할 모달
      },
    ],
  },
  {
    path: "/oauth/callback",
    element: <OauthCallback />,
  },
]);

export default router;
