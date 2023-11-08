import { createBrowserRouter } from "react-router-dom";
import Landing from "./Landing";
import Catalogue from "./Catalogue";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/Catalogue",
    element: <Catalogue />,
  },
]);
