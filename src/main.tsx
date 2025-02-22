import "@shared/@common/styles/reset.css";
import "@shared/@common/styles/bgTheme.css";
import "@shared/@common/styles/colorTheme.css";
import "@shared/@common/styles/fontSize.css";
import "@shared/@common/styles/globals.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { store } from "@app";
import { Provider } from "react-redux";
import { getAccessToken } from "@shared/pages/utils";
import userRouter from "@app/userRouter";
import guestRouter from "@app/guestRouter";

const login = getAccessToken();

const router = login ? userRouter : guestRouter;

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
