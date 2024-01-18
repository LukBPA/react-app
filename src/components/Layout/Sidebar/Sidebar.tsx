import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./Sidebar.scss";
import { useNavigate } from "react-router-dom";
interface Props {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}
function Sidebar({ isSidebarOpen, toggleSidebar }: Props) {
  const navigate = useNavigate();
  const handleItemClick = (item: any) => {
    menuItems.map((item) => (item.expanded = false));
    item.expanded = true;
    navigate(item.path)
  };
  const menuItems = [
    {
      id: "item1",
      expanded: false,
      path: "/employee",
      heading: "Item 1",
      children: [
        {
          id: "sub-item1",
          heading: "Subitem 1",
        },
      ],
    },
    {
      id: "item2",
      expanded: false,
      path: "/employee",
      heading: "Item 2",
      children: [
        {
          id: "sub-item2",
          heading: "Subitem 2",
        },
      ],
    },
  ];
  return (
    <>
      <aside className={"sidebar" + (isSidebarOpen ? "" : " closed")}>
        <div className="bg-dark">
          <button
            className={
              "w-100 btn text-white" + (isSidebarOpen ? "" : " closed")
            }
            onClick={toggleSidebar}
          >
            {isSidebarOpen ? "Collapse" : "+"}
          </button>
        </div>
        <div className="bg-dark nav-bar d-flex flex-column flex-shrink-0 text-white">
          {true && (
            <nav className="accordion accordion-flush" id="accordion">
              {menuItems.map((item, index) => {
                if (item.children) {
                  return (
                    <div key={index} className="accordion-item">
                      <div className="accordion-header">
                        <button
                          className="accordion-button collapsed bg-dark text-white"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target={"#" + item.id}
                          aria-expanded={item.expanded}
                          aria-controls={item.id}
                          onClick={() => handleItemClick(item)}
                        >
                          {item.heading}
                        </button>
                      </div>
                      <div
                        id={item.id}
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordion"
                      >
                        {item.children.map((child, index) => {
                          return (
                            <div
                              key={index + child.id}
                              className="menu-button accordion-body bg-dark text-white"
                            >
                              {child.heading}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                } else {
                  return (
                    <div key={index} className="accordion-item">
                      <div className="accordion-header">
                        <button
                          className="accordion-button collapsed bg-dark text-white"
                          type="button"
                          data-bs-toggle="collapse"
                        >
                          {item.heading}
                        </button>
                      </div>
                    </div>
                  );
                }
              })}
            </nav>
          )}
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
