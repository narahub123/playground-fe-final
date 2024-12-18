import { PlayGround } from "@pages";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PlayGround />,
  },
]);

export default router;
