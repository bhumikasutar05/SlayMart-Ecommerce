import React from "react";
import ClothingCategory from "./../ClothingCategory/ClothingCategory";

const Books = () => {
  return (
    <div>
      <ClothingCategory
        apiUrl={"https://ecommerce-api3.p.rapidapi.com/books"}
        category={"books"}
      />
    </div>
  );
};

export default Books;
