import { AuthPage, PlayGround } from "@pages";
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
]);

export default router;
