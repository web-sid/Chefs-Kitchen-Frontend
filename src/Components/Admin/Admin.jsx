import { useContext, useEffect, useState } from "react";
import { assets } from "../../assets/Frontend/assets";
import "./Admin.css";
import axios from "axios";
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";

const Admin = ({ setLogin }) => {
  const [data, setData] = useState({
    email: "",
    password: "",
    role: "",
  });

  const navigate = useNavigate();

  const { url, token, setToken } = useContext(StoreContext);

  const onChangeHandler = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const login = async (e) => {
    e.preventDefault();
    const res = await axios.post(url + "/api/user/admin", data);
    if (res.data.status === "success") {
      localStorage.setItem("token", res.data.token);
      setToken(res.data.token);
      window.location.href = "https://chefs-kitchen-admin-panel.netlify.app";
    }
  };

  return (
    <form onSubmit={login} className="admin">
      <div className="containers">
        <h1>Admin Panel Login</h1>
        <input
          name="email"
          value={data.email}
          onChange={onChangeHandler}
          type="email"
          placeholder="email address"
        />
        <input
          name="password"
          value={data.password}
          onChange={onChangeHandler}
          type="password"
          placeholder="password"
        />
        <input
          name="role"
          value={data.role}
          onChange={onChangeHandler}
          type="password"
          placeholder="role"
        />

        <button type="submit">Login</button>

        <p>
          Login as a user?
          <span
            onClick={() => {
              navigate("/");
              setLogin(true);
            }}
          >
            Click here
          </span>
        </p>
      </div>
    </form>
  );
};

export default Admin;
