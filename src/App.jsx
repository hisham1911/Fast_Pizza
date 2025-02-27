import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Home from "./ui/Home";
import Menu, { Loader as menuLoader } from "./features/menu/Menu";
import Cart from "./features/cart/Cart";
import Order, { Loader as orderLoader } from "./features/order/Order";
import CreateOrder, {
  action as orderAction,
} from "./features/order/CreateOrder";
import AppLayout from "./ui/AppLayout";
import Error from "./ui/Error";

import Elzero from './elzero/Elzero'

const router = createBrowserRouter([

  {
    element: <AppLayout />,
    errorElement: <Error />,

    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
        loader: menuLoader,
        errorElement: <Error />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/order/:orderId",
        element: <Order />,
        loader: orderLoader,
        errorElement: <Error />,
      },
      {
        path: "/order/new",
        element: <CreateOrder />,
        action: orderAction,
      },
    ],
  },
  {
    path: "/elzero",
    element: <Elzero />,
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
