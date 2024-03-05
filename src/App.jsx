import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import FilteringSystem from "./components/FilterSystem";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div>
          <Navbar />
          <FilteringSystem />
        </div>
      ),
    },
    {
      path: "/cart",
      element: (
        <div>
          <Navbar />
          <Cart />
        </div>
      ),
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer />
    </>
  );
}

export default App;
