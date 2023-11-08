import { createBrowserRouter } from "react-router-dom";
import Landing from "./Landing";
import Catalogue from "./Catalogue";
import DetailProducts from "./DetailProducts";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/catalogue",
    element: <Catalogue />,
  },
  {
    path: "/detailsproducts/:id",
    element: <DetailProducts />,
  },
]);
