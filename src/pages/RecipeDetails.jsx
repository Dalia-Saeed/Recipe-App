import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useFavorites } from "../context/FavoritesContext";
import { FaHeart, FaRegHeart } from "react-icons/fa"; // Import heart icons

function RecipeDetails() {
  const { id } = useParams();
  const { addToFavorites, favorites } = useFavorites();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((response) => setRecipe(response.data.meals[0]))
      .catch((error) => console.error("Error fetching recipe details:", error));
  }, [id]);

  if (!recipe) return <h2>Loading...</h2>;

  // Check if the recipe is already in favorites
  const isFavorite = favorites.some((fav) => fav.idMeal === recipe.idMeal);

  return (
    <div>
      <h1>{recipe.strMeal}</h1>
      <img src={recipe.strMealThumb} alt={recipe.strMeal} width="300" />

      {/* Heart button */}
      <button onClick={() => addToFavorites(recipe)} style={{ fontSize: "24px", border: "none", background: "none", cursor: "pointer" }}>
        {isFavorite ? <FaHeart color="red" /> : <FaRegHeart color="black" />}
      </button>

      <h2>Ingredients:</h2>
      <ul>
        {Array.from({ length: 20 })
          .map((_, i) => recipe[`strIngredient${i + 1}`])
          .filter((ingredient) => ingredient)
          .map((ingredient, i) => (
            <li key={i}>{ingredient}</li>
          ))}
      </ul>
      <h2>Instructions:</h2>
      <p>{recipe.strInstructions}</p>
    </div>
  );
}

export default RecipeDetails;
