import MainContent from "../../components/Layout/MainContent/MainContent";
import Sidebar from "../../components/Layout/Sidebar/Sidebar";
import { ReactNode, useState } from "react";
import Header from "../../components/Layout/Header/Header";

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  const [isSidebarOpen, setSidebarState] = useState<boolean>(true);
  const toggleSidebar = () => {
    setSidebarState(!isSidebarOpen);
  };
  return (
    <>
      <Header />
      <div className="row">
        <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <MainContent>{children}</MainContent>
      </div>
    </>
  );
}

export default Layout;
