import { useContext, useState } from "react";
import "./Login.css";
import { assets } from "../../assets/Frontend/assets";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";
import { Link } from "react-router-dom";

const Login = ({ setLogin }) => {
  const [currentState, setCurrentState] = useState("Login");
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { url, token, setToken } = useContext(StoreContext);

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setData((prev) => ({ ...prev, [name]: value }));
  };

  const login = async (e) => {
    e.preventDefault();

    let newUrl = url;
    if (currentState === "Login") {
      newUrl += "/api/user/login";
    } else {
      newUrl += "/api/user/signUp";
    }

    const res = await axios.post(newUrl, data);
    if (res.data.status === "success") {
      setToken(res.data.token);
      localStorage.setItem("token", res.data.token);
      setLogin(false);
    } else {
      alert(res.data.message);
    }
  };

  return (
    <div className="login-popup">
      <form onSubmit={login} className="login-container">
        <div className="login-title">
          <h2>{currentState}</h2>
          <img
            onClick={() => setLogin(false)}
            src={assets.cross_icon}
            alt="cross icon"
          />
        </div>

        <div className="login-input">
          {currentState === "Login" ? (
            <></>
          ) : (
            <input
              name="name"
              onChange={onChangeHandler}
              value={data.name}
              type="text"
              placeholder="Your name"
              required
            />
          )}
          <input
            name="email"
            onChange={onChangeHandler}
            value={data.email}
            type="email"
            placeholder="Your email"
            required
          />
          <input
            name="password"
            onChange={onChangeHandler}
            value={data.password}
            type="password"
            placeholder="Passsword"
            required
          />
        </div>

        <button type="submit">
          {currentState === "Sign up" ? "Create account" : "Login"}
        </button>

        <div className="login-condition">
          <input type="checkbox" required />
          <p>By continuing, I agree to the terms of use & privacy policy</p>
        </div>

        {currentState === "Login" ? (
          <p>
            Create a new account?
            <span
              onClick={() => {
                setCurrentState("Sign up");
              }}
            >
              Click here
            </span>
          </p>
        ) : (
          <p>
            Already have an account?{" "}
            <span onClick={() => setCurrentState("Login")}>Login here</span>
          </p>
        )}

        <p>
          Log in as Admin?{" "}
          <Link to={"/admin"}>
            <span onClick={() => setLogin(false)}>Click here</span>
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
