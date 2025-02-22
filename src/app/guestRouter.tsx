import { createBrowserRouter, Navigate } from "react-router-dom";
import { AuthPage, FlowPage } from "@pages";
import { ModalLayout } from "@shared/@common/layouts";
import { SignupModal } from "@features/auth-email/ui/components";
import { LoginModal } from "@features/auth-login/ui";
import { AuthLayout } from "@shared/auth/layouts";
import { FlowModal } from "@shared/flow/ui";

const guestRouter = createBrowserRouter([
  {
    path: "/",
    element: <AuthLayout />,
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
            ],
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
      {
        path: "*",
        element: <Navigate to={"/"} />,
      },
    ],
  },
]);

export default guestRouter;
