import React, { useEffect, useState } from "react";
import "./Wishlist.css";
import { useDispatch, useSelector } from "react-redux";
import { IoCloseSharp } from "react-icons/io5";
import { IoMdArrowRoundBack } from "react-icons/io";
import { removeWishList } from "../../Slice/ProductSlice";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast, Bounce } from "react-toastify";

const Wishlist = () => {
  const dispatch = useDispatch();
  const wishlistdata = useSelector((state) => state.productInfo.wishList);

  // back-button
  const navigate = useNavigate();

  const handleRemove = (id) => {
    dispatch(removeWishList(id));
    toast.success("Item removed from Wishlist", {
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

  return (
    <div className="parent-element">
      {/* back button */}
      <div className="back-button" onClick={() => navigate(-1)}>
        <IoMdArrowRoundBack className="back-arrow" />
      </div>

      {wishlistdata.length > 0 ? (
        <div className="wishlist-con">
          <h1 className="yourwishlist">Your Wishlist</h1>
          <div className="wishlist-items-list">
            {wishlistdata.map((wish, i) => (
              <div className="wishlist-c" key={wish["Unnamed: 0"]}>
                <div
                  className="close"
                  onClick={() => handleRemove(wish["Unnamed: 0"])}
                >
                  <IoCloseSharp
                    color="#333"
                    fontSize={"20px"}
                    cursor={"pointer"}
                  />
                </div>
                <Link
                  to={`/product/${wish.category}/${wish["Unnamed: 0"]}`}
                  className="wishlist-card"
                >
                  <div className="wishlist-card-img">
                    <img src={wish.Image} alt="image" />
                  </div>
                  <div className="wishlist-card-data">
                    <h1>
                      {wish.Brand.length > 10
                        ? wish.Brand.slice(0, 10) + "..."
                        : wish.Brand}
                    </h1>
                    <strong>{wish.Price}</strong>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="empty-div">
          <h1>Your wishlist is empty</h1>
        </div>
      )}
    </div>
  );
};

export default Wishlist;
