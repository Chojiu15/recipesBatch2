import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Recipes from "./Recipes";
require('dotenv').config()

const APP_ID = process.env.REACT_APP_ID;
const APP_KEY = process.env.REACT_APP_KEY;

function App() {
  const [recipe, setRecipe] = useState([]);
  const [search, setSearch] = useState('banana')
  const [query, setQuery] = useState('')

  const URL = `https://api.edamam.com/api/recipes/v2?type=public&q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  useEffect(() => {
    fetchRecipes();
  }, [search]);

  const fetchRecipes = () => {
    axios.get(URL).then((response) => setRecipe(response.data.hits));
  };

  const submitQuery = (event) => {
      event.preventDefault()
      setSearch(query)
      setQuery('')
  }
 
  console.log(recipe);

  return (
    <div className="App">
      <form onSubmit={submitQuery}>
        <input onChange={event => setQuery(event.target.value)} type='text'  value={query} />
        <button type='submit'>
          Search for recipes
        </button>
      </form>
      {recipe.map((element, index) => {
        return (
          <div className="App">
            <Recipes key={index} {...element} />
          </div>
        );
      })}
    </div>
  );
}

export default App;
