import App from "../App.jsx";
import CartPage from "./CartPage.jsx";
import ErrorPage from "./ErrorPage.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/cart",
      element: <CartPage />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default Router;
