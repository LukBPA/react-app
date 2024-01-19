import { Navigate, createBrowserRouter } from "react-router-dom";
import Login from "./templates/Login/Login";

import EmployeeTable from "./components/EmployeeTable/Table";
import Layout from "./templates/Layout/Layout";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [{ path: "/employees", element: <EmployeeTable /> }],
  },
  {
    path: "/login",
    element: <Login />,
  },
  { path: "*", element: <Navigate to={"/login"} /> },
]);

export { routes };
