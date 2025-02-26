import { createBrowserRouter, Navigate } from "react-router-dom";
import { AuthPage, FlowPage } from "@pages";
import { ModalLayout } from "@shared/@common/layouts";
import { SignupModal } from "@features/auth-email/ui/components";
import { LoginModal } from "@features/auth-login/ui";
import { AuthLayout } from "@shared/auth/layouts";
import { FlowModal } from "@shared/flow/ui";
import { PRIMARY_LINK } from "@shared/@common/constants";

const guestRouter = createBrowserRouter([
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      {
        path: PRIMARY_LINK.AUTH,
        element: <AuthPage />,
        children: [
          {
            path: PRIMARY_LINK.FLOW,
            element: <ModalLayout />,
            children: [
              {
                path: PRIMARY_LINK.SIGNUP,
                element: <SignupModal />,
              },
              {
                path: PRIMARY_LINK.LOGIN,
                element: <LoginModal />,
              },
            ],
          },
        ],
      },
      {
        path: PRIMARY_LINK.FLOW,
        element: <FlowPage />,
        children: [
          {
            path: PRIMARY_LINK.PASSWORD_RESET,
            element: <FlowModal />,
          },
        ],
      },
      {
        path: "*",
        element: <Navigate to={PRIMARY_LINK.AUTH} />,
      },
    ],
  },
]);

export default guestRouter;
