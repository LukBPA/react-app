import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./templates/Login/Login";
import AuthProvider from "./AuthContext";
import EmployeeTable from "./components/EmployeeTable/Table";
import Layout from "./templates/Layout/Layout";
function AppRouter() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={
              <Layout>
                <Route index element={<EmployeeTable />} />
              </Layout>
            }
          ></Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default AppRouter;
