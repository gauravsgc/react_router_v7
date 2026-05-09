import { RouterProvider, createBrowserRouter, Outlet } from "react-router";
import { Home } from "./Pages/Home";
import { Contact } from "./Pages/Contact";
import Nav from "./components/Nav";

const Layout = () => {
  return (
    <div>
      <Nav />
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
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;