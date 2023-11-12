import { createBrowserRouter } from "react-router-dom";
import Landing from "./Landing";
import DetailProducts from "./DetailProducts";
import CatalogueGirl from "./CatalogueGirl";
import CatalogueBoy from "./CatalogueBoy";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/cataloguegirl",
    element: <CatalogueGirl />,
  },
  {
    path: "/catalogueboy",
    element: <CatalogueBoy />,
  },
  {
    path: "/detailsproducts/:id",
    element: <DetailProducts />,
  },
]);
