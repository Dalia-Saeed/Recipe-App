import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (recipe) => {
    setFavorites([...favorites, recipe]);
  };

  const removeFromFavorites = (id) => {
    setFavorites(favorites.filter((recipe) => recipe.idMeal !== id));
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addToFavorites, removeFromFavorites }}>
      {children}
    </FavoritesContext.Provider>
  );
}

FavoritesProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export function useFavorites() {
  return useContext(FavoritesContext);
}
