import { createBrowserRouter, Navigate } from "react-router-dom";
import { ExplorePage, HomePage, LogoutPage } from "@pages";
import { ModalLayout } from "@shared/@common/layouts";
import { AccountManageModal, WritePostModal } from "@shared/pages/ui";
import { LoginModal } from "@features/auth-login/ui";
import { PagesLayout } from "@shared/pages/layouts";

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
