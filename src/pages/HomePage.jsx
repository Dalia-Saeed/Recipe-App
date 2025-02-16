import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";
import "./HomePage.css";

function HomePage() {
  const [meals, setMeals] = useState([]);
  const [filteredMeals, setFilteredMeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState("All");

  // ✅ List of Countries (Add more if needed)
  const countries = [
    { code: "All", name: "All" },
    { code: "Egyptian", name: "Egyptian" },
    { code: "French", name: "French" },
    { code: "Italian", name: "Italian" },
    { code: "Mexican", name: "Mexican" },
    { code: "Indian", name: "Indian" },
    { code: "Chinese", name: "Chinese" },
    { code: "Japanese", name: "Japanese" },
  ];

  // ✅ Fetch Meals (All or by country)
  useEffect(() => {
    let url = "https://www.themealdb.com/api/json/v1/1/search.php?s="; // Default: All meals

    if (selectedCountry !== "All") {
      url = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${selectedCountry}`;
    }

    axios
      .get(url)
      .then((response) => {
        setMeals(response.data.meals || []);
        setFilteredMeals(response.data.meals || []);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching meals:", error);
        setError("Failed to fetch meals.");
        setLoading(false);
      });
  }, [selectedCountry]);

  // Handle Search
  const handleSearch = (query) => {
    const filtered = meals.filter((meal) =>
      meal.strMeal.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredMeals(filtered);
  };

  return (
    <>
      <Navbar onSearch={handleSearch} />

      <div className="homepage-container">
        <h1>Delicious Recipes</h1>

        {/* Dropdown to Select Country */}
        <div className="filter-container">
          <label>Choose Cuisine: </label>
          <select onChange={(e) => setSelectedCountry(e.target.value)} value={selectedCountry}>
            {countries.map((country) => (
              <option key={country.code} value={country.code}>
                {country.name}
              </option>
            ))}
          </select>
        </div>

        {/* Loading & Error Handling */}
        {loading && <p className="loading">Loading recipes...</p>}
        {error && <p className="error">{error}</p>}

        {/* Meal Grid */}
        <div className="meal-grid">
          {filteredMeals.length > 0 ? (
            filteredMeals.map((meal) => (
              <div className="meal-card" key={meal.idMeal}>
                <Link to={`/recipe/${meal.idMeal}`} className="meal-link">
                  <img src={meal.strMealThumb} alt={meal.strMeal} className="meal-image" />
                  <h3>{meal.strMeal}</h3>
                </Link>
              </div>
            ))
          ) : (
            <p className="no-results">No meals found.</p>
          )}
        </div>
      </div>
    </>
  );
}

export default HomePage;
