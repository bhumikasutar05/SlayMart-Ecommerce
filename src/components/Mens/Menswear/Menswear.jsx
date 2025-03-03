import React from "react";
import ClothingCategory from "../../ClothingCategory/ClothingCategory";

const Menswear = () => {
  return (
    <ClothingCategory
      apiUrl="https://ecommerce-api3.p.rapidapi.com/menswear"
      category={"menswear"}
    />
  );
};

export default Menswear;
