import React, { useEffect, useState } from "react";
import style from "./fooddetails.module.css";
import ItemList from "./ItemList";

export default function FoodDetails({ foodId }) {
  const [isLoading, setIsLoading] = useState(true);
  const [food, setFood] = useState({});
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const API_KEY = "a098f75458924671994402947ae3fcef";

  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data);
      setFood(data);
      setIsLoading(false);
    }
    fetchFood();
  }, [foodId]);
  return (
    <div>
      <div className={style.recipeCard}>
        <h1 className={style.receipeName}>{food.title}</h1>
        <img className={style.recipeImage} src={food.image} alt="" />
        <div className={style.recipeDetails}>
          <span>
            <strong>⌚{food.readyInMinutes} Minute</strong>
          </span>
          <span>
            <strong>Serves {food.servings}</strong>
          </span>
          <span>
            <strong>
              {food.vegetarian ? "🥕 Vegetarian" : "🍖 Non vegeterian"}
            </strong>
          </span>
          <span>
            <strong>{food.vegan ? "🐮 Vegan" : ""}</strong>
          </span>
        </div>
        <div>
          💲
          <span>
            <strong>{food.pricePerServing / 100}</strong>
          </span>
        </div>

        <h2>Ingredients</h2>

        <ItemList food={food} isLoading={isLoading} />
        <h2>Instructions</h2>
        <div className={style.receipeInstructions}>
          <ol>
            {isLoading ? (
              <p>loading....</p>
            ) : (
              food.analyzedInstructions[0].steps.map((step) => (
                <li key={step.number}>{step.step}</li>
              ))
            )}
          </ol>
        </div>
      </div>
    </div>
  );
}
