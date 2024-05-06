import React, { useEffect, useState } from "react";
import style from "./search.module.css";

const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "a098f75458924671994402947ae3fcef";

export default function Search({ foodData, setFoodData }) {
  const [query, setQuery] = useState("pizza");

  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
      const data = await res.json();
      setFoodData(data.results);
    }
    fetchFood();
  }, [query]);
  return (
    <div className={style.searchContainer}>
      <input
        type="text"
        className={style.input}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
}
