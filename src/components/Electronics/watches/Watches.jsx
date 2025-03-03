import React from "react";
import ClothingCategory from "../../ClothingCategory/ClothingCategory";

const Watches = () => {
  return (
    <div>
      <ClothingCategory
        apiUrl={"https://ecommerce-api3.p.rapidapi.com/watches"}
        category={"watches"}
      />
    </div>
  );
};

export default Watches;
