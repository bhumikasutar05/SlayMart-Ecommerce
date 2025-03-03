import React from "react";
import ClothingCategory from "../../ClothingCategory/ClothingCategory";

const WomenFootwear = () => {
  return (
    <div>
      <ClothingCategory
        apiUrl={"https://ecommerce-api3.p.rapidapi.com/femalefootwear"}
        category={"femalefootwear"}
      />
    </div>
  );
};

export default WomenFootwear;
