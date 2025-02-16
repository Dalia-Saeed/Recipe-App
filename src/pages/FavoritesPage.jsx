import { useFavorites } from "../context/FavoritesContext";
import { Link } from "react-router-dom";
import "../pages/FavoritesPage.css";

function FavoritesPage() {
  const { favorites, removeFromFavorites } = useFavorites();

  return (
    <div className="favorites-container">
      <h1>Your Favorite Recipes</h1>
      {favorites.length === 0 ? (
        <p>No favorite meals yet! Start adding some.</p>
      ) : (
        <div className="favorites-grid">
          {favorites.map((meal) => (
            <div key={meal.idMeal} className="favorite-card">
              <Link to={`/recipe/${meal.idMeal}`}>
                <img src={meal.strMealThumb} alt={meal.strMeal} className="meal-image" />
              </Link>
              <div className="meal-info">
                <h3>{meal.strMeal}</h3>
                <p><strong>Category:</strong> {meal.strCategory}</p>
                <p><strong>Area:</strong> {meal.strArea}</p>
                <button onClick={() => removeFromFavorites(meal.idMeal)} className="remove-btn">Remove</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default FavoritesPage;
