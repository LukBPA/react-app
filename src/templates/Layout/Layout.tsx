import MainContent from "../../components/Layout/MainContent/MainContent";
import Sidebar from "../../components/Layout/Sidebar/Sidebar";
import { useState } from "react";
import Header from "../../components/Layout/Header/Header";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../AuthContext";

function Layout() {
  const { isLoggedIn } = useAuth();
  const [isSidebarOpen, setSidebarState] = useState<boolean>(true);
  const toggleSidebar = () => {
    setSidebarState(!isSidebarOpen);
  };

  if (!isLoggedIn) {
    return <Navigate to={"/login"} />;
  }

  return (
    <>
      <Header />
      <div className="row">
        <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <MainContent>
          <Outlet />
        </MainContent>
      </div>
    </>
  );
}

export default Layout;
