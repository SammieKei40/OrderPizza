import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Home from "./ui/Home"
import Menu, {loader as menuLoader} from "./features/menu/Menu"
import CartItem from "./features/cart/Cart"
import CreateOrder, {action as createOrderAction} from "./features/order/CreateOrder"
// import OrderItem from "./features/order/Order"
import AppLayout from "./ui/AppLayout"
import Error from "./ui/Error"
import Order, {loader as orderLoader} from "./features/order/Order"

const router = createBrowserRouter([
  {
    element: <AppLayout/>,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/menu',
        element: <Menu />,
        loader: menuLoader,
        errorElement: <Error />
      },
      {
        path: '/cart',
        element: <CartItem />
      },
      {
        path: '/order/new',
        element: <CreateOrder/>,
        action: createOrderAction
      },
      {
        path: '/order/:orderId',
        element: <Order />,
        loader: orderLoader,
        errorElement: <Error />
      },
    ]
  },
])

function App() {

  return (
    <RouterProvider router={router}/>
  )
}

export default App
