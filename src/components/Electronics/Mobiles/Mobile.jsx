import React from "react";
import ClothingCategory from "../../ClothingCategory/ClothingCategory.jsx";

const Mobile = () => {
  return (
    <div>
      <ClothingCategory
        apiUrl={"https://ecommerce-api3.p.rapidapi.com/mobiles"}
        category={"mobiles"}
      />
    </div>
  );
};

export default Mobile;
