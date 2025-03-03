import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signUP } from "../../Slice/AuthSlice";
import { useNavigate } from "react-router-dom";
import { RiLockPasswordFill } from "react-icons/ri";
import { TiUser } from "react-icons/ti";
import { MdEmail } from "react-icons/md";
import { MdLocalPhone } from "react-icons/md";
import "./SignUp.css";
import Swal from "sweetalert2";

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [signUp, setSignUp] = useState({
    username: "",
    email: "",
    password: "",
    phoneNum: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignUp({ ...signUp, [name]: value });
  };

  const handleSignUp = () => {
    dispatch(signUP(signUp));

    if (JSON.parse(sessionStorage.getItem("isAuthenticated"))) {
      Swal.fire({
        title: "SignUp Successful!",
        icon: "success",
      });
      navigate("/login");
    }
  };

  return (
    <div className="signUp-container">
      <div className="sub-con-signup">
        <span>Sign Up</span>

        <div className="input-div-signup">
          <label className="signup-label">Enter Username</label>
          <div className="inputs-signup">
            <TiUser className="icon" />
            <input
              type="text"
              name="username"
              id="username"
              value={signUP.username}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="input-div-signup">
          <label className="signup-label">Enter Email</label>
          <div className="inputs-signup">
            <MdEmail className="icon" />
            <input
              type="text"
              name="email"
              id="email"
              value={signUP.email}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="input-div-signup">
          <label className="signup-label">Enter Password</label>
          <div className="inputs-signup">
            <RiLockPasswordFill className="icon" />
            <input
              type="password"
              name="password"
              id="password"
              value={signUP.password}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="input-div-signup">
          <label className="signup-label">Enter Phone Number</label>
          <div className="inputs-signup">
            <MdLocalPhone className="icon" />
            <input
              type="number"
              name="phoneNum"
              id="phoneNum"
              value={signUP.phoneNum}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="submit-container-signup">
          <button onClick={handleSignUp}>SignUp</button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
