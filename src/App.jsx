import "./App.css";
import router from "./Routing";
import { RouterProvider } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="">
      <RouterProvider router={router} />
      <Footer />
    </div>
  );
}

export default App;
