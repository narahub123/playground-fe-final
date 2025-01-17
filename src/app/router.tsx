import { AuthPage, OauthCallback, PlayGround } from "@pages";
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
    ],
  },
  {
    path: "/oauth/callback",
    element: <OauthCallback />,
  },
]);

export default router;
