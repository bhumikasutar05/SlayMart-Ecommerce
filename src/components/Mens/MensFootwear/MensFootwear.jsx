import React from "react";
import ClothingCategory from "../../ClothingCategory/ClothingCategory";

const MensFootwear = () => {
  return (
    <ClothingCategory
      apiUrl="https://ecommerce-api3.p.rapidapi.com/malefootwear"
      category={"malefootwear"}
    />
  );
};

export default MensFootwear;
