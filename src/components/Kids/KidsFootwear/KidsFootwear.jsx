import React from "react";
import ClothingCategory from "../../ClothingCategory/ClothingCategory";

const KidsFootwear = () => {
  return (
    <div>
      <ClothingCategory
        apiUrl={"https://ecommerce-api3.p.rapidapi.com/kidsfootwear"}
        category={"kidsfootwear"}
      />
    </div>
  );
};

export default KidsFootwear;
