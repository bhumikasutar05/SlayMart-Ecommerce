import React, { useState } from "react";
import "./Header.css";
import { NavLink, Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { toast, Bounce } from "react-toastify";
import { SlHandbag } from "react-icons/sl";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../Slice/AuthSlice";

const Header = () => {
  const dispatch = useDispatch();
  const wishListData = useSelector((state) => state.productInfo.wishList);
  const cartData = useSelector((state) => state.productInfo.cart);

  // login logo
  const [loginClicked, setLoginClicked] = useState(false);

  const handleLoginClicked = () => {
    setLoginClicked(!loginClicked);
  };

  const handleMouseOver = () => {
    setLoginClicked(loginClicked);
  };

  // logout
  const handleLogout = () => {
    dispatch(logout());
    // alert("Logged out successfully");
    toast.success("Logout SuccessFully", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
      className: "custom-toast",
    });
  };

  // mobile responsive code
  const [clicked, setClicked] = useState(false);
  const handleClicked = () => {
    setClicked(!clicked);
  };

  const closeNavbar = () => {
    setClicked(false);
  };

  return (
    <div className="header">
      {/* LEFT */}
      <div className="header-left">
        <Link to={"/"} className="logo">
          Slay<span>Mart</span>
        </Link>

        <div className="nav-items" id={clicked ? "navbar-active" : "navbar"}>
          <NavLink to={"/"} onClick={closeNavbar}>
            <span>HOME</span>
          </NavLink>
          <NavLink to={"/shop/mens"} onClick={closeNavbar}>
            <span>MEN</span>
          </NavLink>
          <NavLink to={"/shop/women"} onClick={closeNavbar}>
            <span>WOMEN</span>
          </NavLink>
          <NavLink to={"/shop/kids"} onClick={closeNavbar}>
            <span>KIDS</span>
          </NavLink>
          <NavLink to={"/shop/electronics"} onClick={closeNavbar}>
            <span>ELECTRONIC</span>
          </NavLink>
          <NavLink to={"/contact"} onClick={closeNavbar} id="mobile-contact">
            <span>CONTACT US</span>
          </NavLink>
        </div>
      </div>

      {/* RIGHT */}
      <div className="header-right">
        {/* 1st */}
        <Link to="/product/wishlist">
          <span className="wishlist-span">
            {wishListData.length > 0 ? (
              <>
                <i
                  className="fa-regular fa-heart"
                  style={{ color: "#333" }}
                ></i>
                <sup>{wishListData.length}</sup>
              </>
            ) : (
              <i className="fa-regular fa-heart"></i>
            )}
          </span>
        </Link>

        {/* 2nd */}
        <Link to="/product/cart">
          <span className="wishlist-span">
            <SlHandbag fontSize={"20px"} title="Shopping bag" />
            {cartData.length > 0 && <sup>{cartData.length}</sup>}
          </span>
        </Link>

        {/* 3rd */}

        <span>
          <FaUserCircle
            fontSize="21px"
            title="Add Profile"
            onMouseOver={handleMouseOver}
          />
          <div className="login-logo-div" onClick={handleLoginClicked}>
            <Link to="/login">Login</Link>
            <Link to="/signup">SignUp</Link>
            <a onClick={handleLogout}>Logout</a>
          </div>
        </span>

        {/* mobile responsive code */}

        <div id="mobile" onClick={handleClicked}>
          <i id="bar" className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
      </div>
    </div>
  );
};

export default Header;
