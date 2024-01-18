import { useState } from "react";
import Button from "../../components/common/Button";
import Input from "../../components/common/Input";
import "./Login.scss";
import React from "react";
import { useAuth } from "../../AuthContext";
import { useNavigate } from "react-router-dom";
function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const users = [{ username: "krle", password: "test" }];
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (value: string) => {
    setUsername(value);
  };
  const handlePasswordChange = (value: string) => {
    setPassword(value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const account = users.find((user) => user.username === username);
    if (account && account.password === password) {
      localStorage.setItem("authenticated", JSON.stringify(true));
      login();
      navigate("/home");
    }
  };

  return (
    <>
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="card">
          <h3 className="heading">Welcome</h3>
          <form className="form-wrapper" onSubmit={handleSubmit}>
            <Input
              type="text"
              value={username}
              placeholder="Enter username"
              onChange={handleUsernameChange}
            />
            <Input
              type="password"
              value={password}
              placeholder="Enter password"
              onChange={handlePasswordChange}
            />
            <Button type="submit" text="Submit" />
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
