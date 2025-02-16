import { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types"; // ✅ Import PropTypes
import "./Navbar.css";

function Navbar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  // ✅ Update search term while typing
  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value); // 🔥 Live search as user types
  };

  // ✅ Prevent page reload on form submit
  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchTerm.trim());
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">🍽️ Recipe Finder</Link>
      </div>

      {/* Search Bar */}
      <form className="search-bar" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search for recipes..."
          value={searchTerm}
          onChange={handleInputChange}
        />
        <button type="submit">🔍</button>
      </form>

      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/favorites">Favorites ❤️</Link></li>
      </ul>
    </nav>
  );
}

// ✅ PropTypes validation
Navbar.propTypes = {
  onSearch: PropTypes.func.isRequired, // onSearch must be a function
};

export default Navbar;
