import {
  ReactNode,
  createContext,
  useContext,
  useState,
} from "react";

interface Props {
  children: ReactNode;
}
interface AuthContextProps {
  isLoggedIn: boolean;
  login: () => void;
  logout: () => void;
}
const AuthContext = createContext<AuthContextProps>({
  isLoggedIn: localStorage.getItem("authenticated") === "true",
} as AuthContextProps);
function AuthProvider({ children }: Props) {
  const [isLoggedIn, setLoggedIn] = useState<boolean>(
    localStorage.getItem("authenticated") === "true"
  );

  const login = () => {
    setLoggedIn(true);
    localStorage.setItem("authenticated", JSON.stringify(true));
  };

  const logout = () => {
    setLoggedIn(false);
    localStorage.removeItem("authenticated");
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthProvider;
