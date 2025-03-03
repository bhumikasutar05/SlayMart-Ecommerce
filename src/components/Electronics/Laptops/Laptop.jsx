import React from "react";
import ClothingCategory from "../../ClothingCategory/ClothingCategory.jsx";

const Laptop = () => {
  return (
    <div>
      <ClothingCategory
        apiUrl={"https://ecommerce-api3.p.rapidapi.com/laptops"}
        category={"laptops"}
      />
    </div>
  );
};

export default Laptop;
