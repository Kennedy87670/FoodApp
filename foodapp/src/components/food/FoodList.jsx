import React from "react";
import FoodItems from "./FoodItems";

export default function FoodList({ foodData, setFoodId }) {
  return (
    <div>
      {foodData.map((food) => (
        <FoodItems key={food.id} setFoodId={setFoodId} food={food} />
      ))}
    </div>
  );
}
