import "@shared/@common/styles/reset.css";
import "@shared/@common/styles/bgTheme.css";
import "@shared/@common/styles/colorTheme.css";
import "@shared/@common/styles/fontSize.css";
import "@shared/@common/styles/globals.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router, store } from "@app";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
