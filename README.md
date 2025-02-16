# 🍽️ Recipe Finder App

A React-based web application that allows users to search for recipes, view details, and save favorite meals using TheMealDB API.

# 🚀 Features & Functionality

## ✅ Core Features
1- 🏠 Home Page

- Displays a list of recipes fetched from an API.
- Users can search for meals by name.
- Option to filter meals by country/cuisine.
  
2- 📄 Recipe Details Page

-Shows ingredients, instructions, and images of selected recipes.
- Users can add recipes to favorites.
  
3- ❤️ Favorites Page

- Allows users to save and manage their favorite meals.
- Uses Context API to store favorite recipes.
  
4- 🔄 Page Navigation

- Uses React Router for seamless page transitions.

# ✨ Additional Features
1- 🌎 Filter by Country – Users can select cuisine from a dropdown menu.
2- 🔍 Search Functionality – Find meals by name.
3- 📌 Save to Favorites – Users can add meals to a favorites list.

# 🔍 API Used
- TheMealDB API – Provides meal data, images, ingredients, and categories.

# 🛠️ Tech Stack
- Frontend: React.js, React Router, Context API
- Styling: Tailwind CSS
- API Calls: Axios
- State Management: useState, useEffect, Context API

# 📂 Project Structure
/src
 ├── /components
 │   ├── Navbar.js
 │   ├── SearchBar.js
 │
 ├── /pages
 │   ├── HomePage.js
 │   ├── RecipeDetails.js
 │   ├── FavoritesPage.js
 │
 ├── /context
 │   ├── FavoritesContext.js
 │
 ├── App.js
 ├── index.js
 ├── index.css
 ├── App.css

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
