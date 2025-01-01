import { createHashRouxter } from "react-router-dom";
import Home from "./views/home/Home";
const router = createHashRouter([
  {
    path: "/",
    element: <Home />,
  },
  // {
  //     path: '/services',
  //     element: <Services/>
  // },

  // {
  //     path: "/*",
  //     element: <Error404 />
  // }
]);

export default router;
