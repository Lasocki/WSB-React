import "./App.css";
import Header from "./components/Header.js";
import { Searchbar } from "./components/Searchbar.js";
import { useState } from "react";
import { RecipesList } from "./components/RecipesList.js";

function App() {
  const [recipes, setRecipes] = useState([]);
  return (
    <div className="App">
      <Header />
      <section className="box-searchbar">
        <Searchbar setRecipes={setRecipes} />
      </section>
      <RecipesList recipes={recipes} />
    </div>
  );
}

export default App;
