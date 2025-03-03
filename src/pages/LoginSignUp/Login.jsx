import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../Slice/AuthSlice";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { Link } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import Swal from "sweetalert2";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({ email: "", password: "" });

  const handleLogIn = () => {
    dispatch(login(loginData));

    if (JSON.parse(sessionStorage.getItem("isAuthenticated"))) {
      Swal.fire({
        title: "Login Successful!",
        icon: "success",
      });
      navigate("/");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  return (
    <div className="login-container">
      <div className="sub-con-login">
        <div className="login-form">
          <span>Login</span>

          <div className="input-div-login">
            <label className="login-label">Enter Email</label>
            <div className="input-login">
              <MdEmail className="icon" />
              <input
                type="text"
                name="email"
                id="email"
                value={loginData.email}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="input-div-login">
            <label className="login-label">Enter Password</label>
            <div className="input-login">
              <RiLockPasswordFill className="icon" />
              <input
                type="password"
                name="password"
                id="password"
                value={loginData.password}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="submit-login-button">
            <button onClick={handleLogIn}>Login</button>
          </div>
        </div>

        <div className="register">
          <p>
            New to SlayMart? <Link to={"/signup"}>SignUp</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
