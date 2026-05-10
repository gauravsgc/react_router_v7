import { RouterProvider, createBrowserRouter, Outlet } from "react-router";
import { Home } from "./Pages/Home";
import { Contact } from "./Pages/Contact";
import ErrorPage from "./Pages/ErrorPage";
// import Nav from "./components/Nav";
import { Navigate } from "react-router";
import NavActive from "./components/NavActive";
import Product from "./Pages/Product";
import RetailProduct from "./Pages/RetailProduct";
import CompanyProduct from "./Pages/CompanyProduct";
const Layout = () => {
  return (
    <div>
      {/* <Nav /> */}
      <NavActive />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/contact", element: <Contact /> },
         { path: "/product",
           element: <Product />,
          children:[
            {path:'true', element:<Navigate to='retail' />},
            { path: 'retail', element: <RetailProduct /> },
            { path: 'company', element: <CompanyProduct /> }
          ]
        },
      { path: "radhe", element: <Navigate to="/" /> },
      { path: "*", element: <ErrorPage /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;