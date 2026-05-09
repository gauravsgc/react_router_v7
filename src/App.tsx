import { RouterProvider, createBrowserRouter, Outlet } from "react-router";
import { Home } from "./Pages/Home";
import { Contact } from "./Pages/Contact";
import ErrorPage from "./Pages/ErrorPage";
// import Nav from "./components/Nav";
import { Navigate } from "react-router";
import NavActive from "./components/NavActive";
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
      { path: "radhe", element: <Navigate to="/" /> },
      { path: "*", element: <ErrorPage /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;