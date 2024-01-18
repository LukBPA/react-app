import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../AuthContext";

function Header() {
  const { logout, isLoggedIn } = useAuth();
  const navigate = useNavigate();
  const handleLogOut = () => {
    logout();
    navigate("/login", { replace: true });
  };

  return (
    <>
      <header className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark">
        <div className="row d-flex">
          <h1 className="col-11">Header component</h1>
          <button
            className="col-1 btn bg-dark text-white"
            type="button"
            title="Log out"
            onClick={handleLogOut}
          >
            Log out
          </button>
        </div>
      </header>
    </>
  );
}

export default Header;
