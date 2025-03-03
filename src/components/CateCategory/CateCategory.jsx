import React from "react";
import "./CateCategory.css";
import Image1 from "../../assets/menCategoryImg.jpg";
import Image2 from "../../assets/womenCategoryImg.jpg";
import Image3 from "../../assets/kidsCategoryImg.jpg";
import Image4 from "../../assets/laptop.jpg";
import { Link } from "react-router-dom";

const CateCategory = () => {
  const cateData = [
    {
      id: 1,
      image: Image1,
      navpath: "/shop/mens",
      title: "Mens Clothing",
    },
    {
      id: 2,
      image: Image2, // Women's Clothing
      navpath: "/shop/women",
      title: "Female Clothing",
    },
    {
      id: 3,
      image: Image3, // Kids' Clothing
      navpath: "/shop/kids",
      title: "Kids Clothing",
    },

    {
      id: 4,
      image: Image4, // Electronics
      navpath: "/shop/electronics",
      title: "Electronics",
    },
  ];
  return (
    <div>
      <div className="product-category">
        <div className="product-category-card">
          {cateData.map((cate, id) => {
            return (
              <div className="cate-card" key={id}>
                <img src={cate.image} alt="" className="cate-img" />
                <div className="cate-title">{cate.title}</div>
                <Link className="cate-btn" to={cate.navpath} target="_top">
                  Shop Now
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CateCategory;
