import { createBrowserRouter } from "react-router-dom";
import Home from "./views/home/Home";
const router = createBrowserRouter([
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
