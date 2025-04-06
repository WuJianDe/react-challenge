import { RouteObject } from "react-router-dom";
import LayoutPage from "../modules/layout/pages/LayoutPage";
import OneDayPage from "../modules/1day/pages/OneDayPage";
import TwoDayPage from "../modules/2day/pages/TwoDayPage";
import ThreeDayPage from "../modules/3day/pages/ThreeDayPage";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <LayoutPage />,
    children: [
      { index: true, element: <OneDayPage /> },
      { path: "one-day", element: <OneDayPage /> },
      { path: "two-day", element: <TwoDayPage /> },
      { path: "three-day", element: <ThreeDayPage /> },
    ],
  },
];

export default routes;