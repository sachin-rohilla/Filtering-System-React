import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import FilteringSystem from "./components/FilterSystem";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";

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
    </>
  );
}

export default App;
