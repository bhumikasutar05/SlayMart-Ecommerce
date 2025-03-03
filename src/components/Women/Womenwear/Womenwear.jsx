import React from "react";
import ClothingCategory from "../../ClothingCategory/ClothingCategory";

const Womenwear = () => {
  return (
    <div>
      <ClothingCategory
        apiUrl={"https://ecommerce-api3.p.rapidapi.com/womenswear"}
        category={"womenswear"}
      />
    </div>
  );
};

export default Womenwear;
