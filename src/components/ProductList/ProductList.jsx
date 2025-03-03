import React, { useEffect, useState } from "react";
import "./ProductList.css";
import { useParams, NavLink, Outlet, useNavigate } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import Banner1 from "../../assets/mensBanner.png";
import Banner2 from "../../assets/womensBanner.png";
import Banner3 from "../../assets/kidsBanner.png";
import Banner4 from "../../assets/electronicBanner.png";
import CateCategory from "../CateCategory/CateCategory";

const ProductList = () => {
  const { category } = useParams();

  let navigate = useNavigate();

  const banners = {
    mens: Banner1,
    women: Banner2,
    kids: Banner3,
    electronics: Banner4,
  };

  const subCategories = {
    mens: [
      { name: "Menswear", path: "menswear" },
      { name: "Male Footwear", path: "malefootwear" },
    ],
    women: [
      { name: "Womenswear", path: "womenswear" },
      { name: "Female Footwear", path: "femalefootwear" },
    ],
    kids: [
      { name: "Kidswear", path: "kidswear" },
      { name: "Kids Footwear", path: "kidsfootwear" },
    ],
    electronics: [
      { name: "Mobiles", path: "mobiles" },
      { name: "Laptops", path: "laptops" },
      { name: "Watches", path: "watches" },
    ],
    books: [{ name: "Books", path: "books" }],
  };

  return (
    <>
      <div className="category-navbar">
        <div className="back" onClick={() => navigate(-1)}>
          <IoMdArrowRoundBack
            color="#333"
            fontSize={"24px"}
            cursor={"pointer"}
          />
        </div>
        {subCategories[category] ? (
          <nav className="navbar">
            <ul>
              {subCategories[category].map((sub, i) => (
                <li key={i}>
                  <NavLink to={sub.path}>{sub.name}</NavLink>
                </li>
              ))}
            </ul>
          </nav>
        ) : (
          <p>No Category Found</p>
        )}

        <div className="banner">
          <img src={banners[category] || Banner1} alt={`${category} banner`} />
        </div>

        <Outlet />

        <CateCategory />
      </div>
    </>
  );
};

export default ProductList;
