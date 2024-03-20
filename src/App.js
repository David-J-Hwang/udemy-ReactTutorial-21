// To use React-Router library, import under this line
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// Components
import HomePage from './pages/Home'
import ProductsPage from './pages/Products';
import RootLayout from './pages/Root';
import ErrorPage from './pages/Error';

// Routers
const router = createBrowserRouter([
  { 
    path: "/", 
    element: <RootLayout />, 
    errorElement: <ErrorPage />,
    children: [
    { path: "/", element: <HomePage /> },
    { path: "/products", element: <ProductsPage />, },
    ]
  }
]);

// App component
function App() {
  return <RouterProvider router={router} />;
}

export default App;


// Another way of using React-Router library
// import { createRoutesFromElements, Route } from 'react-router-dom';
// const routeDefinitions = createRoutesFromElements(
//   <Route>
//     <Route path='/' element={<HomePage />} />
//     <Route path='/products' element={<ProductsPage />} />
//   </Route>
// )
// const router = createBrowserRouter(routeDefinitions)