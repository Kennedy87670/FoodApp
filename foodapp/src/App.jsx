import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Search from "./components/search/Search";
import FoodList from "./components/food/FoodList";
import Navbar from "./components/navbar/Navbar";
import Container from "./components/container/Container";
import InnerContainer from "./components/container/InnerContainer";
import FoodDetails from "./components/foodDetails/FoodDetails";

function App() {
  const [foodData, setFoodData] = useState([]);
  const [foodId, setFoodId] = useState("");
  return (
    <div>
      <Navbar />
      <Search foodData={foodData} setFoodData={setFoodData} />
      <Container>
        <InnerContainer>
          <FoodList foodData={foodData} setFoodId={setFoodId} />
        </InnerContainer>
        <InnerContainer>
          <FoodDetails foodId={foodId} />
        </InnerContainer>
      </Container>
    </div>
  );
}

export default App;
