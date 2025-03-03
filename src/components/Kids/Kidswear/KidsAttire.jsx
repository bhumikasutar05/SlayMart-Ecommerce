import React from "react";
import ClothingCategory from "../../ClothingCategory/ClothingCategory.jsx";

const KidsAttire = () => {
  return (
    <div>
      <ClothingCategory
        apiUrl={"https://ecommerce-api3.p.rapidapi.com/kidswear"}
        category={"kidswear"}
      />
    </div>
  );
};

export default KidsAttire;
