import React, { useState } from "react";
import "./Card.css";
import { Link } from "react-router-dom";
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";
import { FaRegEye } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addWishList, removeWishList } from "../../Slice/ProductSlice";

const Card = ({ products, category }) => {
  const dispatch = useDispatch();
  const wishList = useSelector((state) => state.productInfo.wishList);

  //wishlist - changes
  const isProductInWishList = wishList.some(
    (item) =>
      item["Unnamed: 0"] === products["Unnamed: 0"] &&
      item.category === category
  );

  // changes
  const handleWishlist = () => {
    const productWithCategory = { ...products, category }; // Add category to the object

    if (isProductInWishList) {
      dispatch(removeWishList(products["Unnamed: 0"]));
    } else {
      dispatch(addWishList(productWithCategory));
    }
  };

  return (
    <div className="cards">
      <div className="single-card-home">
        <div className="image-container">
          <img
            src={products.Image}
            alt={products.Description}
            className="card-img"
            loading="lazy"
          />
          <div className="overlay">
            <div className="wishlist" onClick={handleWishlist}>
              {isProductInWishList ? (
                <IoMdHeart color="red" />
              ) : (
                <IoMdHeartEmpty />
              )}
            </div>
            <Link
              to={`/product/${category}/${products["Unnamed: 0"]}`}
              className="details"
              
            >
              <FaRegEye />
            </Link>
          </div>
        </div>

        <div className="card-details">
          <div className="card-title">
            {products.Brand.length > 10
              ? products.Brand.slice(0, 10) + "..."
              : products.Brand}
          </div>

          <div className="ratings">
            <div className="stars">⭐⭐⭐⭐⭐</div>
            <div className="reviews">(123 reviews)</div>
          </div>
          <div className="card-price">{products.Price}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
