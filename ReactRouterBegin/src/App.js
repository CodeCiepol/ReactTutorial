import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from 'react-router-dom'
import ErrorPage from './pages/Error'
import HomePage from './pages/Home'
import ProductsPage from './pages/Products'
import RootLayout from './pages/Root'

const router = createBrowserRouter([
   //thanks to that we have path dependent navigation bar
  {
    path: '/',
    errorElement: <ErrorPage/>,
    element: <RootLayout></RootLayout>,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/products', element: <ProductsPage /> },
    ],
  },
])

// alternative (older version)

// const routeDefinitions = createRoutesFromElements(
//   <Route>
//     <Route path="/" element={<HomePage></HomePage>}></Route>
//     <Route path="/products" element={<ProductsPage/>}></Route>

//   </Route>
// );
// const router = createBrowserRouter(routeDefinitions)

function App() {
  return (
    <>
      <RouterProvider router={router} />{' '}
    </>
  )
}

export default App
